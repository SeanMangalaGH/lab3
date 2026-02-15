import { GroveryProvider } from "@/contexts/GroceryContext";
import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GroveryProvider>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#059669",
            },
            headerTitleStyle: {
              color: "#FFFFFF",
            },
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{ title: "Smart Grocery List" }}
          />
        </Stack>
      </ThemeProvider>
    </GroveryProvider>
  );
}
