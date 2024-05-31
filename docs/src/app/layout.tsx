import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Gabriel Logan - Portfolio",
	description: "Gabriel Logan's portfolio, showcasing his work and projects.",
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE_API_KEY,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} is-preload`}>{children}</body>
		</html>
	);
}
