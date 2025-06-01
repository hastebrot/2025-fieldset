/// <reference types="@testing-library/jest-dom/vitest" />
import * as matchers from "@testing-library/jest-dom/matchers";
import chalk from "chalk";
import { expect } from "vitest";

export { matchers };

export function registerMatchers() {
  function patchJestDomMatchers(matchers: object) {
    return Object.fromEntries(
      Object.entries(matchers).map(([key, value]) => {
        return [key, typeof value === "function" ? patchMatcher(value) : value];
      }),
    );
  }

  function patchMatcher(matcher: any) {
    return function (...args: any[]) {
      this.utils.EXPECTED_COLOR = chalk.green;
      this.utils.RECEIVED_COLOR = chalk.red;
      return matcher.apply(this, args);
    };
  }

  expect.extend(patchJestDomMatchers(matchers));
}

registerMatchers();
