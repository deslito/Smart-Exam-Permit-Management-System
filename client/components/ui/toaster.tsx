// components/ui/toaster.tsx
import { Platform } from "react-native";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toaster = () => {
  if (Platform.OS === "web") {
    return <ToastContainer position="bottom-right" autoClose={3000} />;
  }

  const Toast = require("react-native-toast-message").default;
  const { toastConfig } = require("./customToast");
  return <Toast config={toastConfig} />;
};
