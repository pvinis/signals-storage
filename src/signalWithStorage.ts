import { signal, effect, type Signal } from "@preact/signals-react";
import type { Storage } from "./types.ts";

/**
 * Creates a signal that is persisted in the given storage. (localStorage, AsyncStorage, MMKV, filesystem etc.)
 *
 * @param key - The key to store the signal in the storage.
 * @param initialValue - The initial value of the signal.
 * @param storage - The storage to persist the signal in.
 * @returns A signal that is persisted in the given storage.
 */
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
