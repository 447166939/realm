import { useWindowDimensions } from 'react-native';

import { VStack } from './ui/vstack';

import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { LinearGradient } from '@/components/ui/linear-gradient';
import { Text } from '@/components/ui/text';
export default function SectionFour() {
  const { width: sw } = useWindowDimensions();
  return (
    <VStack className="w-full">
      <LinearGradient
        colors={['#2E236F', '#000', '#000']}
        start={[0, 1]}
        end={[0.5, 0.7]}
        locations={[0, 0.1, 1]}
        className="h-[209px] w-full items-center justify-center">
        <Text className="text-[50px] font-[600] leading-none text-[#fff]">案列展示</Text>
        <Text className="mt-[12px] w-[400px] text-[16px] font-[400] leading-none text-[#fff]">
          有任何想法随时与我们团队联系，我们将全力为您服务。
        </Text>
      </LinearGradient>
      <HStack className="w-full" style={{ height: (722 / 1920) * sw }}>
        <VStack className="h-full w-[18.6%] border-2 border-black">
          <Center className="w-full flex-1 border-b-2 border-black">
            <Image
              alt=""
              source={require('@/assets/images/pic1.png')}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Center>
          <Center className="w-full flex-1">
            <Image
              alt=""
              source={require('@/assets/images/pic2.png')}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Center>
        </VStack>
        <VStack className="h-full w-[24.8%] border-2 border-black">
          <Center className="h-[66.7%] w-full border-b-2 border-black">
            <Image
              alt=""
              source={require('@/assets/images/pic3.png')}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Center>
          <HStack className="w-full flex-1">
            <Center className="h-full flex-1 border-l-2 border-r-2 border-black">
              <Image
                alt=""
                source={require('@/assets/images/pic4.png')}
                className="absolute -z-10 h-full w-full"
                resizeMode="cover"
              />
              <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
            </Center>
            <Center className="h-full flex-1 border-l-2 border-r-2 border-black">
              <Image
                alt=""
                source={require('@/assets/images/pic5.png')}
                className="absolute -z-10 h-full w-full"
                resizeMode="cover"
              />
              <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
            </Center>
          </HStack>
        </VStack>
        <VStack className="h-full w-[18.6%] border-2 border-black">
          <Center className="w-full flex-1 border-b-2 border-black">
            <Image
              alt=""
              source={require('@/assets/images/pic6.png')}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Center>
          <Center className="w-full flex-1">
            <Image
              alt=""
              source={require('@/assets/images/pic7.png')}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Center>
        </VStack>
        <VStack className="h-full flex-1 border-2 border-black">
          <Center className="w-full flex-1">
            <Image
              alt=""
              source={require('@/assets/images/pic8.png')}
              className="absolute -z-10 h-full w-full"
              resizeMode="cover"
            />
            <Text className="text-[24px] font-[600] text-[#fff]">洛杉矶豪宅项目</Text>
          </Center>
        </VStack>
      </HStack>
    </VStack>
  );
}
