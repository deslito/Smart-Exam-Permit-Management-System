import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import HorizontalDivider from "@/components/HorizontalDivider";
import KyambogoLogo from "@/assets/images/kyambogoLogo.png";

export default function HomePage() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/chooseRole");
  };

  // Define a default theme for the homepage
  const theme = {
    bg: "#FFFFFF",
  };

  return (
    <BackgroundWrapper theme={theme}>
      <View className="flex-1 items-center justify-center px-6">
        {/* ✅ Semi-transparent Card with aligned content */}
        <View
          style={{
            width: "90%",
            height: "90%",
            backgroundColor: "rgba(255,255,255,0.4)",
            borderWidth: 2,
            borderColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 16,
            padding: 24,
          }}
        >
          {/* ✅ Centered Logo + Text Block */}
          <View className="flex-1 justify-space-around items-center">
            <Image
              source={KyambogoLogo}
              style={{ width: 140, height: 140, resizeMode: "contain", marginBottom: 16 }}
            />

            <Text className="text-3xl font-bold text-university-navy text-center mb-2">
              Kyambogo University
            </Text>

            <Text className="text-lg font-bold text-university-blue text-center mb-4">
              Smart Exam Permit Management System
            </Text>

            <HorizontalDivider color="#F7941D" />

            <Text className="text-[16px] md:text-base text-center text-university-gray mt-4 px-2 leading-relaxed">
              A streamlined system designed for universities and colleges to automate
              the management and verification of examination permits. This project
              ensures students can securely access their permits, exam supervisors
              can verify eligibility in real-time, and administrators can manage
              permit approvals efficiently.
            </Text>
          </View>

          {/* ✅ Button at the bottom */}
          <View className="items-end">
            <Pressable
              onPress={handleStart}
              className="w-40 py-3 rounded-xl bg-university-blue shadow-md active:opacity-90"
              style={{ shadowOffset: { width: 4, height: 4 } }}
            >
              <Text className="text-center text-white font-semibold text-lg">
                Get Started
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
}
