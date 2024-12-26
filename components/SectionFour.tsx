import { useRef, useState } from 'react';
import { Pressable, useWindowDimensions } from 'react-native';

import { VStack } from './ui/vstack';
import BigPicture from './BigPicture';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
const picArr = [
  require('@/assets/images/pic1.png'),
  require('@/assets/images/pic2.png'),
  require('@/assets/images/pic3.png'),
  require('@/assets/images/pic4.png'),
  require('@/assets/images/pic5.png'),
  require('@/assets/images/pic6.png'),
  require('@/assets/images/pic7.png'),
  require('@/assets/images/pic8.png'),
];
export default function SectionFour() {
  const { width: sw } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const swiper = useRef<any>(null);
  const [idx, setIdx] = useState(0);
  const handlePress = (index: number) => {
    setShowModal(true);
    swiper?.current?.scrollTo(index);
  };
  return (
    <VStack className="w-full">
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
        <VStack className="h-full w-[18.6%] border-2 border-black">
          <Pressable
            onPress={() => handlePress(0)}
            className="w-full flex-1 items-center justify-center border-b-2 border-black">
            <Image
              alt=""
              source={picArr[0]}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress(1)}
            className="w-full flex-1 items-center justify-center">
            <Image
              alt=""
              source={picArr[1]}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Pressable>
        </VStack>
        <VStack className="h-full w-[24.8%] border-2 border-black">
          <Pressable
            onPress={() => handlePress(2)}
            className="h-[66.7%] w-full items-center justify-center border-b-2 border-black">
            <Image
              alt=""
              source={picArr[2]}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Pressable>
          <HStack className="w-full flex-1">
            <Pressable
              onPress={() => handlePress(3)}
              className="h-full flex-1 items-center justify-center border-l-2 border-r-2 border-black">
              <Image
                alt=""
                source={picArr[3]}
                className="absolute -z-10 h-full w-full"
                resizeMode="cover"
              />
              <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
            </Pressable>
            <Pressable
              onPress={() => handlePress(4)}
              className="h-full flex-1 items-center justify-center border-l-2 border-r-2 border-black">
              <Image
                alt=""
                source={picArr[4]}
                className="absolute -z-10 h-full w-full"
                resizeMode="cover"
              />
              <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
            </Pressable>
          </HStack>
        </VStack>
        <VStack className="h-full w-[18.6%] border-2 border-black">
          <Pressable
            onPress={() => handlePress(5)}
            className="w-full flex-1 items-center justify-center border-b-2 border-black">
            <Image
              alt=""
              source={picArr[5]}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Pressable>
          <Pressable
            onPress={() => handlePress(6)}
            className="w-full flex-1 items-center justify-center">
            <Image
              alt=""
              source={picArr[6]}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Pressable>
        </VStack>
        <VStack className="h-full flex-1 border-2 border-black">
          <Pressable
            onPress={() => handlePress(7)}
            className="w-full flex-1 items-center justify-center">
            <Image
              alt=""
              source={picArr[7]}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Pressable>
        </VStack>
      </HStack>
      <BigPicture
        ref={swiper}
        index={idx}
        setIdx={setIdx}
        picArr={picArr}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </VStack>
  );
}
