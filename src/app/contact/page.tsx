import {ReactNode} from "react";
import ContactPageUI from "@/aymericpixel/app/contact/_page";
import {makePageMetadata} from "@/aymericpixel/lib/seo/seoConfig";
import {Metadata} from "next";

export const metadata: Metadata = makePageMetadata({
	title: "Formulaire de contact",
	description: "Besoin d’un dev Flutter, Symfony ou Next.js ? Contactez-moi pour un devis rapide et un accompagnement sur mesure pour vos projets web & mobile.",
	path: "/contact",
	keywords: [
		"contacter développeur freelance",
		"demande de devis freelance",
		"freelance web mobile contact",
		"prendre rendez-vous développeur",
		"contact création site web",
		"contact application mobile",
		"contact développeur indépendant",
		"formulaire contact freelance",
		"demander un devis site vitrine",
		"joindre développeur freelance",
		"contact projet digital",
		"obtenir un devis freelance",
		"contacter freelance web Limoges",
		"contact développeur apps mobiles",
		"prise de contact freelance",
		"demande de renseignement freelance",
		"échange projet digital",
		"contact mission freelance",
		"demande d’informations site internet",
		"demander tarif freelance",
		"prise de rendez-vous freelance",
		"contact développeur front-end",
		"contact développeur back-end",
		"envoyer un message freelance",
		"contacter freelance indépendant",
		"demande d’accompagnement web",
		"obtenir un devis application mobile",
		"formulaire de devis freelance",
		"prise de contact projet startup",
		"demander un rendez-vous projet web",
		"contact freelance SaaS",
		"contacter freelance pas cher",
		"demande de collaboration freelance",
		"obtenir un devis rapide",
		"contact développeur site e-commerce",
		"contact refonte site web",
		"prendre contact développeur local",
		"contact professionnel freelance",
		"demande de devis en ligne",
		"contacter freelance digital"
	]
});

export default function ContactPage() : ReactNode {
	return <ContactPageUI />
}