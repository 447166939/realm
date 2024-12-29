import { useWindowDimensions } from 'react-native';

import { VStack } from './ui/vstack';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
/* export default function SectionTwo() {
  return (
    <HStack className="h-[726px] w-full">
      <VStack className="h-[100%] flex-1 items-center justify-center">
        <VStack className="w-[700px]">
          <Text className="text-[50px] font-[600] text-[#000]">创始人简介</Text>
          <Text className="mb-[27px] mt-[49px] text-[24px] font-[600] text-[#000]">Zion Huang</Text>
          <Text className="text-[14px]/[28px] font-[400] text-[#000]/[0.6]">{`毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook, Amazon作为软件工程师和产品经理。\n

2021年一次偶然机会接触房地产投资，从10万美金的老房翻新做起，一直到数百万美金的豪宅翻新，累计翻新，改造，加建，新建单元超过一百座。至2025年获得: 建筑设计，建筑施工，地产经纪执照，在行业摸爬滚打4年有余，积累的大量的经验，最终专注于豪宅开发。\n

设计师的背景让Zion Huang先生拥有极高的审美造诣，科技行业的经历让Zion Huang先生追求施工流程软件化管理，房屋硬件智能化。设计师和工程师背景让领域地产团队对现代化智能豪宅的打造有了更深一层的理解，致力于追求更加智豪的居住体验。`}</Text>
        </VStack>
      </VStack>
      <Image
        alt=""
        className="h-[100%] w-[753px]"
        resizeMode="cover"
        source={require('@assets/images/pic.png')}
      />
    </HStack>
  );
}
 */
/* export default function SectionTwo() {
  const { width: sw } = useWindowDimensions();
  return (
    <HStack style={{ height: (726 / 1920) * sw }} className="w-full">
      <VStack className="h-full flex-1">
        <VStack style={{ height: (364 / 1920) * sw }} className="w-full">
          <Image
            alt=""
            source={require('@/assets/images/creator1.png')}
            className="h-full w-full"
            resizeMode="cover"
          />
        </VStack>
        <Center className="w-full flex-1">
          <VStack className="w-[847px]">
            <Text className="text-[24px] font-[600] text-[#000]">Zion Huang</Text>
            <Text className="my-[16px] text-[16px] font-[600] leading-none text-[#000]">
              Realm领域地产合伙人
            </Text>
            <Text className="text-[14px] font-[400] leading-7 text-[#000]/[0.6]">{`毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook, Amazon作为软件工程师和产品经理。
2021年一次偶然机会接触房地产投资，从10万美金的老房翻新做起，一直到数百万美金的豪宅翻新，累计翻新，改造，加建，新建单元超过一百座。至2025年获得: 建筑设计，建筑施工，地产经纪执照，在行业摸爬滚打4年有余，积累的大量的经验，最终专注于豪宅开发。
设计师的背景让Zion Huang先生拥有极高的审美造诣，科技行业的经历让Zion Huang先生追求施工流程软件化管理，房屋硬件智能化。设计师和工程师背景让领域地产团队对现代化智能豪宅的打造有了更深一层的理解，致力于追求更加智豪的居住体验。`}</Text>
          </VStack>
        </Center>
      </VStack>
      <VStack className="h-full flex-1">
        <Center className="w-full flex-1">
          <VStack className="w-[847px]">
            <Text className="text-[24px] font-[600] text-[#000]">Zion Huang</Text>
            <Text className="my-[16px] text-[16px] font-[600] leading-none text-[#000]">
              Realm领域地产合伙人
            </Text>
            <Text className="text-[14px] font-[400] leading-7 text-[#000]/[0.6]">{`毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook, Amazon作为软件工程师和产品经理。
2021年一次偶然机会接触房地产投资，从10万美金的老房翻新做起，一直到数百万美金的豪宅翻新，累计翻新，改造，加建，新建单元超过一百座。至2025年获得: 建筑设计，建筑施工，地产经纪执照，在行业摸爬滚打4年有余，积累的大量的经验，最终专注于豪宅开发。
设计师的背景让Zion Huang先生拥有极高的审美造诣，科技行业的经历让Zion Huang先生追求施工流程软件化管理，房屋硬件智能化。设计师和工程师背景让领域地产团队对现代化智能豪宅的打造有了更深一层的理解，致力于追求更加智豪的居住体验。`}</Text>
          </VStack>
        </Center>
        <VStack style={{ height: (364 / 1920) * sw }} className="w-full">
          <Image
            alt=""
            source={require('@/assets/images/creator2.png')}
            className="h-full w-full"
            resizeMode="cover"
          />
        </VStack>
      </VStack>
    </HStack>
  );
} */
export default function SectionTwo() {
  const { width: sw } = useWindowDimensions();
  return (
    <HStack style={{ height: (726 / 1920) * sw }} className="w-full">
      <HStack className="flex-1">
        <Image
          alt=""
          source={require('@/assets/images/creator1.png')}
          className="h-full w-[51%]"
          resizeMode="cover"
        />
        <VStack style={{ paddingTop: (132 / 1920) * sw }} className="h-full flex-1 items-center">
          <VStack>
            <Text className="text-[24px] font-[600] text-[#000]">Zion Huang</Text>
            <Text className="my-[16px] text-[16px] font-[600] leading-none text-[#000]">
              Realm 领域建筑合伙人
            </Text>
            <Text className="w-[307px] text-[14px] font-[400] leading-7 text-[#000]/[0.6]">{`毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后转型就职于科技行业，曾就职于Facebook, Amazon作为软件工程师。

2021年一次偶然机会接触房地产投资，从10万美金的老房翻新做起，一直到数百万美金的豪宅翻新，累计翻新，改造，加建，新建单元超过一百座。至2025年获得: 建筑设计，建筑施工，地产经纪执照，在行业摸爬滚打4年有余，积累的大量的经验，最终专注于豪宅开发。

设计师的背景让Zion Huang先生拥有极高的审美造诣，科技行业的经历让Zion Huang先生追求施工流程软件化管理，房屋硬件智能化。设计师和工程师背景让领域地产团队对现代化智能豪宅的打造有了更深一层的理解，致力于追求更加智豪的居住体验。`}</Text>
          </VStack>
        </VStack>
      </HStack>
      <HStack className="flex-1">
        <Image
          alt=""
          source={require('@/assets/images/creator2.png')}
          className="h-full w-[51%]"
          resizeMode="cover"
        />
        <VStack style={{ paddingTop: (132 / 1920) * sw }} className="h-full flex-1 items-center">
          <VStack>
            <Text className="text-[24px] font-[600] text-[#000]">Sam Liu</Text>
            <Text className="my-[16px] text-[16px] font-[600] leading-none text-[#000]">
              Realm 领域建筑合伙人
            </Text>
            <Text className="w-[307px] text-[14px] font-[400] leading-7 text-[#000]/[0.6]">{`毕业于纽约大学建筑系，在建筑设计和施工行业有超过十余年的独立经营管理经验。累计设计和批复建筑新建，改建超过百余座，在加州特别是洛杉矶地区有丰富的政府审批经验以及施工设计经验。持有: 建筑师，建筑施工执照。

Sam十余年的建筑设计和施工经验，让他对房屋改建，新建的整个从建筑审批的各个流程有着深刻的理解，以及对施工工艺的精准把握。确保每个项目都能快速，高质量的完工，为领域建筑的客户争取最大的利益。

对施工管理流程的精准把控，让领域建筑有着极高的品控，确保每一座建筑都是高质量的工程与艺术的结晶。`}</Text>
          </VStack>
        </VStack>
      </HStack>
    </HStack>
  );
}
