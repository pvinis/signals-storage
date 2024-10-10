# Signals with Storage

Signals are awesome. Make them even more awesome by **persisting them across sessions**.

This library allows you to easily persist your signals across sessions. It works in everywhere. React, React Native, Expo, Deno, Node, web, mobile, server etc.

It's as simple as this:

```ts
export const tempCount = signal(0)
export const persistedCount = signalWithStorage("persistedCount", 0)
```

## Installation

```sh
npx jsr add @pvinis/signals-storage

or 

pnpx jsr add @pvinis/signals-storage

or

deno add @pvinis/signals-storage
```

## Usage

The suggested way to use this library is to create a simple wrapper around the `signalWithStorageCustom` function.

Example for web/React:

```ts
import { signalWithStorageCustom, Storage } from "@pvinis/signals-storage"

const storage: Storage = window.localStorage


export const signalWithStorage = <T>(key: string, initialValue: T) =>
  signalWithStorageCustom(key, initialValue, storage)
```


Example for mobile/Expo/React Native:

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

## Examples
- [web example](./examples/web)
- [mobile example](./examples/mobile)
- [desktop/server example](./examples/other)
