import { useRef } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { Center } from './ui/center';

import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';

export default function Footer({ scrollRef }: any) {
  const { width: sw, height: sh } = useWindowDimensions();
  const layout = useRef<any>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const handleLayout = (event: any) => {
    console.log(event.nativeEvent.layout);
    layout.current = event.nativeEvent.layout;
  };
  const headerAnimatedStyle = useAnimatedStyle(() => {
    console.log('scrollOffset==', scrollOffset.value);
    console.log('layout', layout.current);
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [(layout.current?.y || 0) - sh / 2, (layout.current?.y || 0) - sh / 4],
            [(-(468 / 1920) * sw) / 5, 0],
          ),
        },
      ],
    };
  });
  return (
    <View style={{ width: '100%' }} onLayout={handleLayout}>
      <View
        style={{
          width: '100%',
          height: (468 / 1920) * sw,
          backgroundColor: '#fff',
        }}>
        <Animated.View
          style={[
            { justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' },
            headerAnimatedStyle,
          ]}>
          <Image
            style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%' }}
            alt=""
            source={require('@/assets/images/house.png')}
            resizeMode="cover"
          />
          <Center>
            <Text className="text-[50px] font-[600] text-[#fff]">欢迎联系我们</Text>
            <Text className="mt-[30px] w-[659px] text-center text-[20px] font-[400] leading-7 text-[#fff]">{`Realm-Estate 领域地产目前在加州洛杉矶地区开展业务。\n致力于帮助您完成项目开发升级，也寻找豪宅项目开发投资机会。`}</Text>
          </Center>
        </Animated.View>
      </View>
      <HStack className="items-center bg-black" style={{ height: (286 / 1920) * sw }}>
        <HStack
          style={{
            marginLeft: (345 / 1920) * sw,
            width: (152 / 1920) * sw,
            height: (40 / 1920) * sw,
          }}>
          <Image
            style={{ width: '100%', height: '100%' }}
            alt=""
            source={require('@/assets/images/real.png')}
            resizeMode="cover"
          />
        </HStack>
        <Text
          style={{ marginLeft: (162 / 1920) * sw }}
          className="text-[20px] font-[400] text-[#fff]">
          518-666-7778
        </Text>
        <Text
          style={{ marginLeft: (86 / 1920) * sw }}
          className="text-[20px] font-[400] text-[#fff]">
          jianseneasy@gmail.com
        </Text>
        <HStack style={{ marginLeft: (89 / 1920) * sw }} className="items-center">
          <Image
            style={{ width: 21, height: 21 }}
            alt=""
            source={require('@/assets/images/phone.png')}
            resizeMode="cover"
          />
          <Image
            style={{ marginLeft: 50, height: 32, width: 32 }}
            alt=""
            source={require('@/assets/images/email.png')}
            resizeMode="cover"
          />
          <Image
            style={{ marginLeft: 50, height: 26, width: 12 }}
            alt=""
            source={require('@/assets/images/facebook.png')}
            resizeMode="cover"
          />
          <Image
            style={{ marginLeft: 50, height: 27, width: 26 }}
            alt=""
            source={require('@/assets/images/video.png')}
            resizeMode="cover"
          />
          <Image
            alt=""
            style={{ marginLeft: 50, height: 25, width: 25 }}
            source={require('@/assets/images/titok.png')}
            resizeMode="cover"
          />
          <Text className="absolute -bottom-[32px] right-0 text-[18px] font-[400] text-[#fff]/[0.5]">
            © 2024 Realm Esate
          </Text>
        </HStack>
      </HStack>
    </View>
  );
}
