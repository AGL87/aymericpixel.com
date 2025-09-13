import type { Metadata } from "next";

export const siteName = "Aymeric Pixel";
export const siteUrl = "https://aymericpixel.com";
export const defaultLocale = "fr_FR";

const toAbsolute = (p?: string) =>
	!p ? undefined : p.startsWith("http") ? p : `${siteUrl}${p.startsWith("/") ? "" : "/"}${p}`;

export const baseMetadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: { default: siteName, template: `%s — ${siteName}` },
	description:
		"Développeur web & mobile freelance à Limoges. Sites Next.js, apps Flutter, back-ends NestJS/Symfony. Devis rapide et livraison fiable.",
	applicationName: siteName,
	keywords: [
		"développeur freelance",
		"freelance web",
		"freelance mobile",
		"site web sur mesure",
		"application mobile sur mesure",
		"création site Next.js",
		"développement Flutter",
		"développement NestJS",
		"développeur Symfony",
		"site vitrine freelance",
		"refonte site web",
		"développement full-stack",
		"freelance Limoges",
		"développeur indépendant",
		"applications iOS Android",
		"développement SaaS",
		"consultant digital freelance",
		"création e-commerce freelance",
		"développeur React",
		"intégrateur freelance",
		"hébergement et maintenance site",
		"développement API freelance",
		"création application métier",
		"freelance Nouvelle-Aquitaine",
		"développeur startup",
		"solutions web personnalisées",
		"création site vitrine Limoges",
		"développement mobile freelance",
		"intégration design web",
		"freelance transformation digitale",
		"services web & mobile",
		"développeur freelance pas cher",
		"création plateforme sur mesure",
		"site responsive freelance",
		"application multiplateforme",
		"modernisation site existant",
		"création landing page freelance",
		"développement web à distance",
		"expert freelance digital",
		"consultant freelance informatique"
	],
	openGraph: {
		type: "website",
		locale: defaultLocale,
		siteName,
		url: siteUrl
	},
	twitter: {
		card: "summary_large_image"
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png"
	},
	alternates: {
		canonical: "/"
	},
	robots: { index: true, follow: true }
};

type PageSeo = {
	title?: string;
	description?: string;
	path?: string;
	image?: string;
	noIndex?: boolean;
	keywords?: string[];
};

export function makePageMetadata(seo: PageSeo = {}): Metadata {
	const canonicalPath = seo.path ?? "/";
	const absoluteUrl = toAbsolute(canonicalPath);
	const absoluteImage = toAbsolute(seo.image);
	const finalTitle = seo.title ? `${seo.title} — ${siteName}` : siteName;
	const finalDesc = seo.description ?? baseMetadata.description;

	return {
		...baseMetadata,
		title: { absolute: finalTitle },
		description: finalDesc,
		keywords: seo.keywords,
		alternates: { canonical: canonicalPath },
		openGraph: {
			...baseMetadata.openGraph,
			title: finalTitle,
			description: finalDesc ?? undefined,
			url: absoluteUrl,
			images: absoluteImage ? [{ url: absoluteImage }] : undefined
		},
		twitter: {
			...baseMetadata.twitter,
			title: finalTitle,
			description: finalDesc ?? undefined,
			images: absoluteImage ? [absoluteImage] : undefined
		},
		robots: seo.noIndex ? { index: false, follow: false } : { index: true, follow: true }
	};
}
