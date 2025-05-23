import { Platform } from "react-native";
import { toast as sonnerToast } from "sonner";
import Toast from "react-native-toast-message";

export type ToastType = "success" | "error" | "info" | "warning";

export const useToast = () => {
  const showToast = (type: ToastType, message: string, subtext?: string) => {
    if (Platform.OS === "web") {
      const options = {
        duration: 3000,
        position: "bottom-right" as const,
      };

      switch (type) {
        case "success":
          sonnerToast.success(message, options);
          break;
        case "error":
          sonnerToast.error(message, options);
          break;
        case "warning":
          sonnerToast.warning(message, options);
          break;
        case "info":
          sonnerToast.info(message, options);
          break;
      }
    } else {
      Toast.show({
        type,
        text1: message,
        text2: subtext,
        position: "bottom",
        bottomOffset: 40, // <-- Increase distance from bottom (default is 40)
      });
    }
  };

  return { showToast };
};
