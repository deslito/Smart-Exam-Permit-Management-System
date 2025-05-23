import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";

const { width } = Dimensions.get("window");
const LOGO_SIZE = width * 0.25; // 25% of screen width

interface FullPageLoaderProps {
  logoSource?: any; // You can replace 'any' with the correct ImageSourcePropType if desired
  message?: string;
}

const FullPageLoader = ({ logoSource, message = "Loading..." }: FullPageLoaderProps) => {
  // Default logo if none provided
  const defaultLogo = require("../assets/logo.png"); // Make sure to add a logo to your assets
  const logo = logoSource || defaultLogo;
  
  // Animation values for the logo
  const logoBrightness = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    // Animate the logo brightness
    const animateLogo = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(logoBrightness, {
            toValue: 1.2,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(logoBrightness, {
            toValue: 0.5,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
          }),
        ])
      ).start();
    };
    
    animateLogo();
  }, []);

  // Interpolate brightness to opacity and scale for the logo
  const logoOpacity = logoBrightness.interpolate({
    inputRange: [0.5, 1.2],
    outputRange: [0.7, 1],
  });

  const logoScale = logoBrightness.interpolate({
    inputRange: [0.5, 1.2],
    outputRange: [0.95, 1.05],
  });

  // Create a glow effect for the logo
  const glowIntensity = logoBrightness.interpolate({
    inputRange: [0.5, 1.2],
    outputRange: [2, 10],
  });

  return (
    <View style={styles.absoluteFill}>
      <BlurView intensity={50} tint="light" style={styles.overlay}>
        <BlurView intensity={90} tint="light" style={styles.neuContainer}>
          <Animated.View
            style={[
              styles.logoContainer,
              {
                opacity: logoOpacity,
                transform: [{ scale: logoScale }],
                shadowRadius: glowIntensity,
              }
            ]}
          >
            <Image
              source={logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </Animated.View>
        </BlurView>
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  neuContainer: {
    width: 130,
    height: 130,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", // required for blur

    // Neumorphism shadows
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    ...Platform.select({
      ios: {
        shadowColor: "#fff",
        shadowOffset: { width: -6, height: -6 },
        shadowOpacity: 1,
        shadowRadius: 6,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#F09503", // Using the same color as the original bars
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  logo: {
    width: LOGO_SIZE,
    height: LOGO_SIZE,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default FullPageLoader;
