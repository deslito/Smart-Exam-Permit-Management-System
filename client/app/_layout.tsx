// app/_layout.tsx
import React from "react";
import "../global.css";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/contexts/AuthContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SafeAreaView, Platform } from "react-native";
import { Toaster } from "@/components/ui/toaster";
import Toast from "react-native-toast-message";
import { toastConfig } from "@/components/ui/customToast";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";
import FullPageLoader from "@/components/FullPageLoader";

const queryClient = new QueryClient();

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = React.useState(false);

  React.useEffect(() => {
    async function loadAssetsAndData() {
      try {
        // 1. Load Ionicons font and any other fonts
        await Font.loadAsync(Ionicons.font);
        // 2. Preload logo image (add more if needed)
        await Asset.loadAsync([
          require("../assets/images/kyambogoLogo.png"),
        ]);
        // 3. Await any async data (e.g., user session, config fetch)
        // await fetchInitialData(); // Uncomment and implement if needed
        // Simulate async data fetch (remove in production)
        // await new Promise((res) => setTimeout(res, 500));
      } catch (e) {
        // Optionally handle errors
        console.warn("App loading error", e);
      } finally {
        setIsAppReady(true);
      }
    }
    loadAssetsAndData();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f0fff0" }}>
        {!isAppReady && <FullPageLoader />}
        {isAppReady && (
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <AuthProvider>
                <Stack
                  initialRouteName="index"
                  screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                  }}
                />
              </AuthProvider>
            </TooltipProvider>
          </QueryClientProvider>
        )}
      </SafeAreaView>
      {Platform.OS === "web" ? <Toaster /> : <Toast config={toastConfig} />}
    </SafeAreaProvider>
  );
}
