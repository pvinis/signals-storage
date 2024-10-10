import { Text, Button, SafeAreaView } from "react-native";
import { tempCount, persistedCount } from "../signals";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontSize: 30 }}>Signals with Storage</Text>

      <Button
        title={`temp count is ${tempCount.value}`}
        onPress={() => tempCount.value++}
      />

      <Button
        title={`persisted count is ${persistedCount.value}`}
        onPress={() => persistedCount.value++}
      />
    </SafeAreaView>
  );
}
