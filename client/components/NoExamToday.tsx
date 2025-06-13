import React, { useRef, useEffect } from 'react';
import { Modal, View, Text, Pressable, Animated, Easing } from 'react-native';
import tw from 'twrnc';
import { invigilatorTheme } from '@/app/(invigilators)/_layout';
import { Ionicons } from "@expo/vector-icons";

interface NoExamTodayProps {
  visible: boolean;
  onClose: () => void;
}

export function NoExamToday({ visible, onClose }: NoExamTodayProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Reset animations
      fadeAnim.setValue(0);
      bounceAnim.setValue(0);

      // Start animations
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.sequence([
          Animated.delay(200),
          Animated.spring(bounceAnim, {
            toValue: 1,
            friction: 4,
            tension: 40,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  }, [visible]);

  const iconScale = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 1],
  });

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 bg-black bg-opacity-50 justify-center items-center`}>
        <Animated.View 
          style={[
            tw`bg-white rounded-xl w-11/12 max-w-md overflow-hidden`,
            { opacity: fadeAnim }
          ]}
        >
          {/* Header Banner */}
          <View style={tw`bg-[${invigilatorTheme.primary}] p-4`}>
            <Text style={tw`text-white text-xl font-bold text-center`}>
              No Exam Scheduled
            </Text>
          </View>

          <View style={tw`p-6`}>
            {/* Animated Icon */}
            <Animated.View style={[
              tw`items-center mb-6`,
              {
                transform: [{ scale: iconScale }],
              }
            ]}>
              <Ionicons name="calendar-outline" size={64} color="#ef4444" />
            </Animated.View>

            {/* Message */}
            <Text style={tw`text-base text-gray-700 mb-6 text-center`}>
              This student does not have any exam scheduled for today.
            </Text>

            {/* Close Button */}
            <View style={tw`flex-row justify-center`}>
              <Pressable
                style={tw`flex-row items-center px-6 py-3 rounded-lg border border-gray-200`}
                onPress={onClose}
              >
                <Ionicons 
                  name="close-outline" 
                  size={20} 
                  color="#374151" 
                  style={tw`mr-2`}
                />
                <Text style={tw`text-gray-700 font-medium`}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
