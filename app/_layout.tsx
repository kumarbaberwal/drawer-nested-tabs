import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{
      flex: 1,
    }}>
      <Stack screenOptions={{ headerBackTitle: "Back" }}>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="outside" options={{ title: "Outside Page", headerTitleAlign: "center" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
