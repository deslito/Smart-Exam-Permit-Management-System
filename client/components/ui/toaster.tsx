// components/ui/toaster.tsx
import { Platform } from "react-native";

export const Toaster = () => {
  if (Platform.OS === "web") {
    const { Toaster: WebToaster } = require("sonner");
    return <WebToaster position="bottom-right" richColors />;
  }

  const Toast = require("react-native-toast-message").default;
  const { toastConfig } = require("./customToast");
  return <Toast config={toastConfig} />;
};
