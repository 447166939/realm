import { useRef, useState } from 'react';
import { Pressable, useWindowDimensions, View } from 'react-native';

import { VStack } from './ui/vstack';
import BigPicture from './BigPicture';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
const arr = [
  {
    title: '卫生间项目',
    src: require('@/assets/images/pic1.png'),
    thumb: require('@/assets/images/pic1.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
  },
  {
    title: 'TAR_Proj',
    src: require('@/assets/images/pic2.png'),
    thumb: require('@/assets/images/pic2.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
  },
  {
    title: 'Kitchen_Proj',
    src: require('@/assets/images/pic3.png'),
    thumb: require('@/assets/images/pic3.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
  },
  {
    title: 'Bath_Proj',
    src: require('@/assets/images/pic4.png'),
    thumb: require('@/assets/images/pic4.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
  },
  {
    title: 'CAR_Proj',
    src: require('@/assets/images/pic5.png'),
    thumb: require('@/assets/images/pic5.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
  },
  {
    title: 'MOR_Proj',
    src: require('@/assets/images/pic6.png'),
    thumb: require('@/assets/images/pic6.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
  },
  {
    title: 'Van_Proj',
    src: require('@/assets/images/pic7.png'),
    thumb: require('@/assets/images/pic7.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
  },
  {
    title: '厨房项目',
    src: require('@/assets/images/pic8.png'),
    thumb: require('@/assets/images/pic8.png'),
    isVideo: false,
    bigPic: require('@/assets/images/bighouse.png'),
  },
];
export default function SectionFour({ onLayout }: any) {
  const { width: sw } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const swiper = useRef<any>(null);
  const [idx, setIdx] = useState(0);
  const handlePress = (index: number) => {
    setShowModal(true);
    swiper?.current?.scrollTo(index);
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
      <HStack className="w-full" style={{ height: (722 / 1920) * sw }}>
        <VStack className="h-full basis-[24.89%] border-2 border-black">
          <Pressable
            onPress={() => handlePress(0)}
            className="w-full flex-1 items-center justify-center border-b-2 border-black">
            <Image
              alt=""
              source={arr[0].src}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">{arr[0].title}</Text>
          </Pressable>
        </VStack>
        <VStack className="h-full basis-[16.7%] border-2 border-black">
          <Pressable
            onPress={() => handlePress(1)}
            className="w-full flex-1 items-center justify-center">
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
        <VStack className="h-full basis-[16.7%] border-2 border-black">
          <Pressable
            onPress={() => handlePress(3)}
            className="w-full flex-1 items-center justify-center">
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
        <VStack className="h-full basis-[16.7%] border-2 border-black">
          <Pressable
            onPress={() => handlePress(5)}
            className="w-full flex-1 items-center justify-center">
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
        <VStack className="h-full basis-[24.89%] border-2 border-black">
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
      <BigPicture
        ref={swiper}
        index={idx}
        setIdx={setIdx}
        picArr={arr}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
}
