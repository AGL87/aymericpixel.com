import { NextRequest, NextResponse } from "next/server";
import mailjet from "node-mailjet";

type Field = "firstname" | "lastname" | "devType" | "subject" | "project" | "email" | "phone";
type FieldErrors = Partial<Record<Field, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const RE_0     = /^0[1-9]\d{8}$/;
const RE_PLUS  = /^\+33[1-9]\d{8}$/;
const RE_0033  = /^0033[1-9]\d{8}$/;

const stripPhone = (s: string) => s.replace(/[\s.\-\u00A0()]/g, "");

const isValidFRPhone = (raw: string) => {
	const s = stripPhone(raw);
	return RE_0.test(s) || RE_PLUS.test(s) || RE_0033.test(s);
};

const toE164FR = (raw: string) => {
	const s = stripPhone(raw);
	if (RE_PLUS.test(s)) return s;
	if (RE_0033.test(s)) return "+" + s.slice(2);
	if (RE_0.test(s)) return "+33" + s.slice(1);
	return s;
};

export async function POST(req: NextRequest) {
	const body = await req.json().catch(() => ({} as Record<string, unknown>));

	const firstname = String(body.firstname ?? "").trim();
	const lastname  = String(body.lastname  ?? "").trim();
	const devType   = String(body.devType   ?? "").trim();
	const subject   = String(body.subject   ?? "").trim();
	const project   = String(body.project   ?? "").trim();

	const email = body.email ? String(body.email).trim() : "";
	const phone = body.phone ? String(body.phone).trim() : "";

	const errors: FieldErrors = {};

	if (!firstname || firstname.length < 2) errors.firstname = "Prénom requis (≥ 2 caractères).";
	if (!lastname  || lastname.length  < 2) errors.lastname  = "Nom requis (≥ 2 caractères).";
	if (!email  || email.length  < 2) {
		errors.email = "L'email est requis";
	} else if (!EMAIL_RE.test(email)) {
		errors.email = "Adresse e-mail invalide.";
	}
	let phoneE164 = "";
	if (phone) {
		if (!isValidFRPhone(phone)) {
			errors.phone = "Numéro invalide (ex. 06XXXXXXXX / +33XXXXXXXXX).";
		} else {
			phoneE164 = toE164FR(phone);
		}
	}

	if (!devType) errors.devType = "Type de projet requis.";
	else if (!["__web_dev__", "__mobile_dev__"].includes(devType)) errors.devType = "Type de projet invalide.";
	if (!subject) errors.subject = "Sujet requis.";
	else if (subject.length > 100) errors.subject = "Sujet trop long (100 caractères max).";
	if (!project || project.length < 10) errors.project = "Décrivez brièvement votre projet (≥ 10 caractères).";

	if (Object.keys(errors).length > 0) {
		return NextResponse.json(
			{ message: "Les champs ne sont pas correctement remplis.", errors },
			{ status: 400 }
		);
	}

	const devTypeLabel = devType === "__web_dev__" ? "Développement web" : "Développement mobile";
	const fullName = `${firstname} ${lastname}`.trim();
	const contactLines = [
		`Nom : ${fullName}`,
		`Email : ${email}`,
		phone && `Téléphone : ${phoneE164 || stripPhone(phone)}`,
		`Type de projet : ${devTypeLabel}`
	].filter(Boolean);

	try {
		const pub = process.env.MAILJET_PUBLIC_KEY ?? "";
		const priv = process.env.MAILJET_PRIVATE_KEY ?? "";
		if (!pub || !priv || !process.env.MAILJET_TO) {
			return NextResponse.json({ message: "Service d’email non configuré." }, { status: 500 });
		}

		const client = mailjet.apiConnect(pub, priv);
		const response = await client.post("send", { version: "v3.1" }).request({
			Messages: [
				{
					From: { Email: process.env.MAILJET_TO, Name: "Formulaire de contact Aymeric Pixel" },
					To: [{ Email: process.env.MAILJET_TO, Name: process.env.MAILJET_NAME || "Aymeric" }],
					Subject: `[CONTACT] ${subject}`,
					TextPart: `${contactLines.join("\n")}\n\nMessage :\n${project}`
				}
			]
		});

		if (response.response?.status !== 200) {
			return NextResponse.json({ message: "L’envoi de l’email a échoué." }, { status: 500 });
		}

		return NextResponse.json({ message: "Message envoyé." }, { status: 200 });
	} catch {
		return NextResponse.json({ message: "L’envoi de l’email a échoué." }, { status: 500 });
	}
}
