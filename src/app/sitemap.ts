export default async function sitemap() {
	const base = "https://aymericpixel.com";
	return [
		{ url: `${base}/`, changefreq: "weekly", priority: 1.0 },
		{ url: `${base}/portfolio`, changefreq: "weekly", priority: 1 },
		{ url: `${base}/process`, changefreq: "monthly", priority: 0.5 },
		{ url: `${base}/contact`, changefreq: "monthly", priority: 0.5 },
		{ url: `${base}/legal/legal`, changefreq: "monthly", priority: 0.5 },
		{ url: `${base}/legal/seller`, changefreq: "monthly", priority: 0.5 },
	];
}
