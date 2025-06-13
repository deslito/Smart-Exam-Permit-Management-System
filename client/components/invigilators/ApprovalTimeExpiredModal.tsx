import React, { useRef, useEffect } from "react";
import { View, Text, Animated, Easing, Modal, Pressable } from "react-native";
import tw from "twrnc";

interface ApprovalTimeExpiredModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ApprovalTimeExpiredModal({ visible, onClose }: ApprovalTimeExpiredModalProps) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(fadeAnim, {
              toValue: 0.3,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 800,
              useNativeDriver: true,
            }),
          ]),
          Animated.timing(rotateAnim, {
            toValue: 1,
            duration: 1600,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      fadeAnim.setValue(1);
      rotateAnim.setValue(0);
    }
  }, [visible]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>      <View style={tw`flex-1 bg-black bg-opacity-40 justify-center items-center px-6`}>
        <View style={tw`bg-white rounded-xl w-full max-w-md overflow-hidden`}>
          {/* Header Banner */}
          <View style={tw`bg-red-600 p-4`}>
            <Text style={tw`text-white text-xl font-bold text-center`}>
              Approval Time Expired
            </Text>
          </View>

          <View style={tw`p-6 items-center`}>
            <Animated.View
              style={[
                tw`mb-8`,
                {
                  opacity: fadeAnim,
                  transform: [{ rotate }],
                },              ]}
            >
              <Text style={tw`text-7xl`}>⏰</Text>
            </Animated.View>

            <Text style={tw`text-base text-gray-700 text-center mb-6`}>
              The approval window for this exam permit has expired. Please contact the invigilator or try again later.
            </Text>

            <Pressable
              style={tw`mt-2 px-6 py-3 rounded-lg border border-gray-200`}
              onPress={onClose}
            >
              <Text style={tw`text-gray-700 font-medium`}>Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
