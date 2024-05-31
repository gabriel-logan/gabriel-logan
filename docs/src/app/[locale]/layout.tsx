import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";

import { I18nProviderClient } from "@/locales/client";
import { getI18n, getStaticParams } from "@/locales/server";

export function generateStaticParams() {
	return getStaticParams();
}

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: string };
}): Promise<Metadata> {
	setStaticParamsLocale(locale);

	const t = await getI18n();

	return {
		title: t("Metadata.Title"),
		description: t("Metadata.Description"),
	};
}

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>;

export default function LocaleRootLayout({
	children,
	params: { locale },
}: RootLayoutProps) {
	return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
