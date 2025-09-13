import {ReactNode} from "react";
import {LegalMentionsPageUI} from "@/aymericpixel/app/legal/legal/_page";
import {makePageMetadata} from "@/aymericpixel/lib/seo/seoConfig";
import {Metadata} from "next";

export const metadata: Metadata = makePageMetadata({
	title: "Mentions légales",
	description: "Consultez les mentions légales du site Aymeric Pixel : informations légales, éditeur, hébergeur et conformité RGPD pour vos projets web & mobile.",
	path: "/legal/legal",
	keywords: [
		"mentions légales site",
		"mentions légales freelance",
		"informations légales site web",
		"mentions obligatoires développeur",
		"mentions juridiques freelance",
		"conformité légale site internet",
		"mentions RGPD",
		"mentions légales développeur indépendant",
		"mentions légales Aymeric Pixel",
		"mentions légales création site web",
		"mentions légales application mobile",
		"mentions légales prestataire digital",
		"mentions légales obligatoire site vitrine",
		"mentions légales site professionnel",
		"mentions légales développeur freelance",
		"mentions légales activité indépendante",
		"mentions légales micro-entrepreneur",
		"mentions légales hébergeur site",
		"mentions légales site vitrine Limoges",
		"mentions légales freelance informatique",
		"mentions légales SaaS",
		"mentions légales e-commerce",
		"mentions légales blog professionnel",
		"mentions légales site perso pro",
		"mentions légales freelance web mobile",
		"mentions légales agence freelance",
		"mentions légales société freelance",
		"mentions légales entreprise individuelle",
		"mentions légales développeur mobile",
		"mentions légales RGPD freelance",
		"mentions légales conditions utilisation",
		"mentions légales site sécurisé",
		"mentions légales hébergement web",
		"mentions légales site responsive",
		"mentions légales loi française",
		"mentions légales développeur indépendant Limoges",
		"mentions légales conception web",
		"mentions légales site corporate",
		"mentions légales site startup",
		"mentions légales site SaaS"
	]
});

export default function LegalMentionsPage() : ReactNode {
	return (
		<LegalMentionsPageUI />
	)
}