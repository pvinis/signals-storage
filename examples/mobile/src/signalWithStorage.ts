import { signalWithStorageCustom, Storage } from "@pvinis/signals-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storage: Storage = {
  getItem: (key) => AsyncStorage.getItem(key),
  setItem: (key, value) => AsyncStorage.setItem(key, value),
  removeItem: (key) => AsyncStorage.removeItem(key),
  clear: () => AsyncStorage.clear(),
};

export const signalWithStorage = (key: string, initialValue: any) =>
  signalWithStorageCustom(key, initialValue, storage);
