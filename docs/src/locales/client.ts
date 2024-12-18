// locales/client.ts
"use client";
import { createI18nClient } from "next-international/client";

export const { useI18n, useScopedI18n, I18nProviderClient } = createI18nClient({
	en: () => import("./en/en.json"),
	pt: () => import("./pt/pt.json"),
	de: () => import("./de/de.json"),
});
