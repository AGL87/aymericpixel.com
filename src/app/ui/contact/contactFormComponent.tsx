"use client";

import { useState } from "react";
import UiSelectComponent from "@/aymericpixel/app/ui/form/uiSelectComponent";
import style from "./contactFormComponent.module.css";

type Field = "firstname" | "lastname" | "devType" | "subject" | "project" | "email" | "phone";
type FieldErrors = Partial<Record<Field, string>>;

export default function ContactFormComponent() {
	const [errors, setErrors] = useState<FieldErrors>({});
	const [globalMsg, setGlobalMsg] = useState<string | null>(null);
	const [successMsg, setSuccessMsg] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setLoading(true);
		setErrors({});
		setGlobalMsg(null);
		setSuccessMsg(null);

		const form = e.currentTarget;
		const fd = new FormData(form);
		const payload = Object.fromEntries(fd.entries()); // garde exactement: firstname, lastname, devType, subject, project

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			});
			const data = await res.json();

			if (!res.ok) {
				setGlobalMsg(data.message ?? "Une erreur est survenue.");
				if (data.errors) setErrors(data.errors as FieldErrors);
			} else {
				setSuccessMsg(data.message ?? "Merci, votre message a été envoyé.");
				form.reset();
			}
		} catch {
			setGlobalMsg("Impossible d'envoyer votre message pour le moment.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<form className={style.formContent} onSubmit={onSubmit} noValidate>
			<div className={style.formHeader}>
				<h3 className={style.formTitle}>Formulaire de contact</h3>
			</div>

			{globalMsg && (
				<div role="alert" className={style.formError}>
					{globalMsg}
				</div>
			)}
			{successMsg && (
				<div role="status" className={style.formSuccess}>
					{successMsg}
				</div>
			)}

			<div className={style.formLine}>
				<div className={style.formColumn}>
					<label htmlFor="firstname">Prénom *</label>
					<input
						type="text"
						id="firstname"
						name="firstname"
						className={style.field}
						required
						aria-invalid={!!errors.firstname}
						aria-describedby={errors.firstname ? "firstname-error" : undefined}
					/>
					{errors.firstname && <p id="firstname-error" className={style.fieldError}>{errors.firstname}</p>}
				</div>
				<div className={style.formColumn}>
					<label htmlFor="lastname">Nom *</label>
					<input
						type="text"
						id="lastname"
						name="lastname"
						className={style.field}
						required
						aria-invalid={!!errors.lastname}
						aria-describedby={errors.lastname ? "lastname-error" : undefined}
					/>
					{errors.lastname && <p id="lastname-error" className={style.fieldError}>{errors.lastname}</p>}
				</div>
			</div>

			<div className={style.formLine}>
				<div className={style.formColumn}>
					<label htmlFor="firstname">Email *</label>
					<input
						type="email"
						id="email"
						name="email"
						className={style.field}
						required
						aria-invalid={!!errors.email}
						aria-describedby={errors.email ? "email-error" : undefined}
					/>
					{errors.email && <p id="email-error" className={style.fieldError}>{errors.email}</p>}
				</div>
				<div className={style.formColumn}>
					<label htmlFor="phone">Numéro de téléphone</label>
					<input
						type="text"
						id="phone"
						name="phone"
						className={style.field}
						aria-invalid={!!errors.phone}
						aria-describedby={errors.phone ? "phone-error" : undefined}
					/>
					{errors.phone && <p id="phone-error" className={style.fieldError}>{errors.phone}</p>}
				</div>
			</div>

			<div className={style.formLine}>
				<div className={style.formColumn}>
					<label htmlFor="_devType">Type de projet *</label>
					<UiSelectComponent
						name="devType"
						id="devType"
						required
						options={[
							{ label: "Développement web", value: "__web_dev__" },
							{ label: "Développement mobile", value: "__mobile_dev__" }
						]}
					/>
					{errors.devType && <p className={style.fieldError}>{errors.devType}</p>}
				</div>
			</div>

			<div className={style.formLine}>
				<div className={style.formColumn}>
					<label htmlFor="subject">Sujet *</label>
					<input
						type="text"
						id="subject"
						name="subject"
						className={style.field}
						required
						aria-invalid={!!errors.subject}
						aria-describedby={errors.subject ? "subject-error" : undefined}
					/>
					{errors.subject && <p id="subject-error" className={style.fieldError}>{errors.subject}</p>}
				</div>
			</div>

			<div className={style.formLine}>
				<div className={style.formColumn}>
					<label htmlFor="project">Description du projet *</label>
					<textarea
						name="project"
						id="project"
						cols={30}
						rows={10}
						className={style.field}
						required
						aria-invalid={!!errors.project}
						aria-describedby={errors.project ? "project-error" : undefined}
					/>
					{errors.project && <p id="project-error" className={style.fieldError}>{errors.project}</p>}
				</div>
			</div>

			<div className={style.formLine}>
				<button type="submit" className={style.submitButton} disabled={loading}>
					<i className="fi fi-bs-paper-plane" aria-hidden="true"></i>
					{loading ? "Envoi…" : "Soumettre ma demande"}
				</button>
			</div>
		</form>
	);
}
