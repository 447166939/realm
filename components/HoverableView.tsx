import { useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Pressable } from '@/components/ui/pressable';
export default function HoverableView({ children }: any) {
  const { width: sw } = useWindowDimensions();
  const animateValue = useSharedValue((408 / 1920) * sw);
  const [hovered, setHovered] = useState(false);
  const animatedStyle = useAnimatedStyle(() => ({
    flexBasis: animateValue.value,
  }));
  const handleHover = () => {
    setHovered(true);
    animateValue.value = withTiming((698 / 1920) * sw, { duration: 1000 });
  };
  const handleHoverout = () => {
    setHovered(false);
    animateValue.value = withTiming((408 / 1920) * sw, { duration: 1000 });
  };
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 10000,
          opacity: hovered ? 0 : 0.5,
          backgroundColor: '#000',
        }}></View>
      <Pressable
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
        onHoverIn={handleHover}
        onHoverOut={handleHoverout}>
        {children}
      </Pressable>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    transform: [{ scaleX: 1 }],
  },
});
