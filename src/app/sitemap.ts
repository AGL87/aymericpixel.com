export default async function sitemap() {
	const base = "https://aymericpixel.com";
	return [
		{ url: `${base}/`, changefreq: "weekly", priority: 1.0 },
		{ url: `${base}/portfolio`, changefreq: "weekly", priority: 1.0 },
		{ url: `${base}/process`, changefreq: "weekly", priority: 0.5 },
		{ url: `${base}/contact`, changefreq: "weekly", priority: 0.5 },
		{ url: `${base}/legal/legal`, changefreq: "weekly", priority: 0.5 },
		{ url: `${base}/legal/seller`, changefreq: "weekly", priority: 0.5 },
		{ url: `${base}/solutions/echo`, changefreq: "weekly", priority: 1.0 },
	];
}
