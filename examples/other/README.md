# Signals with Storage (desktop/server/deno/node example)

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
deno run -EW cool-project.ts
```

That should output the initial values. Running the above command again should output the incremented values. You can also look at the `store` folder to see the persisted values.

You can look how to use `signalWithStorage` in the the following files:
- Regular signal usage: [cool-project.ts](./cool-project.ts)
- Signal creation: [signals.ts](./signals.ts)
- Simple wrapper: [signalWithStorage.ts](./signalWithStorage.ts)
