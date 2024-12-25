import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { Pressable } from '@/components/ui/pressable';
export default function HoverableView({ children }: any) {
  const animateValue = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    flex: animateValue.value,
  }));
  const handleHover = () => {
    animateValue.value = withSpring(animateValue.value + 0.7);
  };
  const handleHoverout = () => {
    animateValue.value = 1;
  };
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Pressable
        style={{ width: '100%', height: '100%' }}
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
