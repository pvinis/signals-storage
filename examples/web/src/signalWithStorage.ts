import { signalWithStorageCustom, Storage } from "@pvinis/signals-storage";

const storage: Storage = window.localStorage;

export const signalWithStorage = <T>(key: string, initialValue: T) =>
  signalWithStorageCustom(key, initialValue, storage);
