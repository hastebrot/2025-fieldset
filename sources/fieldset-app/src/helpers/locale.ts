export const detectHourCycleFormat = (defaultLocale = "en-US"): 12 | 24 => {
  const locale = typeof window !== "undefined" ? window.navigator.language : defaultLocale;

  // detect using Intl.ResolvedDateTimeFormatOptions.
  type FormatOptions = { hourCycle: string; hour12: boolean };
  const formatOptions = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
  }).resolvedOptions() as unknown as FormatOptions;
  return formatOptions.hour12 ? 12 : 24;

  // detect using Intl.DateTimeFormat.
  // const date = new Date();
  // date.setHours(20);
  // // const timeString = date.toLocaleTimeString(locale, {
  // //   numberingSystem: "latn",
  // // });
  // const hourFormat = new Intl.DateTimeFormat(locale, {
  //   hour: "numeric",
  //   numberingSystem: "latn",
  // });
  // const hourString = hourFormat.format(date);
  // const digits = hourString.replace(/\D/g, "");
  // return digits.includes("20") ? 24 : 12;
};
