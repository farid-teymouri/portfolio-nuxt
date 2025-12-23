// useHeaderSeo.ts
import { useI18n } from "#i18n";
import { useHead } from "#app";

export function useHeaderSeo() {
  const { locale } = useI18n();

  const dir = computed(() => (locale.value === "fa" ? "rtl" : "ltr"));

  // فقط lang و dir را دستی تنظیم می‌کنیم
  useHead({
    htmlAttrs: {
      lang: () => (locale.value === "fa" ? "fa-IR" : "en-US"),
      dir: () => dir.value,
    },
  });

  return { dir };
}
