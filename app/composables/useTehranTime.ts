// composables/useTehranTime.ts
import { ref, onMounted, onUnmounted, watch } from "#imports";

export function useTehranTime(locale?: Ref<string>) {
  // Map برای تبدیل اعداد انگلیسی به فارسی
  const persianDigitsMap: Record<string, string> = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  // متغیر reactive برای زمان فرمت شده
  const formattedTime = ref("--:--:--");
  const isClient = ref(false);

  /**
   * تبدیل زمان به منطقه زمانی تهران
   */
  function getTehranTime(): string {
    try {
      return new Date()
        .toLocaleTimeString("en-US", {
          timeZone: "Asia/Tehran",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
        .replace(/^24:/, "00:");
    } catch (error) {
      console.error("Error getting Tehran time:", error);
      return "--:--:--";
    }
  }

  /**
   * تبدیل اعداد انگلیسی به فارسی
   */
  function convertToPersianDigits(timeStr: string): string {
    return timeStr.replace(/\d/g, (d) => persianDigitsMap[d] || d);
  }

  /**
   * تبدیل اعداد فارسی به انگلیسی (اگر نیاز بود)
   */
  function convertToEnglishDigits(timeStr: string): string {
    const englishDigitsMap: Record<string, string> = {
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
    };
    return timeStr.replace(/[۰-۹]/g, (d) => englishDigitsMap[d] || d);
  }

  /**
   * آپدیت زمان نمایش
   */
  function updateTime() {
    if (!isClient.value) return;

    let time = getTehranTime();

    // اگر locale مشخص شده، بر اساس آن اعداد را تبدیل کن
    if (locale?.value) {
      if (locale.value.startsWith("fa")) {
        time = convertToPersianDigits(time);
      }
      // برای سایر زبان‌ها اعداد انگلیسی باقی می‌مانند
    }

    formattedTime.value = time;
  }

  /**
   * مقداردهی اولیه در سمت کلاینت
   */
  onMounted(() => {
    isClient.value = true;
    updateTime(); // اولین آپدیت

    // آپدیت هر ثانیه
    const interval = setInterval(updateTime, 1000);
    onUnmounted(() => clearInterval(interval));
  });

  /**
   * واکنش به تغییر locale
   */
  if (locale) {
    watch(locale, updateTime);
  }

  /**
   * زمان خام تهران (برای استفاده‌های دیگر)
   */
  function getRawTehranTime(): Date {
    const now = new Date();
    const tehranTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Tehran" })
    );
    return tehranTime;
  }

  /**
   * زمان به فرمت دلخواه
   */
  function formatTime(
    format: "12h" | "24h" = "24h",
    showSeconds = true
  ): string {
    const date = getRawTehranTime();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "Asia/Tehran",
      hour12: format === "12h",
      hour: "2-digit",
      minute: "2-digit",
      second: showSeconds ? "2-digit" : undefined,
    };

    let time = date.toLocaleTimeString("en-US", options);

    if (locale?.value?.startsWith("fa")) {
      time = convertToPersianDigits(time);
    }

    return time;
  }

  return {
    // زمان فرمت شده (اصلی)
    formattedTime,

    // زمان خام
    rawTime: getRawTehranTime,

    // تابع کمکی برای فرمت‌های مختلف
    formatTime,

    // وضعیت
    isClient,

    // توابع تبدیل
    toPersianDigits: convertToPersianDigits,
    toEnglishDigits: convertToEnglishDigits,

    // تابع آپدیت دستی
    updateTime,
  };
}

// نوع بازگشتی composable
export type UseTehranTimeReturn = ReturnType<typeof useTehranTime>;
