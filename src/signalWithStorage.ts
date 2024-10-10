import { signal, effect, type Signal } from "npm:@preact/signals-react@2";
import type { Storage } from "./types.ts";

export function signalWithStorageCustom<T>(
  key: string,
  initialValue: T,
  storage: Storage
): Signal<T> {
  const storedValue = storage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const sig = signal<T>(initial);

  let skipSave = true;

  const load = () => {
    skipSave = true;
    try {
      const stored = JSON.parse(localStorage.getItem(key) ?? "null");
      if (stored) sig.value = stored;
    } catch (e) {}
    skipSave = false;
  };

  effect(() => {
    const value = sig.value;
    if (skipSave) return;
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (e) {}
  });

  load();
  return sig;
}
