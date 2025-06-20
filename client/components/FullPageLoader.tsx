import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, Platform } from "react-native";
import { BlurView } from "expo-blur";
import tw from "twrnc";

const NUM_BARS = 12;
const barColors = [
  "#0057B7", // Blue (logo)
  "#FFE600", // Yellow (logo)
  "#F7941D", // Orange (logo)
  "#B6D531", // Green (logo)
];

const FullPageLoader = () => {
  const animations = useRef(
    [...Array(NUM_BARS)].map(() => new Animated.Value(0.25))
  ).current;

  const [cycle, setCycle] = React.useState(0);

  // Animate bars and cycle color after each revolution
  useEffect(() => {
    let completed = 0;
    animations.forEach((anim, index) => {
      const loop = () => {
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 600,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0.25,
            duration: 600,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]).start(() => {
          completed++;
          if (completed % NUM_BARS === 0 && index === NUM_BARS - 1) {
            setCycle((c) => (c + 1) % barColors.length);
          }
          loop();
        });
      };
      setTimeout(loop, index * 100);
    });
    // eslint-disable-next-line
  }, []);

  const bars = [...Array(NUM_BARS)].map((_, i) => {
    const rotate = (360 / NUM_BARS) * i;
    const translateY = -28;
    // All bars use the same color for the current cycle
    const backgroundColor = barColors[cycle];
    return (
      <Animated.View
        key={i}
        style={[
          tw`absolute w-1.5 h-5.5 rounded-lg`,
          {
            backgroundColor,
            transform: [{ rotate: `${rotate}deg` }, { translateY }],
            opacity: animations[i],
          },
        ]}
      />
    );
  });

  return (
    <View style={tw`absolute inset-0 z-50`}>
      <BlurView
        intensity={50}
        tint="light"
        style={tw`flex-1 items-center justify-center bg-white/15`}
      >
        <BlurView
          intensity={90}
          tint="light"
          style={[
            tw`w-25 h-25 rounded-2xl items-center justify-center bg-white/20 overflow-hidden`,
            Platform.OS === "ios" ? tw`shadow-lg` : {},
            {
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3,
              elevation: 5,
            },
          ]}
        >
          <View style={tw`w-18 h-18 relative items-center justify-center`}>
            {bars}
          </View>
        </BlurView>
      </BlurView>
    </View>
  );
};

export default FullPageLoader;
