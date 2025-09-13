import {ReactNode} from "react";
import {LegalSellerPageUI} from "@/aymericpixel/app/legal/seller/_page";
import {makePageMetadata} from "@/aymericpixel/lib/seo/seoConfig";
import {Metadata} from "next";

export const metadata: Metadata = makePageMetadata({
	title: "Conditions générales de vente",
	description: "Découvrez les conditions générales de vente d’Aymeric Pixel : prestations web & mobile, modalités de paiement, facturation et cadre contractuel freelance.",
	path: "/legal/seller",
	keywords: [
		"conditions générales de vente freelance",
		"CGV développeur web",
		"CGV développeur mobile",
		"CGV prestation de services",
		"CGV freelance informatique",
		"conditions de facturation freelance",
		"CGV création site web",
		"CGV développement application",
		"contrat freelance web mobile",
		"conditions vente développeur indépendant",
		"CGV développeur full-stack",
		"CGV mission freelance",
		"conditions de règlement freelance",
		"CGV services numériques",
		"CGV site vitrine",
		"CGV application mobile freelance",
		"CGV développeur indépendant",
		"CGV e-commerce freelance",
		"CGV plateforme SaaS",
		"CGV développeur startup",
		"conditions générales vente informatique",
		"CGV freelance Limoges",
		"CGV conception web",
		"CGV prestations digitales",
		"CGV création site vitrine",
		"CGV développement back-end",
		"CGV freelance application iOS Android",
		"CGV prestations freelance informatique",
		"CGV service web mobile",
		"CGV développement API",
		"CGV intégration freelance",
		"CGV maintenance freelance",
		"conditions générales d’intervention freelance",
		"CGV développeur indépendant Nouvelle-Aquitaine",
		"CGV création SaaS freelance",
		"CGV mission agence freelance",
		"CGV développeur indépendant pas cher",
		"CGV hébergement freelance",
		"CGV support technique freelance",
		"CGV développeur logiciel indépendant"
	]
});
export default function LegalSellerPage() : ReactNode {
	return (
		<LegalSellerPageUI />
	)
}