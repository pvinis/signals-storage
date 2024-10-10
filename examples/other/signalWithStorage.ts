import { signalWithStorageCustom, type Storage } from "../../src/index.ts";
import { existsSync } from "@std/fs";

const STORE_DIR = "./store";

const fsStorage: Storage = {
  getItem: (key: string) => {
    ensureStorage();
    const filePath = `${STORE_DIR}/${key}`;
    if (existsSync(filePath)) {
      return Deno.readTextFileSync(filePath);
    }
    return null;
  },
  setItem: (key: string, value: string) => {
    ensureStorage();
    const filePath = `${STORE_DIR}/${key}`;
    Deno.writeTextFileSync(filePath, value);
  },
  removeItem: (key: string) => {
    ensureStorage();
    const filePath = `${STORE_DIR}/${key}`;
    Deno.removeSync(filePath);
  },
  clear: () => {
    try {
      Deno.removeSync(STORE_DIR, { recursive: true });
    } catch (e) {}
    ensureStorage();
  },
};

function ensureStorage() {
  if (existsSync(STORE_DIR)) return;
  Deno.mkdirSync(STORE_DIR);
}

export const signalWithStorage = <T>(key: string, initialValue: T) =>
  signalWithStorageCustom(key, initialValue, fsStorage);
