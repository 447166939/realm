import { useWindowDimensions, View } from 'react-native';

import { VStack } from './ui/vstack';

import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
export default function SectionFive({ onLayout }: any) {
  const { width: sw } = useWindowDimensions();
  const handleLayout = (event: any) => {
    onLayout(event.nativeEvent.layout);
  };
  return (
    <View onLayout={handleLayout} style={{ width: '100%' }}>
      <VStack style={{ height: (212 / 1920) * sw }} className="w-full items-center justify-center">
        <Image
          alt=""
          source={require('@/assets/images/intro_bg.png')}
          className="absolute -z-10 h-full w-full"
          resizeMode="cover"
        />

        <Text className="text-[50px] font-[600] leading-none text-[#fff]">团队介绍</Text>
        <Text className="mt-[25px] text-[16px] font-[400] leading-none text-[#fff]">
          有任何想法随时与我们团队联系，我们将全力为您服务。
        </Text>
      </VStack>
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
            className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
            style={{ paddingLeft: (60 / 1920) * sw }}>
            <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
            <Text className="mt-[10px] w-[842px] text-[14px] font-[400] leading-loose text-[#000]/[0.5]">
              {`毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。作为地产投资人以及豪宅建商，持有建筑施工综合执照，水电空调执照。职业地产开发建商，为客户定制豪宅，开发豪宅保驾护航。`}
            </Text>
          </VStack>
        </VStack>
        <HStack className="h-full flex-1">
          <VStack className="h-full flex-1 border-l-2 border-r-2 border-black">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro2.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Leven Lee</Text>
              <Text className="mt-[10px] w-[378px] text-[14px] font-[400] leading-loose text-[#000]/[0.5]">
                毕业于宾夕法尼亚大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后就职于Gensler,
                AECOM等多家国际大型建筑设计公司，精通建筑设计，室内设计，建筑师执照。
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
              className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Daniel Zheng</Text>
              <Text className="mt-[10px] w-[378px] text-[14px] font-[400] leading-loose text-[#000]/[0.5]">
                职业建筑工程师，擅长结构工程绘图，结构工程图纸审批，结构工程施工工艺，建筑工程施工管理。在行业拥有20余年经验，能帮助客户最快速度完成建筑结构设计与审批完成。
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </HStack>
      <HStack className="w-full" style={{ height: (707 / 1920) * sw }}>
        <HStack className="h-full flex-1">
          <VStack className="h-full flex-1 border-r-2 border-black">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro4.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Julie Sander</Text>
              <Text className="mt-[10px] w-[355px] text-[14px] font-[400] leading-loose text-[#000]/[0.5]">
                建筑项目贷款Loan Officer, 10余年建筑工程贷款经验。专注于: Bridge Loan, Construction
                Loan, Private Money Lending，为您的项目提供资金支持。
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
              className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Nathan Salmon</Text>
              <Text className="mt-[10px] w-[376px] text-[14px] font-[400] leading-loose text-[#000]/[0.5]">
                {`地产投资人，翻新房开发商。在行业拥有多年的投资开发经验，累计在旧金山湾区以及洛杉矶地区开发翻新豪宅多达50余套，平均收益为30%/项目。熟悉房屋翻新开发的各个流程，主要负责公司本地化运营，房产开发咨询。`}
              </Text>
            </VStack>
          </VStack>
        </HStack>
        <VStack className="h-full flex-1 border-l-2 border-black">
          <Center className="w-full" style={{ height: (561 / 1920) * sw }}>
            <Image
              alt=""
              source={require('@/assets/images/intro6.png')}
              className="h-full w-full"
              resizeMode="cover"
            />
          </Center>
          <VStack
            className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
            style={{ paddingLeft: (60 / 1920) * sw }}>
            <Text className="text-[30px] font-[400] leading-none text-[#000]">Sam Liu</Text>
            <Text className="mt-[10px] w-[842px] text-[14px] font-[400] leading-loose text-[#000]/[0.5]">
              {`毕业于纽约大学建筑系，在建筑设计和施工行业有超过10余年的独立经营管理经验。累计设计和批复建筑新建，改建超过百余座，在加州特别是洛杉矶地区有丰富的政府审批经验以及施工设计经验。持有: 建筑师，建筑施工执照。`}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </View>
  );
}
