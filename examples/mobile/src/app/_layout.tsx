import { Slot } from "expo-router";
import { useSignals } from "@preact/signals-react/runtime";

export default function RootLayout() {
  useSignals();

  return <Slot />;
}
