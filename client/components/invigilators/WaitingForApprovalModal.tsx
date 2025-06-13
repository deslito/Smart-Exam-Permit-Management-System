import React, { useEffect, useRef } from "react";
import { View, Text, Pressable, Animated, Modal, Easing } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { invigilatorTheme } from "@/app/(invigilators)/_layout";

interface WaitingForApprovalModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function WaitingForApprovalModal({ visible, onClose }: WaitingForApprovalModalProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const loadingAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      const animations = [0, 100, 200, 300, 400].map((delay) =>
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          delay,
          useNativeDriver: true,
        })
      );      const loadingAnimation = Animated.loop(
        Animated.sequence([          Animated.timing(loadingAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.ease,
          }),
          Animated.timing(loadingAnim, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.ease,
          }),
        ])
      );
      Animated.parallel([...animations, loadingAnimation]).start();
    } else {
      fadeAnim.setValue(0);
      loadingAnim.setValue(0);
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={tw`flex-1 items-center justify-center p-4 bg-black bg-opacity-40`}>
        <View style={tw`w-full max-w-md my-6 bg-white rounded-xl overflow-hidden`}>
          {/* Header Banner */}
          <View style={tw`bg-[#f97316] p-4`}>
            <Text style={tw`text-white text-xl font-bold text-center`}>
              Waiting for Admin Approval
            </Text>
          </View>

          <View style={tw`p-6`}>
            {/* Icon */}
            <Animated.View style={[tw`items-center mb-6`, { opacity: fadeAnim }]}> 
              <Ionicons name="warning-outline" size={64} color="#f97316" />
            </Animated.View>
            {/* Description */}
            <Animated.View style={[tw`items-center`, { opacity: fadeAnim }]}> 
              <Text style={tw`text-gray-600 text-center mb-4`}>
                The exam session needs to be approved by an administrator before you can verify students.
              </Text>
              <Text style={tw`text-sm text-gray-500 text-center`}>
                This helps ensure that only authorized personnel can verify students during the scheduled exam time.
              </Text>
            </Animated.View>
            {/* Loading Bar */}
            <Animated.View style={[tw`items-center mt-8`, { opacity: fadeAnim }]}> 
              <View style={tw`w-64 h-2 bg-gray-200 rounded-full overflow-hidden`}>
                <Animated.View
                  style={[
                    tw`absolute h-full bg-[#f97316]`,
                    {
                      width: "40%",
                      transform: [{
                        translateX: loadingAnim.interpolate({
                          inputRange: [0, 1, 2],
                          outputRange: [-160, 0, 160],
                        }),
                      }],
                      opacity: loadingAnim.interpolate({
                        inputRange: [0, 0.2, 0.8, 1, 1.2, 1.8, 2],
                        outputRange: [0, 1, 1, 1, 1, 1, 0],
                      }),
                    },
                  ]}
                />
              </View>
            </Animated.View>
            {/* Alert */}
            <Animated.View 
              style={[
                tw`mt-8 p-4 rounded-lg border border-[#f97316]/30 bg-[#f97316]/10`,
                { opacity: fadeAnim }
              ]}
            >
              <Text style={tw`text-sm text-center text-gray-700`}>
                Please contact the exam administrator to approve this exam session.
              </Text>
            </Animated.View>
            {/* Close Button */}
            <Animated.View style={[tw`items-center mt-8`, { opacity: fadeAnim }]}> 
              <Pressable
                style={tw`flex-row items-center bg-[${invigilatorTheme.primary}] px-6 py-3 rounded-lg border border-gray-200`}
                onPress={onClose}
              >
                <Ionicons 
                  name="arrow-back-outline" 
                  size={16} 
                  color="#374151" 
                  style={tw`mr-2`} 
                />
                <Text style={tw`text-gray-700 font-medium`}>Close</Text>
              </Pressable>
            </Animated.View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
