import "./App.css";
import { useSignals } from "@preact/signals-react/runtime";
import { tempCount, persistedCount } from "./signals.ts";

export function App() {
  useSignals();

  return (
    <>
      <h1>Signals with Storage</h1>
      <div className="card">
        <button onClick={() => tempCount.value++}>
          temp count is {tempCount.value}
        </button>

        <button onClick={() => persistedCount.value++}>
          persisted count is {persistedCount.value}
        </button>
      </div>
    </>
  );
}
