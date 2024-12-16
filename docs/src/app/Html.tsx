"use client";

import { usePathname } from "next/navigation";

export default function Html({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const pathname = usePathname();

	const locale = pathname.split("/")[1];

	const allowedLocales = ["en", "pt", "de"];

	return (
		<html lang={allowedLocales.includes(locale) ? locale : "en"} dir="ltr">
			{children}
		</html>
	);
}
