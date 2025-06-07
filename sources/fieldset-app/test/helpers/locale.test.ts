import { expect, describe as suite, test } from "vitest";
import { detectHourCycleFormat } from "../../src/helpers/locale";

suite("locale", () => {
  test("12 hour cycle", () => {
    expect(detectHourCycleFormat("en-US")).toBe(12); // united states.
    expect(detectHourCycleFormat("en-CA")).toBe(12); // canada.
    expect(detectHourCycleFormat("en-AU")).toBe(12); // australia.
    expect(detectHourCycleFormat("en-NZ")).toBe(12); // new zealand.
    expect(detectHourCycleFormat("en-IN")).toBe(12); // india.
    expect(detectHourCycleFormat("es-MX")).toBe(12); // mexico.
    expect(detectHourCycleFormat("es-AR")).toBe(12); // argentina.
  });

  test("24 hour cycle", () => {
    expect(detectHourCycleFormat("en-GB")).toBe(24); // united kingdom.
    expect(detectHourCycleFormat("en-IE")).toBe(24); // ireland.
    expect(detectHourCycleFormat("ga-IE")).toBe(24); // ireland.
    expect(detectHourCycleFormat("en-ZA")).toBe(24); // south africa.
    expect(detectHourCycleFormat("de-DE")).toBe(24); // germany.
    expect(detectHourCycleFormat("de-AT")).toBe(24); // austria.
    expect(detectHourCycleFormat("de-CH")).toBe(24); // switzerland.
    expect(detectHourCycleFormat("fr-FR")).toBe(24); // france.
    expect(detectHourCycleFormat("fr-CH")).toBe(24); // switzerland.
    expect(detectHourCycleFormat("it-IT")).toBe(24); // italy.
    expect(detectHourCycleFormat("it-CH")).toBe(24); // switzerland.
    expect(detectHourCycleFormat("es-ES")).toBe(24); // spain.
    expect(detectHourCycleFormat("pt-PT")).toBe(24); // portugal.
    expect(detectHourCycleFormat("pt-BR")).toBe(24); // brazil.
    expect(detectHourCycleFormat("ru-RU")).toBe(24); // russia.
  });

  test("12 hour cycle (non-latin)", () => {
    expect(detectHourCycleFormat("el-GR")).toBe(12); // greece.
    expect(detectHourCycleFormat("hi-IN")).toBe(12); // india.
    expect(detectHourCycleFormat("ko-KR")).toBe(12); // south korea.
    expect(detectHourCycleFormat("ar-SA")).toBe(12); // saudi arabia.
    expect(detectHourCycleFormat("ar-DZ")).toBe(12); // algeria.
    expect(detectHourCycleFormat("ar-TN")).toBe(12); // tunisia.
    expect(detectHourCycleFormat("ar-LY")).toBe(12); // libya.
    expect(detectHourCycleFormat("ar-EG")).toBe(12); // egypt.
  });

  test("24 hour cycle (non-latin)", () => {
    expect(detectHourCycleFormat("zh-CN")).toBe(24); // china.
    expect(detectHourCycleFormat("ar-MA")).toBe(24); // morocco.
  });
});
