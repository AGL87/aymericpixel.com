import { makePageMetadata } from "@/aymericpixel/lib/seo/seoConfig";
import { Metadata } from "next";
import SolutionsPageUI from "./_page";

export const metadata: Metadata = makePageMetadata({
    title: "Mes Solutions - Aymeric Pixel",
    description:
        "Découvrez mes solutions web et mobile : Echo pour un site vitrine clé en main en 72h, développement web sur-mesure, applications mobiles Flutter.",
    path: "/solutions",
    keywords: [
        "solutions web",
        "solutions mobile",
        "site vitrine clé en main",
        "développement web",
        "applications mobiles",
        "Echo",
        "freelance web",
        "agence web Limoges",
    ]
});

export default function SolutionsPage() {
    return <SolutionsPageUI />;
}
