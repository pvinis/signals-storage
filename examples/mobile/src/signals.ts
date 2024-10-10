import { signal } from "@preact/signals-react";
import { signalWithStorage } from "./signalWithStorage";

export const tempCount = signal(0);

export const persistedCount = signalWithStorage("persistedCount", 0);
