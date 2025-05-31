/// <reference types="node" />
import { GlobalWindow } from "happy-dom";

export const dom = new GlobalWindow({ url: "http://localhost/" });

export function registerGlobals() {
  const ignoredKeys = ["undefined"];
  for (const key in Object.getOwnPropertyDescriptors(dom)) {
    if (global[key] === undefined && !ignoredKeys.includes(key)) {
      global[key] = dom[key];
    }
  }
}

registerGlobals();
