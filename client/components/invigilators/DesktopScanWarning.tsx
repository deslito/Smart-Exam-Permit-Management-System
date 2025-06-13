import React, { useEffect, useRef } from "react";
import { View, Text, SafeAreaView, Animated, Easing } from "react-native";
import tw from "twrnc";
import { invigilatorTheme } from "../../app/(invigilators)/_layout";

function FuturisticDangerTriangleLoaderV2() {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2200,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
    
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { 
          toValue: 1.15, 
          duration: 900, 
          useNativeDriver: true 
        }),
        Animated.timing(pulseAnim, { 
          toValue: 1, 
          duration: 900, 
          useNativeDriver: true 
        }),
      ])
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({ 
    inputRange: [0, 1], 
    outputRange: ['0deg', '360deg'] 
  });

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 12 }}>
      <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
        <View style={{ width: 120, height: 120, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{
            width: 0,
            height: 0,
            borderLeftWidth: 60,
            borderRightWidth: 60,
            borderBottomWidth: 104,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: invigilatorTheme.primary,
            opacity: 0.18,
            position: 'absolute',
            top: 0,
          }} />
          <View style={{ position: 'absolute', top: 10, left: 10, right: 10, bottom: 10 }}>
            <View style={{ 
              position: 'absolute', 
              top: 0, 
              left: 28, 
              width: 44, 
              height: 4, 
              borderRadius: 2, 
              backgroundColor: invigilatorTheme.primary, 
              shadowColor: invigilatorTheme.primary, 
              shadowOpacity: 0.7, 
              shadowRadius: 8, 
              elevation: 8 
            }} />
            <View style={{ 
              position: 'absolute', 
              left: 0, 
              top: 8, 
              width: 4, 
              height: 64, 
              borderRadius: 2, 
              backgroundColor: '#00ffb2', 
              shadowColor: '#00ffb2', 
              shadowOpacity: 0.7, 
              shadowRadius: 8, 
              elevation: 8, 
              transform: [{ rotate: '-60deg' }] 
            }} />
            <View style={{ 
              position: 'absolute', 
              right: 0, 
              top: 8, 
              width: 4, 
              height: 64, 
              borderRadius: 2, 
              backgroundColor: '#ff00e0', 
              shadowColor: '#ff00e0', 
              shadowOpacity: 0.7, 
              shadowRadius: 8, 
              elevation: 8, 
              transform: [{ rotate: '60deg' }] 
            }} />
          </View>
          <Text style={{ 
            color: invigilatorTheme.primary, 
            fontWeight: 'bold', 
            fontSize: 54, 
            textShadowColor: '#fff', 
            textShadowOffset: { width: 0, height: 0 }, 
            textShadowRadius: 16, 
            position: 'absolute', 
            top: 38, 
            left: 0, 
            right: 0, 
            textAlign: 'center', 
            zIndex: 2 
          }}>!</Text>
          <Animated.View style={{ 
            position: 'absolute', 
            width: 120, 
            height: 120, 
            alignItems: 'center', 
            justifyContent: 'center', 
            transform: [{ rotate }] 
          }}>
            {[0, 1, 2].map(i => {
              const angle = (i * 2 * Math.PI) / 3;
              const x = 48 * Math.cos(angle);
              const y = 48 * Math.sin(angle);
              return (
                <View key={i} style={{ 
                  position: 'absolute', 
                  left: 60 + x - 8, 
                  top: 60 + y - 8, 
                  width: 16, 
                  height: 16, 
                  borderRadius: 8, 
                  backgroundColor: i === 0 ? invigilatorTheme.primary : (i === 1 ? '#00ffb2' : '#ff00e0'), 
                  shadowColor: '#fff', 
                  shadowOpacity: 0.7, 
                  shadowRadius: 8, 
                  elevation: 8, 
                  borderWidth: 2, 
                  borderColor: '#fff' 
                }} />
              );
            })}
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
}

export default function DesktopScanWarning() {
  return (
    <SafeAreaView style={tw`flex-1 bg-[${invigilatorTheme.bg}]`}>
      <View style={[
        tw`p-6 rounded-b-3xl w-full`, 
        { backgroundColor: invigilatorTheme.primary, shadowColor: "#000", shadowOpacity: 0.2 }
      ]}> 
        <Text style={tw`text-2xl font-bold text-white`}>Scan QR Code</Text>
      </View>
      <View style={tw`flex-1 items-center justify-center p-4`}>        
        <FuturisticDangerTriangleLoaderV2 />
        <Text style={tw`text-2xl font-bold text-[${invigilatorTheme.accent}] mt-8 mb-2`}>
          QR Scanning Not Supported
        </Text>
        <Text style={tw`text-base text-gray-700 text-center mb-4`}>
          Please switch to a mobile device to scan QR codes.
        </Text>
      </View>
    </SafeAreaView>
  );
}
