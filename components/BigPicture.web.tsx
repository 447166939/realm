import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useRecoilState } from 'recoil';
import SwiperCore, { Controller, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button, ButtonText } from './ui/button';
import { VStack } from './ui/vstack';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Portal } from '@/components/ui/portal';
import { Text } from '@/components/ui/text';
import { groupIndexAtom, picsAtom } from '@/store/global';
const allpics = [
  { src: require('@/assets/images/case1.mp4'), isVideo: true },
  { src: require('@/assets/images/case2.mp4'), isVideo: true },
  { src: require('@/assets/images/case3.mp4'), isVideo: true },
  { src: require('@/assets/images/case4.mp4'), isVideo: true },
  { src: require('@/assets/images/bath1.jpg'), isVideo: false },
  { src: require('@/assets/images/bath2.jpg'), isVideo: false },
  { src: require('@/assets/images/bath3.jpg'), isVideo: false },
  { src: require('@/assets/images/bath4.jpg'), isVideo: false },
  { src: require('@/assets/images/bath5.jpg'), isVideo: false },
  { src: require('@/assets/images/bath6.jpg'), isVideo: false },
  { src: require('@/assets/images/bath7.jpg'), isVideo: false },
  { src: require('@/assets/images/bath8.jpg'), isVideo: false },
  { src: require('@/assets/images/bath9.jpg'), isVideo: false },
  // { src: require('@/assets/images/bath10.jpg'), isVideo: false },
  //{ src: require('@/assets/images/bath11.jpg'), isVideo: false },
  { src: require('@/assets/images/tar1.jpg'), isVideo: false },
  { src: require('@/assets/images/tar2.jpg'), isVideo: false },
  { src: require('@/assets/images/tar3.jpg'), isVideo: false },
  { src: require('@/assets/images/tar4.jpg'), isVideo: false },
  { src: require('@/assets/images/tar5.jpg'), isVideo: false },
  { src: require('@/assets/images/tar6.jpg'), isVideo: false },
  { src: require('@/assets/images/tar7.jpg'), isVideo: false },
  { src: require('@/assets/images/tar8.jpg'), isVideo: false },
  { src: require('@/assets/images/tar9.jpg'), isVideo: false },
  { src: require('@/assets/images/tar10.jpg'), isVideo: false },
  { src: require('@/assets/images/tar11.jpg'), isVideo: false },
  { src: require('@/assets/images/k1.jpg'), isVideo: false },
  { src: require('@/assets/images/k2.jpg'), isVideo: false },
  { src: require('@/assets/images/k3.jpg'), isVideo: false },
  { src: require('@/assets/images/k4.jpg'), isVideo: false },
  { src: require('@/assets/images/k5.jpg'), isVideo: false },
  { src: require('@/assets/images/k6.jpg'), isVideo: false },
  { src: require('@/assets/images/k7.jpg'), isVideo: false },
  { src: require('@/assets/images/k8.jpg'), isVideo: false },
  { src: require('@/assets/images/k9.jpg'), isVideo: false },
  { src: require('@/assets/images/k10.jpg'), isVideo: false },
  { src: require('@/assets/images/k11.jpg'), isVideo: false },
  { src: require('@/assets/images/car1.jpg'), isVideo: false },
  { src: require('@/assets/images/car2.jpg'), isVideo: false },
  { src: require('@/assets/images/car3.jpg'), isVideo: false },
  { src: require('@/assets/images/car4.jpg'), isVideo: false },
  { src: require('@/assets/images/car5.jpg'), isVideo: false },
  { src: require('@/assets/images/car6.jpg'), isVideo: false },
  { src: require('@/assets/images/car7.jpg'), isVideo: false },
  { src: require('@/assets/images/car8.jpg'), isVideo: false },
  { src: require('@/assets/images/car9.jpg'), isVideo: false },
  { src: require('@/assets/images/car10.jpg'), isVideo: false },
  { src: require('@/assets/images/car11.jpg'), isVideo: false },
  { src: require('@/assets/images/car12.jpg'), isVideo: false },
  { src: require('@/assets/images/car13.jpg'), isVideo: false },
  { src: require('@/assets/images/car14.jpg'), isVideo: false },
  { src: require('@/assets/images/mor1.jpg'), isVideo: false },
  //{ src: require('@/assets/images/mor2.jpg'), isVideo: false },
  //{ src: require('@/assets/images/mor3.jpg'), isVideo: false },
  //{ src: require('@/assets/images/mor4.jpg'), isVideo: false },
  { src: require('@/assets/images/mor5.jpg'), isVideo: false },
  { src: require('@/assets/images/mor6.jpg'), isVideo: false },
  { src: require('@/assets/images/mor7.jpg'), isVideo: false },
  { src: require('@/assets/images/mor8.jpg'), isVideo: false },
  { src: require('@/assets/images/mor9.jpg'), isVideo: false },
  { src: require('@/assets/images/mor10.jpg'), isVideo: false },
  { src: require('@/assets/images/mor11.jpg'), isVideo: false },
  { src: require('@/assets/images/mor12.jpg'), isVideo: false },
  { src: require('@/assets/images/van1.jpg'), isVideo: false },
  { src: require('@/assets/images/van2.jpg'), isVideo: false },
  { src: require('@/assets/images/van3.jpg'), isVideo: false },
  { src: require('@/assets/images/van4.jpg'), isVideo: false },
  { src: require('@/assets/images/van5.jpg'), isVideo: false },
  { src: require('@/assets/images/van6.jpg'), isVideo: false },
  { src: require('@/assets/images/van7.jpg'), isVideo: false },
];
SwiperCore.use([Controller, Thumbs]); // eslint-disable-line
function VideoItem({ source }: any) {
  const player: any = useVideoPlayer(source, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  const handlePlay = () => {
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };
  return (
    <>
      <VideoView
        contentFit="contain"
        style={{ position: 'absolute', height: '100%', width: '100%' }}
        player={player}
        nativeControls={false}></VideoView>
      <Pressable
        style={{
          width: 40,
          height: 40,
          zIndex: 3000,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: 'auto',
        }}
        onPress={handlePlay}>
        <Image
          resizeMode="contain"
          className="h-[40px] w-[40px]"
          source={require('@/assets/images/playBtn.png')}
        />
      </Pressable>
    </>
  );
}
export default function BigPicture({ showModal, setShowModal, arr }: any) {
  const { width: sw } = useWindowDimensions();
  const [idx, setIdx] = useRecoilState(groupIndexAtom);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);
  const [pics, setPics] = useRecoilState(picsAtom);
  const [thumb, setThumb] = useState<any>(null);
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
  //1.tar2.kitchen3.baths4.car5mor6van
  useEffect(() => {
    if (idx === 0) {
      setPics(allpics);
    } else {
      setPics(arr[idx].pics);
    }
  }, [idx, setPics, arr]);
  const handleClose = () => {
    setShowModal(false);
  };
  const handlePre = () => {
    swiper?.slidePrev(500);
  };
  const handleNext = () => {
    swiper?.slideNext(500);
  };
  const handlePressAll = () => {
    setIdx(0);
  };
  const handlePressKitChen = () => {
    setIdx(2);
  };
  const handlePressBaths = () => {
    setIdx(3);
  };
  const handleCurrentIndex = (cur: any) => {
    setCurrentIndex(cur.realIndex);
  };
  const handleNextGroup = () => {
    //1.tar2.kitchen3.baths4.car5mor6van
    //const seq=['tar','kitchen','baths','car','mor','van']
    if (idx === 7) {
      setIdx(0);
    } else {
      setIdx(idx + 1);
    }
  };
  const handlePrevGroup = () => {
    if (idx === 0) {
      setIdx(7);
    } else {
      setIdx(idx - 1);
    }
  };
  return (
    <Portal isOpen={showModal}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <VStack className="h-lvh w-lvw items-center justify-end">
          <Pressable
            onPress={handleClose}
            className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-lvh w-lvw bg-[#000]/[0.8]"></Pressable>
          <Pressable
            onPress={handleClose}
            className="absolute right-[38px] top-[38px] z-50 mt-[30px] h-[27px] w-[27px]">
            <Image className="h-full w-full" alt="" source={require('@/assets/images/close.png')} />
          </Pressable>
          <VStack
            style={{
              flex: 1,
              aspectRatio: 1172 / 658,
              marginTop: 30,
              borderWidth: 2,
              borderColor: '#000',
            }}>
            <Text className="mb-[9px] mt-[24px] text-center text-[30px] font-[600] text-[#fff]">
              {(idx && arr[idx].title) || '所有项目'}
            </Text>
            <Swiper
              onRealIndexChange={handleCurrentIndex}
              thumbs={{ swiper: thumb && !thumb.destroyed ? thumb : null }}
              loop
              controller={{ control: swiper }}
              onSwiper={(s) => {
                setSwiper(s);
              }}
              style={{ width: '100%', height: '100%' }}
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={(s) => console.log('slide change', s)}>
              {pics.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  {item.isVideo ? (
                    <VideoItem source={item.src} />
                  ) : (
                    <Image className="h-full w-full" source={item.src} resizeMode="contain" />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
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
            className="mt-[40px] items-center justify-between"
            style={{ width: (1416 / 1920) * sw, height: (107 / 1920) * sw }}>
            <Swiper
              className="mySwiper"
              watchSlidesProgress={true}
              watchSlidesVisibility={true}
              loop
              freeMode
              onSwiper={setThumb}
              style={{ width: '100%', height: '100%' }}
              spaceBetween={10}
              slidesPerView={8}>
              {pics.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  {item.isVideo ? (
                    <VideoItem source={item.src} />
                  ) : (
                    <Image className="h-full w-full" source={item.src} resizeMode="contain" />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </HStack>
          <HStack className="h-[64px] w-full items-center justify-between bg-[#000]">
            <HStack>
              <Button
                onPress={handlePressAll}
                className="ml-[18px] h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">全部</ButtonText>
              </Button>
              <Button
                onPress={handlePressKitChen}
                className="ml-[11px] h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">厨房</ButtonText>
              </Button>
              <Button
                onPress={handlePressBaths}
                className="ml-[15px] h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">卫生间</ButtonText>
              </Button>
            </HStack>
            <HStack>
              <Button onPress={handlePrevGroup} className="h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">上一组</ButtonText>
              </Button>
              <Button
                onPress={handleNextGroup}
                className="ml-[15px] h-[37px] w-[116px] bg-[#3B3B3B]">
                <ButtonText className="text-[20px] font-[400] text-[#fff]">下一组</ButtonText>
              </Button>
              <Text className="ml-[35px] mr-[19px] align-middle text-[20px] font-[400] text-[#fff]/[0.6]">
                {`${currentIndex + 1}/${pics.length}`}
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Animated.View>
    </Portal>
  );
}
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
