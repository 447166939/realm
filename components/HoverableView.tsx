import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Pressable } from '@/components/ui/pressable';
export default function HoverableView({ children }: any) {
  const { width: sw } = useWindowDimensions();
  const animateValue = useSharedValue((408 / 1920) * sw);
  const animatedStyle = useAnimatedStyle(() => ({
    flexBasis: animateValue.value,
  }));
  const handleHover = () => {
    animateValue.value = withTiming((698 / 1920) * sw, { duration: 1000 });
  };
  const handleHoverout = () => {
    animateValue.value = withTiming((408 / 1920) * sw, { duration: 1000 });
  };
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
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
