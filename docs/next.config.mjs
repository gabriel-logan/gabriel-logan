/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	assetPrefix:
		process.env.NODE_ENV === "production"
			? "https://gabriel-logan.github.io/gabriel-logan/"
			: undefined,
	basePath:
		process.env.NODE_ENV === "production" ? "/gabriel-logan" : undefined,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
