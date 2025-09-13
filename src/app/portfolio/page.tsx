import {ReactNode} from "react";
import PortfolioPageUI from "@/aymericpixel/app/portfolio/_page";
import {makePageMetadata} from "@/aymericpixel/lib/seo/seoConfig";
import {Metadata} from "next";

export const metadata: Metadata = makePageMetadata({
	title: "Mes réalisations",
	description:
		"Développeur freelance web & mobile, je crée vos apps sur mesure avec un suivi clair et des solutions performantes pour garantir le succès de votre projet.",
	path: "/portfolio",
	keywords: [
		"portfolio freelance",
		"réalisations développeur web",
		"projets freelance mobile",
		"réalisations site vitrine",
		"exemple application Flutter",
		"projets Next.js",
		"réalisations NestJS",
		"site e-commerce freelance",
		"références développeur web",
		"cas client freelance",
		"applications développées",
		"projets web & mobile",
		"portfolio développeur freelance",
		"projets startup freelance",
		"créations site vitrine",
		"démonstrations application mobile",
		"galerie de réalisations web",
		"exemples concrets freelance",
		"réalisations SaaS freelance",
		"démo site e-commerce",
		"réalisations applications iOS Android",
		"exemple de projets web sur mesure",
		"réalisations web freelance Limoges",
		"projets client freelance",
		"réalisations design web",
		"travaux antérieurs freelance",
		"références site corporate",
		"exemple projet sur mesure",
		"réalisations back-end API",
		"exemples site responsive",
		"applications hybrides réalisées",
		"démonstration compétences freelance",
		"projets de refonte web",
		"réalisations UI UX freelance",
		"exemple site wordpress vs Next.js",
		"comparatif projets freelance",
		"réalisations front-end back-end",
		"galerie projets numériques",
		"portfolio développeur mobile",
		"exemples SaaS développés"
	]
});
export default function PortfolioPage() : ReactNode {
	return <PortfolioPageUI />;
}
