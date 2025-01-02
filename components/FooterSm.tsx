import { useRef } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { Center } from './ui/center';
import { VStack } from './ui/vstack';

import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';

export default function Footer({ scrollRef: _r }: any) {
  const { width: sw } = useWindowDimensions();
  const layout = useRef<any>();
  /*  const scrollOffset = useScrollViewOffset(scrollRef); */
  const handleLayout = (event: any) => {
    console.log(event.nativeEvent.layout);
    layout.current = event.nativeEvent.layout;
  };
  /*  const headerAnimatedStyle = useAnimatedStyle(() => {
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
  }); */
  return (
    <View style={{ width: '100%' }} onLayout={handleLayout}>
      <View
        style={{
          width: '100%',
          height: (886 / 750) * sw,
          overflow: 'hidden',
          backgroundColor: '#000',
        }}>
        <Animated.View
          style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <Image
            style={{
              width: (1260 / 750) * sw,
              height: (886 / 750) * sw,
              position: 'absolute',
              zIndex: -10,
            }}
            alt=""
            source={require('@/assets/images/house_sm.png')}
            resizeMode="cover"
          />
          <Center>
            <Text style={{ fontSize: (50 / 750) * sw }} className="font-[600] text-[#fff]">
              欢迎联系我们
            </Text>
            <Text
              style={{
                fontSize: (24 / 750) * sw,
                marginTop: (69 / 750) * sw,
                width: (374 / 750) * sw,
              }}
              className="text-center font-[400] leading-7 text-[#fff]">{`Realm-Estate 领域地产目前在加州洛杉矶地区开展业务。\n致力于帮助您完成项目开发升级，也寻找豪宅项目开发投资机会。`}</Text>
          </Center>
        </Animated.View>
      </View>
      <VStack className="items-center" style={{ height: (657 / 750) * sw }}>
        <Image
          alt=""
          style={{ width: '100%', height: '100%', zIndex: -10, position: 'absolute' }}
          source={require('@/assets/images/footer_bg_sm.png')}
        />
        <Image
          alt=""
          style={{ width: (228 / 750) * sw, height: (63 / 750) * sw, marginTop: (73 / 750) * sw }}
          source={require('@/assets/images/footer_logo_sm.png')}
        />
        <Text style={{ fontSize: (30 / 750) * sw, color: '#fff', marginTop: (111 / 750) * sw }}>
          518-666-7778
        </Text>
        <Text
          style={{
            fontSize: (30 / 750) * sw,
            color: '#fff',
            lineHeight: 1,
            marginTop: (33 / 750) * sw,
          }}>
          jianseneasy@gmail.com
        </Text>
        <HStack
          style={{
            marginTop: (52 / 750) * sw,
            width: (540 / 750) * sw,
            justifyContent: 'space-between',
          }}
          className="items-center">
          <Image
            style={{ width: (46 / 750) * sw, height: (46 / 750) * sw }}
            alt=""
            source={require('@/assets/images/phone.png')}
            resizeMode="cover"
          />
          <Image
            alt=""
            style={{ width: (53 / 750) * sw, height: (53 / 750) * sw }}
            source={require('@/assets/images/email.png')}
            resizeMode="cover"
          />
          <Image
            style={{ width: (20 / 750) * sw, height: (43 / 750) * sw }}
            alt=""
            source={require('@/assets/images/facebook.png')}
            resizeMode="contain"
          />
          <Image
            style={{ width: (44 / 750) * sw, height: (45 / 750) * sw }}
            alt=""
            source={require('@/assets/images/video.png')}
            resizeMode="cover"
          />
          <Image
            style={{ width: (41 / 750) * sw, height: (41 / 750) * sw }}
            alt=""
            source={require('@/assets/images/titok.png')}
            resizeMode="cover"
          />
        </HStack>
        <Text
          style={{ fontSize: (19 / 750) * sw, marginTop: (116 / 750) * sw }}
          className="font-[400] text-[#fff]/[0.5]">
          © 2024 Realm Esate
        </Text>
      </VStack>
    </View>
  );
}
