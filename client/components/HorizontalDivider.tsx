import React from 'react';
import { View, StyleSheet } from 'react-native';

interface HorizontalDividerProps {
  color: string; // Specify that color is a string
}

const HorizontalDivider: React.FC<HorizontalDividerProps> = ({ color }) => (
  <View style={[styles.divider, { backgroundColor: color }]} />
);

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 2,
    marginVertical: 10,
  },
});

export default HorizontalDivider;
