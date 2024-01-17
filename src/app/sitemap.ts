export default function sitemap() {
	return [
		{
			url: "https://samess.vercel.app" || "https://samess.tech",
			lastModified: new Date(),
		},
		{
			url: "https://samess.vercel.app/about" || "https://samess.tech/about",
			lastModified: new Date(),
		},
		{
			url: "https://samess.vercel.app/projects" || "https://samess.tech/projects",
			lastModified: new Date(),
		},
		{
			url: "https://samess.vercel.app/blog" || "https://samess.tech/blog",
			lastModified: new Date(),
		},
	];
}
