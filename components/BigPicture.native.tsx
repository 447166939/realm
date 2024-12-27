import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Swiper from 'react-native-swiper';

import { Button, ButtonText } from './ui/button';
import { Center } from './ui/center';
import { VStack } from './ui/vstack';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Portal } from '@/components/ui/portal';
import { Text } from '@/components/ui/text';
function BigPicture({ showModal, setShowModal, picArr, index, setIdx }: any, ref: any) {
  const { width: sw } = useWindowDimensions();
  const swRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({
    scrollTo: (idx: number) => {
      swRef.current?.scrollTo(idx);
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
    swRef?.current?.scrollBy(-1);
    if (index === 0) {
      setIdx(picArr.length - 1);
    } else {
      setIdx(index - 1);
    }
  };
  const handleNext = () => {
    console.log('next', picArr);
    console.log('index', index);
    swRef?.current?.scrollBy(1);
    // swRef?.current?.scrollTo(4)
    if (index === picArr.length - 1) {
      setIdx(0);
    } else {
      setIdx(index + 1);
    }
  };
  const onIndexChange = (index: number) => {
    setIdx(index);
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
              index={0}
              width={(1178 / 1920) * sw}
              height={(662 / 1920) * sw}
              showsPagination={false}
              onIndexChanged={onIndexChange}
              ref={swRef}>
              {picArr.map((item: any, index: number) => (
                <Image key={index} className="h-full w-full" source={item} resizeMode="contain" />
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
            <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
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
            </Center>
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
