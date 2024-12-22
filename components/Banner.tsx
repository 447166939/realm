import { Center } from './ui/center';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
export default function () {
  return (
    <HStack className="h-[650px] items-center justify-center">
      <Image
        alt=""
        className="absolute h-[100%] w-full"
        resizeMode="cover"
        source={require('@assets/images/banner.png')}
      />
      <Center className="w-[687px] flex-col">
        <Text className="text-center text-[100px] font-[600] text-[#fff]">领域地产</Text>
        <Text className="text-center text-[24px] font-[400] text-[#fff]">{`美国加州 豪宅设计，豪宅施工，豪宅订制，豪宅开发\n执照含: 建筑设计，结构工程，建筑施工综合承包，豪宅地产经纪`}</Text>
      </Center>
    </HStack>
  );
}
