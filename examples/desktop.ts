import { signal } from "npm:@preact/signals-react";
import { signalWithStorageCustom } from "../src/signalWithStorage.ts";
import { jsObjectStorage } from "../src/premadeStorages.ts";

const signalWithStorage = <T>(key: string, initialValue: T) =>
  signalWithStorageCustom(key, initialValue, jsObjectStorage);

const tempCount = signal(0);
console.log(tempCount.value);

const persistedCount = signalWithStorage("persistedCount", 0);
console.log(persistedCount.value);
