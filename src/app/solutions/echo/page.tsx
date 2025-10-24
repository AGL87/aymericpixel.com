
import { Metadata } from "next";
import { makePageMetadata } from "@/aymericpixel/lib/seo/seoConfig";
import { ReactNode } from "react";
import EchoPageUI from "@/aymericpixel/app/solutions/echo/_page";

export const metadata: Metadata = makePageMetadata({
    title: "Echo - Site vitrine clé en main",
    description:
        "Echo : site vitrine complet pour startups et TPE/PME. Gestion de projet, conception graphique, SEO et hébergement inclus. À partir de 750€ TTC, livraison en 72h.",
    path: "/solutions/echo",
    keywords: [
        "site vitrine clé en main",
        "site vitrine startup",
        "site vitrine TPE PME",
        "site vitrine pas cher",
        "site vitrine rapide",
        "site vitrine avec SEO",
        "site vitrine hébergé",
        "site vitrine maintenance incluse",
        "Echo site vitrine",
        "création site vitrine 72h",
        "site vitrine freelance",
        "site vitrine Limoges",
        "site vitrine avec formulaire contact",
        "site vitrine mentions légales",
        "site vitrine professionnel",
        "site vitrine startup Limoges",
        "site vitrine TPE Limoges",
        "site vitrine PME Limoges",
        "site vitrine e-commerce",
        "site vitrine SaaS",
        "site vitrine prestataire",
        "site vitrine agence",
        "site vitrine consultant",
        "site vitrine freelance web",
        "site vitrine responsive",
        "site vitrine moderne",
        "site vitrine performant",
        "site vitrine sécurisé",
        "site vitrine avec analytics",
        "site vitrine avec CMS",
        "site vitrine customisable",
        "site vitrine évolutif",
        "site vitrine scalable",
        "site vitrine avec blog",
        "site vitrine avec portfolio",
        "site vitrine avec galerie",
        "site vitrine avec tarifs",
        "site vitrine avec devis",
        "site vitrine avec prise de rendez-vous",
        "site vitrine avec réservation",
        "site vitrine avec paiement",
        "site vitrine avec intégration",
        "site vitrine clé en main pas cher",
        "site vitrine clé en main rapide",
        "site vitrine clé en main professionnel",
        "site vitrine clé en main startup",
        "site vitrine clé en main TPE",
        "site vitrine clé en main PME"
    ]
});

export default function EchoPage(): ReactNode {
    return <EchoPageUI />;
}
