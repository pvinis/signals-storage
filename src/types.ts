/**
 * A storage interface that is used to persist signals.
 * (localStorage, AsyncStorage, MMKV, filesystem etc.)
 */
export interface Storage {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}
