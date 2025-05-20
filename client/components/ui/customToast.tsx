import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import Animated, { FadeIn } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const glassClasses =
  "backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-glass px-4 py-3 max-w-[90%] self-center flex-row items-start space-x-3";

const toastTextBase = "text-[16px] font-semibold";
const toastSubtextBase = "text-[14px] text-foreground/80";

const CloseButton = () => (
  <TouchableOpacity onPress={() => Toast.hide()} className="ml-auto">
    <Ionicons name="close" size={16} color="#555" />
  </TouchableOpacity>
);

const ToastIcon = ({ name, color }: { name: any; color: string }) => (
  <Ionicons name={name} size={24} color={color} />
);

export const toastConfig = {
  success: (props: any) => (
    <Animated.View entering={FadeIn.duration(300)} className={glassClasses}>
      <ToastIcon name="checkmark-circle" color="#16a34a" />
      <View className="flex-1">
        <Text className={`${toastTextBase} text-green-600`}>{props.text1}</Text>
        {props.text2 && <Text className={toastSubtextBase}>{props.text2}</Text>}
      </View>
      <CloseButton />
    </Animated.View>
  ),

  error: (props: any) => (
    <Animated.View entering={FadeIn.duration(300)} className={glassClasses}>
      <ToastIcon name="close-circle" color="#dc2626" />
      <View className="flex-1">
        <Text className={`${toastTextBase} text-red-600`}>{props.text1}</Text>
        {props.text2 && <Text className={toastSubtextBase}>{props.text2}</Text>}
      </View>
      <CloseButton />
    </Animated.View>
  ),

  info: (props: any) => (
    <Animated.View entering={FadeIn.duration(300)} className={glassClasses}>
      <ToastIcon name="information-circle" color="#3b82f6" />
      <View className="flex-1">
        <Text className={`${toastTextBase} text-blue-600`}>{props.text1}</Text>
        {props.text2 && <Text className={toastSubtextBase}>{props.text2}</Text>}
      </View>
      <CloseButton />
    </Animated.View>
  ),

  warning: (props: any) => (
    <Animated.View entering={FadeIn.duration(300)} className={glassClasses}>
      <ToastIcon name="warning" color="#f59e0b" />
      <View className="flex-1">
        <Text className={`${toastTextBase} text-yellow-600`}>{props.text1}</Text>
        {props.text2 && <Text className={toastSubtextBase}>{props.text2}</Text>}
      </View>
      <CloseButton />
    </Animated.View>
  ),

  // 🎓 Student toast
  student: (props: any) => (
    <Animated.View entering={FadeIn.duration(300)} className={glassClasses}>
      <ToastIcon name="school" color="#22c55e" />
      <View className="flex-1">
        <Text className={`${toastTextBase} text-emerald-600`}>{props.text1}</Text>
        {props.text2 && <Text className={toastSubtextBase}>{props.text2}</Text>}
      </View>
      <CloseButton />
    </Animated.View>
  ),

  // 🧑‍🏫 Invigilator toast
  invigilator: (props: any) => (
    <Animated.View entering={FadeIn.duration(300)} className={glassClasses}>
      <ToastIcon name="person-circle" color="#f97316" />
      <View className="flex-1">
        <Text className={`${toastTextBase} text-orange-500`}>{props.text1}</Text>
        {props.text2 && <Text className={toastSubtextBase}>{props.text2}</Text>}
      </View>
      <CloseButton />
    </Animated.View>
  ),

  // 🛡️ Admin toast
  admin: (props: any) => (
    <Animated.View entering={FadeIn.duration(300)} className={glassClasses}>
      <ToastIcon name="shield-checkmark" color="#3b82f6" />
      <View className="flex-1">
        <Text className={`${toastTextBase} text-blue-700`}>{props.text1}</Text>
        {props.text2 && <Text className={toastSubtextBase}>{props.text2}</Text>}
      </View>
      <CloseButton />
    </Animated.View>
  ),
};
