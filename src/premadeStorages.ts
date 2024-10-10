import type { Storage } from "./types.ts";

let jsObjectStore: Record<string, string> = {};

export const jsObjectStorage: Storage = {
  getItem: (key) => jsObjectStore[key],
  setItem: (key, value) => (jsObjectStore[key] = value),
  removeItem: (key) => {
    delete jsObjectStore[key];
  },
  clear: () => (jsObjectStore = {}),
};
