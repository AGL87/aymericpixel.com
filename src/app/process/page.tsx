import {ReactNode} from "react";
import ProcessPageUI from "@/aymericpixel/app/process/_page";
import {makePageMetadata} from "@/aymericpixel/lib/seo/seoConfig";
import {Metadata} from "next";

export const metadata: Metadata = makePageMetadata({
	title: "Processus de développement",
	description:
		"Freelance full-stack : apps mobiles (Flutter) & web (Symfony, Next.js, Nest.js). Processus agile, solutions sur mesure, livraison rapide et performante.",
	path: "/process",
	keywords: [
		"méthode de travail freelance",
		"processus développement web",
		"étapes création application",
		"workflow projet digital",
		"freelance méthode agile",
		"démarche projet web mobile",
		"organisation freelance",
		"déroulement mission freelance",
		"cycle de vie projet digital",
		"accompagnement développeur freelance",
		"comment travaille un freelance",
		"processus de développement agile",
		"phases de projet digital",
		"communication projet freelance",
		"méthodologie développement web",
		"gestion de projet freelance",
		"étapes création site vitrine",
		"roadmap projet freelance",
		"démarche qualité freelance",
		"réunion de cadrage projet",
		"validation maquette design",
		"sprint développement agile",
		"tests et recettes projet",
		"déploiement site internet",
		"suivi post-livraison freelance",
		"garantie projet freelance",
		"collaboration transparente freelance",
		"mode de fonctionnement freelance",
		"organisation projet digital",
		"méthodologie cycle projet",
		"support technique freelance",
		"processus maintenance site",
		"étapes refonte site web",
		"workflow développement mobile",
		"collaboration agile startup",
		"outils gestion de projet freelance",
		"étapes clés création SaaS",
		"sécurité projet digital",
		"freelance process complet",
		"démarche utilisateur projet"
	]
});

export default function ProcessPage() : ReactNode {
	return <ProcessPageUI />
}