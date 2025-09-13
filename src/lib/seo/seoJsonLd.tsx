"use client";
export default function SeoJsonLd() {
	const data = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": "Aymeric Pixel",
		"image": "https://aymericpixel.com/assets/images/logo.webp",
		"url": "https://aymericpixel.com",
		"telephone": "+33 6 12 68 30 95",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "11 Bis Rue des Palmiers",
			"addressLocality": "Limoges",
			"postalCode": "87100",
			"addressCountry": "FR"
		},
		"areaServed": [{ "@type": "City", "name": "Limoges" }, { "@type": "AdministrativeArea", "name": "Haute-Vienne" }],
		"priceRange": "€€",
		"sameAs": ["https://www.linkedin.com/in/aymeric-leger-achard/"],
		"serviceType": ["Développement web", "Applications mobiles", "Maintenance", "SEO technique"]
	};
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
