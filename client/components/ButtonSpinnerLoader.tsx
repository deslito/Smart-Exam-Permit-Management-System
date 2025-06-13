import React, { useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import tw from "twrnc";

const NUM_BARS = 8;
const BAR_COLOR = "#fff";
const SIZE = 22; // px
const BAR_WIDTH = 3;
const BAR_HEIGHT = 6;

export default function ButtonSpinnerLoader() {
  // Create an array of Animated.Value for opacity
  const animations = useRef(
    Array.from({ length: NUM_BARS }, () => new Animated.Value(0.25))
  ).current;

  useEffect(() => {
    animations.forEach((anim, index) => {
      const loop = () => {
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0.25,
            duration: 400,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]).start(() => loop());
      };
      setTimeout(loop, index * 80); // Staggered start
    });
    // No cleanup needed for button spinner
  }, [animations]);

  return (
    <View
      pointerEvents="none"
      style={[
        tw`absolute left-4 z-2 justify-center items-center`,
        { top: "50%", width: SIZE, height: SIZE, transform: [{ translateY: -SIZE / 2 }] },
      ]}
    >
      {Array.from({ length: NUM_BARS }).map((_, i) => {
        const rotate = (360 / NUM_BARS) * i;
        return (
          <Animated.View
            key={i}
            style={[
              tw`absolute`,
              {
                left: SIZE / 2 - BAR_WIDTH / 2,
                top: SIZE / 2 - BAR_HEIGHT,
                width: BAR_WIDTH,
                height: BAR_HEIGHT,
                borderRadius: BAR_WIDTH / 2,
                backgroundColor: BAR_COLOR,
                opacity: animations[i],
                transform: [
                  { rotate: `${rotate}deg` },
                  { translateY: -SIZE / 3 },
                ],
              },
            ]}
          />
        );
      })}
    </View>
  );
}
