import { useState } from 'react';
import { Pressable, useWindowDimensions, View } from 'react-native';
import { useRecoilState } from 'recoil';

import { VStack } from './ui/vstack';
import BigPicture from './BigPicture';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { groupIndexAtom } from '@/store/global';
//1.tar2.kitchen3.baths4.car5mor6van
const arr = [
  {
    title: '卫生间项目',
    src: require('@/assets/images/pic1.png'),
    thumb: require('@/assets/images/pic1.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
    pics: [
      { src: require('@/assets/images/bath1.jpg'), isVideo: false },
      { src: require('@/assets/images/bath2.jpg'), isVideo: false },
      { src: require('@/assets/images/bath3.jpg'), isVideo: false },
      { src: require('@/assets/images/bath4.jpg'), isVideo: false },
      { src: require('@/assets/images/bath5.jpg'), isVideo: false },
      { src: require('@/assets/images/bath6.jpg'), isVideo: false },
      { src: require('@/assets/images/bath7.jpg'), isVideo: false },
      { src: require('@/assets/images/bath8.jpg'), isVideo: false },
      { src: require('@/assets/images/bath9.jpg'), isVideo: false },
      //{ src: require('@/assets/images/bath10.jpg'), isVideo: false },
      //{ src: require('@/assets/images/bath11.jpg'), isVideo: false },
    ],
  },
  {
    title: 'TAR_Proj',
    src: require('@/assets/images/pic2.png'),
    thumb: require('@/assets/images/pic2.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
    pics: [
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
    ],
  },
  {
    title: 'Kitchen_Proj',
    src: require('@/assets/images/pic3.png'),
    thumb: require('@/assets/images/pic3.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
    pics: [
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
    ],
  },
  {
    title: 'Bath_Proj',
    src: require('@/assets/images/pic4.png'),
    thumb: require('@/assets/images/pic4.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
    pics: [
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
    ],
  },
  {
    title: 'CAR_Proj',
    src: require('@/assets/images/pic5.png'),
    thumb: require('@/assets/images/pic5.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
    pics: [
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
    ],
  },
  {
    title: 'MOR_Proj',
    src: require('@/assets/images/pic6.png'),
    thumb: require('@/assets/images/pic6.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
    pics: [
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
    ],
  },
  {
    title: 'Van_Proj',
    src: require('@/assets/images/pic7.png'),
    thumb: require('@/assets/images/pic7.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
    pics: [
      { src: require('@/assets/images/van1.jpg'), isVideo: false },
      { src: require('@/assets/images/van2.jpg'), isVideo: false },
      { src: require('@/assets/images/van3.jpg'), isVideo: false },
      { src: require('@/assets/images/van4.jpg'), isVideo: false },
      { src: require('@/assets/images/van5.jpg'), isVideo: false },
      { src: require('@/assets/images/van6.jpg'), isVideo: false },
      { src: require('@/assets/images/van7.jpg'), isVideo: false },
    ],
  },
  {
    title: '厨房项目',
    src: require('@/assets/images/pic8.png'),
    thumb: require('@/assets/images/pic8.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
    pics: [
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
    ],
  },
];
export default function SectionFour({ onLayout }: any) {
  const { width: sw } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const [_idx, setIdx] = useRecoilState(groupIndexAtom);
  const handlePress = (index: number) => {
    setShowModal(true);
    console.log('index===', index);
    //1.tar2.kitchen3.baths4.car5mor6van
    if (index === 0) {
      setIdx(3);
    } else if (index === 7) {
      setIdx(2);
    } else {
      setIdx(index);
    }
  };
  const handleLayout = (event: any) => {
    onLayout(event.nativeEvent.layout);
    console.log(event.nativeEvent.layout);
  };
  return (
    <View onLayout={handleLayout} style={{ width: '100%' }}>
      <VStack style={{ height: (209 / 1920) * sw }} className="w-full items-center justify-center">
        <Image
          alt=""
          source={require('@/assets/images/exhibit_bg.png')}
          className="absolute -z-10 h-full w-full"
          resizeMode="cover"
        />
        <Text className="text-[50px] font-[600] leading-none text-[#fff]">案列展示</Text>
        <Text className="mt-[12px] w-[400px] text-[16px] font-[400] leading-none text-[#fff]">
          有任何想法随时与我们团队联系，我们将全力为您服务。
        </Text>
      </VStack>
      {/*****原来 24.89% 16.7%*/}
      <HStack className="w-full" style={{ height: (722 / 1920) * sw, backgroundColor: '#000' }}>
        <VStack className="h-full basis-[21.15%] bg-black pr-[4px]">
          <Pressable
            onPress={() => handlePress(0)}
            className="w-full flex-1 items-center justify-center">
            <Image
              alt=""
              source={arr[0].src}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">{arr[0].title}</Text>
          </Pressable>
        </VStack>
        <VStack className="h-full basis-[19.2%] bg-black pr-[4px]">
          <Pressable
            onPress={() => handlePress(1)}
            className="w-full flex-1 items-center justify-center bg-black pb-[4px]">
            <Image
              alt=""
              source={arr[1].src}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">{arr[1].title}</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress(2)}
            className="w-full flex-1 items-center justify-center">
            <Image
              alt=""
              source={arr[2].src}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">{arr[2].title}</Text>
          </Pressable>
        </VStack>
        <VStack className="h-full basis-[19.2%] bg-black pr-[4px]">
          <Pressable
            onPress={() => handlePress(3)}
            className="w-full flex-1 items-center justify-center bg-black pb-[4px]">
            <Image
              alt=""
              source={arr[3].src}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">{arr[3].title}</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress(4)}
            className="w-full flex-1 items-center justify-center">
            <Image
              alt=""
              source={arr[4].src}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">{arr[4].title}</Text>
          </Pressable>
        </VStack>
        <VStack className="h-full basis-[19.2%] bg-black pr-[4px]">
          <Pressable
            onPress={() => handlePress(5)}
            className="w-full flex-1 items-center justify-center bg-black pb-[4px]">
            <Image
              alt=""
              source={arr[5].src}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">{arr[5].title}</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress(6)}
            className="w-full flex-1 items-center justify-center">
            <Image
              alt=""
              source={arr[6].src}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">{arr[6].title}</Text>
          </Pressable>
        </VStack>
        <VStack className="h-full basis-[21.15%]">
          <Pressable
            onPress={() => handlePress(7)}
            className="w-full flex-1 items-center justify-center">
            <Image
              alt=""
              source={arr[7].src}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">{arr[7].title}</Text>
          </Pressable>
        </VStack>
      </HStack>
      <BigPicture arr={arr} showModal={showModal} setShowModal={setShowModal} />
    </View>
  );
}
