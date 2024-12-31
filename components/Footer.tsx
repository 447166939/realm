import { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { Center } from './ui/center';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';

export default function Footer({ scrollRef }: any) {
  const { width: sw } = useWindowDimensions();
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
            [layout.current?.y || 0, (layout.current?.y || 0) + (468 / 1920) * sw],
            [(-(468 / 1920) * sw) / 5, ((468 / 1920) * sw) / 5],
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
          overflow: 'hidden',
          backgroundColor: '#000',
        }}>
        <Animated.View
          style={[
            { justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' },
            headerAnimatedStyle,
          ]}>
          <Image
            alt=""
            source={require('@/assets/images/house.png')}
            className="absolute -z-10 h-full w-full"
            resizeMode="cover"
          />
          <Center>
            <Text className="text-[50px] font-[600] text-[#fff]">欢迎联系我们</Text>
            <Text className="mt-[30px] w-[659px] text-center text-[20px] font-[400] leading-7 text-[#fff]">{`Realm-Estate 领域地产目前在加州洛杉矶地区开展业务。\n致力于帮助您完成项目开发升级，也寻找豪宅项目开发投资机会。`}</Text>
          </Center>
        </Animated.View>
      </View>
      {/*  <Center className="w-full" style={{ height: (468 / 1920) * sw }}>
        <Image
          alt=""
          source={require('@/assets/images/house.png')}
          className="absolute -z-10 h-full w-full"
          resizeMode="cover"
        />
        <Center>
          <Text className="text-[50px] font-[600] text-[#fff]">欢迎联系我们</Text>
          <Text className="mt-[30px] w-[659px] text-center text-[20px] font-[400] leading-7 text-[#fff]">{`Realm-Estate 领域地产目前在加州洛杉矶地区开展业务。\n致力于帮助您完成项目开发升级，也寻找豪宅项目开发投资机会。`}</Text>
        </Center>
      </Center> */}
      {/*  <Animated.View style={[{ height: (468 / 1920) * sw,width:'100%',justifyContent:'center',alignItems:'center' },headerAnimatedStyle]}>
        <Image
          alt=""
          source={require('@/assets/images/house.png')}
          className="absolute -z-10 h-full w-full"
          resizeMode="cover"
        />
        <Center>
          <Text className="text-[50px] font-[600] text-[#fff]">欢迎联系我们</Text>
          <Text className="mt-[30px] w-[659px] text-center text-[20px] font-[400] leading-7 text-[#fff]">{`Realm-Estate 领域地产目前在加州洛杉矶地区开展业务。\n致力于帮助您完成项目开发升级，也寻找豪宅项目开发投资机会。`}</Text>
        </Center>
      </Animated.View> */}
      <HStack className="items-center bg-black" style={{ height: (286 / 1920) * sw }}>
        <HStack
          style={{
            marginLeft: (345 / 1920) * sw,
            width: (152 / 1920) * sw,
            height: (40 / 1920) * sw,
          }}>
          <Image
            alt=""
            source={require('@/assets/images/real.png')}
            className="h-full w-full"
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
            alt=""
            source={require('@/assets/images/phone.png')}
            className="h-[21px] w-[21px]"
            resizeMode="cover"
          />
          <Image
            alt=""
            source={require('@/assets/images/email.png')}
            className="ml-[50px] h-[32px] w-[32px]"
            resizeMode="cover"
          />
          <Image
            alt=""
            source={require('@/assets/images/facebook.png')}
            className="ml-[50px] h-[26px] w-[12px]"
            resizeMode="cover"
          />
          <Image
            alt=""
            source={require('@/assets/images/video.png')}
            className="ml-[50px] h-[27px] w-[26px]"
            resizeMode="cover"
          />
          <Image
            alt=""
            source={require('@/assets/images/titok.png')}
            className="ml-[50px] h-[25px] w-[25px]"
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
