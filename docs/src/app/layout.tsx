import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Html from "./Html";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gabriel Logan - Portfolio",
	description: "Gabriel Logan's portfolio, showcasing his work and projects.",
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_API_KEY,
	},
	authors: [{ name: "Gabriel Logan", url: "https://github.com/gabriel-logan" }],
	abstract: "Gabriel Logan's portfolio, showcasing his work and projects.",
	keywords: [
		"Gabriel Logan",
		"Portfolio",
		"Projects",
		"Work",
		"Developer",
		"React",
		"Next.js",
		"Tailwind CSS",
		"TypeScript",
		"JavaScript",
		"Resume",
		"Frontend",
		"Backend",
		"Fullstack",
		"Web Development",
		"Software Development",
		"Software Engineering",
		"Software Developer",
		"Software Engineer",
		"Web Developer",
		"Mobile Developer",
		"Mobile Development",
		"React Native",
	],
	appleWebApp: {
		title: "Gabriel Logan - Portfolio",
		statusBarStyle: "default",
	},
	category: "Portfolio",
	classification: "Portfolio",
	creator: "Gabriel Logan",
	generator: "Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Html>
			<head>
				<meta name="mobile-web-app-capable" content="yes" />
			</head>
			<body className={`${inter.className} is-preload`}>{children}</body>
		</Html>
	);
}
