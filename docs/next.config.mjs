/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	assetPrefix:
		process.env.NODE_ENV === "production" ? "/gabriel-logan" : undefined,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
