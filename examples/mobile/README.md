# Signals with Storage (mobile example)

## Installation

```sh
npm jsr add @pvinis/signals-storage

or

pnpm jsr add @pvinis/signals-storage
```

## Usage

The suggested way to use this library is to create a simple wrapper around the `signalWithStorageCustom` function.

```ts
import { signalWithStorageCustom, Storage } from "@pvinis/signals-storage"
import { MMKV } from "react-native-mmkv"

const mmkvStore = new MMKV()

const mmkvStorage: Storage = {
  getItem: (key) => {
    const value = mmkvStore.getString(key)
    return value ? JSON.parse(value) : null
  },
  setItem: (key, value) => (mmkvStore.set(key, JSON.stringify(value))),
  removeItem: (key) => (mmkvStore.delete(key)),
  clearAll: () => (mmkvStore.clearAll()),
}

export const signalWithStorage = <T>(key: string, initialValue: T) =>
  signalWithStorageCustom(key, initialValue, mmkvStorage)
```

or

```ts
import { signalWithStorageCustom, Storage } from "@pvinis/signals-storage"
import AsyncStorage from "@react-native-async-storage/async-storage"

const storage: Storage = {
  getItem: (key) => AsyncStorage.getItem(key),
  setItem: (key, value) => AsyncStorage.setItem(key, value),
  removeItem: (key) => AsyncStorage.removeItem(key),
  clear: () => AsyncStorage.clear(),
}

export const signalWithStorage = <T>(key: string, initialValue: T) =>
  signalWithStorageCustom(key, initialValue, storage)
```

Then you can use the signalWithStorage function to create your signals.

```ts
export const tempCount = signalWithStorage("tempCount", 0)
export const persistedCount = signalWithStorage("persistedCount", 0)
```

## Example

You can run this example locally by cloning this repo and running:

```sh
pnpm install
pnpm start
```

or you can look how to use `signalWithStorage` in the the following files:
- Regular signal usage: [src/app/index.tsx](./src/app/index.tsx) 
- Signal creation: [src/signals.ts](./src/signals.ts)
- Simple wrapper: [src/signalWithStorage.ts](./src/signalWithStorage.ts)
