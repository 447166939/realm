import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import SwiperCore, { Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button, ButtonText } from './ui/button';
import { Center } from './ui/center';
import { VStack } from './ui/vstack';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Portal } from '@/components/ui/portal';
import { Text } from '@/components/ui/text';
SwiperCore.use([Controller]); // eslint-disable-line
function BigPicture({ showModal, setShowModal, picArr, index, setIdx }: any, ref: any) {
  const idxRef = useRef(0);
  const { width: sw } = useWindowDimensions();
  const [swiper, setSwiper] = useState<any>(null);
  const swRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({
    scrollTo: (idx: number) => {
      idxRef.current = idx + 1;
    },
  }));
  const animateValue = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: animateValue.value,
  }));
  useEffect(() => {
    if (showModal) {
      animateValue.value = withSpring(1);
    } else {
      animateValue.value = withSpring(0);
    }
  }, [showModal, animateValue]);
  const handleClose = () => {
    setShowModal(false);
  };
  const handlePre = () => {
    swiper?.slidePrev(500);
    if (index === 0) {
      setIdx(picArr.length - 1);
    } else {
      setIdx(index - 1);
    }
  };
  const handleNext = () => {
    swiper?.slideNext(500);
    if (index === picArr.length - 1) {
      setIdx(0);
    } else {
      setIdx(index + 1);
    }
  };
  return (
    <Portal isOpen={showModal}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <VStack className="h-lvh w-lvw items-center justify-end">
          <Pressable
            onPress={handleClose}
            className="absolute bottom-0 left-0 right-0 top-0 h-lvh w-lvw bg-[#000]/[0.8]"></Pressable>
          <Pressable
            onPress={handleClose}
            className="absolute right-[38px] top-[38px] h-[27px] w-[27px]">
            <Image className="h-full w-full" alt="" source={require('@/assets/images/close.png')} />
          </Pressable>
          <VStack style={{ width: (1178 / 1920) * sw, height: (662 / 1920) * sw }}>
            <Swiper
              loop
              controller={{ control: swiper }}
              onSwiper={(s) => {
                setSwiper(s);
                swRef.current = s;
                s.slideTo(idxRef.current, 0);
              }}
              style={{ width: '100%', height: '100%' }}
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}>
              {picArr.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  <Image className="h-full w-full" source={item.bigPic} resizeMode="contain" />
                </SwiperSlide>
              ))}
            </Swiper>
            <Text className="absolute -top-[48px] left-0 right-0 text-center text-[30px] font-[600] text-[#fff]">
              洛杉矶豪宅项目
            </Text>
            <Pressable
              onPress={handlePre}
              style={{
                width: (57 / 1920) * sw,
                height: (57 / 1920) * sw,
                top: 0,
                bottom: 0,
                margin: 'auto',
                left: (-62 / 1920) * sw,
                position: 'absolute',
                zIndex: 2000,
              }}>
              <Image
                className="h-full w-full"
                alt=""
                source={require('@/assets/images/pre.png')}
                resizeMode="cover"
              />
            </Pressable>
            <Pressable
              onPress={handleNext}
              style={{
                transform: [{ rotate: '180deg' }],
                width: (57 / 1920) * sw,
                height: (57 / 1920) * sw,
                top: 0,
                bottom: 0,
                margin: 'auto',
                right: (-62 / 1920) * sw,
                position: 'absolute',
                zIndex: 2000,
              }}>
              <Image
                className="h-full w-full"
                alt=""
                source={require('@/assets/images/pre.png')}
                resizeMode="cover"
              />
            </Pressable>
          </VStack>
          <HStack
            className="items-center justify-between"
            style={{ width: (1416 / 1920) * sw, height: (126 / 1920) * sw }}>
            {picArr.map((item: any, index: number) => (
              <Center key={index} style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
                <Image
                  className="h-full w-full rounded-[10px]"
                  alt=""
                  source={item.thumb}
                  resizeMode="cover"
                />
              </Center>
            ))}
            {/* <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
              <Image
                className="h-full w-full rounded-[10px]"
                alt=""
                source={require('@/assets/images/pic1.png')}
                resizeMode="cover"
              />
            </Center>
            <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
              <Image
                className="h-full w-full rounded-[10px]"
                alt=""
                source={require('@/assets/images/pic2.png')}
                resizeMode="cover"
              />
            </Center>
            <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
              <Image
                className="h-full w-full rounded-[10px]"
                alt=""
                source={require('@/assets/images/pic3.png')}
                resizeMode="cover"
              />
            </Center>
            <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
              <Image
                className="h-full w-full rounded-[10px]"
                alt=""
                source={require('@/assets/images/pic4.png')}
                resizeMode="cover"
              />
            </Center>
            <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
              <Image
                className="h-full w-full rounded-[10px]"
                alt=""
                source={require('@/assets/images/pic5.png')}
                resizeMode="cover"
              />
            </Center>
            <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
              <Image
                className="h-full w-full rounded-[10px]"
                alt=""
                source={require('@/assets/images/pic6.png')}
                resizeMode="cover"
              />
            </Center>
            <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
              <Image
                className="h-full w-full rounded-[10px]"
                alt=""
                source={require('@/assets/images/pic7.png')}
                resizeMode="cover"
              />
            </Center>
            <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
              <Image
                className="h-full w-full rounded-[10px]"
                alt=""
                source={require('@/assets/images/pic8.png')}
                resizeMode="cover"
              />
            </Center> */}
          </HStack>
          <HStack className="h-[64px] w-full items-center justify-between bg-[#000]">
            <HStack>
              <Button className="ml-[18px] h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">全部</ButtonText>
              </Button>
              <Button className="ml-[11px] h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">厨房</ButtonText>
              </Button>
              <Button className="ml-[15px] h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">卫生间</ButtonText>
              </Button>
            </HStack>
            <HStack>
              <Button className="h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">上一组</ButtonText>
              </Button>
              <Button className="ml-[15px] h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">下一组</ButtonText>
              </Button>
              <Text className="ml-[35px] mr-[19px] align-middle text-[20px] font-[400] text-[#fff]/[0.6]">
                12/32
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Animated.View>
    </Portal>
  );
}
export default forwardRef(BigPicture);
const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    opacity: 1,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
