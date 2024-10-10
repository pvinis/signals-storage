import { signal } from "npm:@preact/signals-react";
import { signalWithStorage } from "./signalWithStorage.ts";

export const tempCount = signal(0);

export const persistedCount = signalWithStorage("persistedCount", 0);
