import { useWindowDimensions } from 'react-native';

import { VStack } from './ui/vstack';

import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { LinearGradient } from '@/components/ui/linear-gradient';
import { Text } from '@/components/ui/text';
export default function SectionFive() {
  const { width: sw } = useWindowDimensions();
  return (
    <VStack className="w-full">
      <LinearGradient
        colors={['#2E236F', '#000', '#000']}
        start={[0, 1]}
        end={[0.5, 0.7]}
        locations={[0, 0.1, 1]}
        className="h-[212px] w-full items-center justify-center">
        <Text className="text-[50px] font-[600] leading-none text-[#fff]">团队介绍</Text>
        <Text className="mt-[25px] text-[16px] font-[400] leading-none text-[#fff]">
          有任何想法随时与我们团队联系，我们将全力为您服务。
        </Text>
      </LinearGradient>
      <HStack className="w-full" style={{ height: (707 / 1920) * sw }}>
        <VStack className="h-full flex-1">
          <Center className="w-full" style={{ height: (561 / 1920) * sw }}>
            <Image
              alt=""
              source={require('@/assets/images/intro1.png')}
              className="h-full w-full"
              resizeMode="cover"
            />
          </Center>
          <VStack
            className="w-full flex-1 justify-center border border-black"
            style={{ paddingLeft: (60 / 1920) * sw }}>
            <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
            <Text className="mt-[10px] w-[842px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
              毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
              Amazon作为软件工程师和产品经理。
            </Text>
          </VStack>
        </VStack>
        <HStack className="h-full flex-1">
          <VStack className="h-full flex-1">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro2.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
              <Text className="mt-[10px] w-[378px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
                毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
                Amazon作为软件工程师和产品经理。
              </Text>
            </VStack>
          </VStack>
          <VStack className="h-full flex-1">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro3.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
              <Text className="mt-[10px] w-[378px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
                毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
                Amazon作为软件工程师和产品经理。
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </HStack>
      <HStack className="w-full" style={{ height: (707 / 1920) * sw }}>
        <HStack className="h-full flex-1">
          <VStack className="h-full flex-1">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro4.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
              <Text className="mt-[10px] w-[355px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
                毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
                Amazon作为软件工程师和产品经理。
              </Text>
            </VStack>
          </VStack>
          <VStack className="h-full flex-1">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro5.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
              <Text className="mt-[10px] w-[355px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
                毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
                Amazon作为软件工程师和产品经理。
              </Text>
            </VStack>
          </VStack>
        </HStack>
        <VStack className="h-full flex-1">
          <Center className="w-full" style={{ height: (561 / 1920) * sw }}>
            <Image
              alt=""
              source={require('@/assets/images/intro6.png')}
              className="h-full w-full"
              resizeMode="cover"
            />
          </Center>
          <VStack
            className="w-full flex-1 justify-center border border-black"
            style={{ paddingLeft: (60 / 1920) * sw }}>
            <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
            <Text className="mt-[10px] w-[842px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
              毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
              Amazon作为软件工程师和产品经理。
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
}
