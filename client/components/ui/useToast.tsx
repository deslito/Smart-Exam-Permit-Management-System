import { Platform } from "react-native";
import { toast as toastify } from "react-toastify";
import Toast from "react-native-toast-message";

export type ToastType = "success" | "error" | "info" | "warning";

export const useToast = () => {
  const showToast = (type: ToastType, message: string, subtext?: string) => {
    if (Platform.OS === "web") {
      switch (type) {
        case "success":
          toastify.success(message);
          break;
        case "error":
          toastify.error(message);
          break;
        case "warning":
          toastify.warn(message);
          break;
        case "info":
          toastify.info(message);
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
