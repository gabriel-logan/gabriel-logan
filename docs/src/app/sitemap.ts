import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const hostUrl = process.env.NEXT_PUBLIC_WEBSITE_URL as string;
	return [
		{
			url: hostUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			alternates: {
				languages: {
					en: `${hostUrl}/en`,
					pt: `${hostUrl}/pt`,
				},
			},
		},
	];
}
