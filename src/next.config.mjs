/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	distDir: process.env.NODE_ENV === "production" ? "../docs" : undefined,
	assetPrefix:
		process.env.NODE_ENV === "production" ? "/gabriel-logan" : undefined,
	basePath:
		process.env.NODE_ENV === "production" ? "/gabriel-logan" : undefined,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
