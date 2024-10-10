import { tempCount, persistedCount } from "./signals.ts";

console.log(tempCount.value);
tempCount.value++;
console.log(tempCount.value);

console.log(persistedCount.value);
persistedCount.value++;
console.log(persistedCount.value);
