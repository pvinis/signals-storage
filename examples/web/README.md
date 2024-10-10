# Signals with Storage (web example)

## Installation

```sh
npm jsr add @pvinis/signals-storage

or

deno add @pvinis/signals-storage
```

## Usage

The suggested way to use this library is to create a simple wrapper around the signalWithStorageCustom function.

```ts
import { signalWithStorageCustom } from "@pvinis/signals-storage";

const storage: Storage = window.localStorage;

export const signalWithStorage = <T>(key: string, initialValue: T) =>
  signalWithStorageCustom(key, initialValue, storage);
```

Then you can use the signalWithStorage function to create your signals.

```ts
export const tempCount = signalWithStorage("tempCount", 0);
export const persistedCount = signalWithStorage("persistedCount", 0);
```

## Example

You can run this example locally by cloning this repo and running:

```sh
npm install
npm run dev
```

or you can look how to use `signalWithStorage` in the the following files:
- Regular signal usage: [src/App.tsx](./src/App.tsx) 
- Signal creation: [src/signals.ts](./src/signals.ts)
- Simple wrapper: [src/signalWithStorage.ts](./src/signalWithStorage.ts)



