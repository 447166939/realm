import { useWindowDimensions, View } from 'react-native';

import { VStack } from './ui/vstack';

import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
export default function SectionOne({ onLayout }: any) {
  const { width: sw } = useWindowDimensions();
  const handleLayout = (event: any) => {
    onLayout(event.nativeEvent.layout);
    console.log(event.nativeEvent.layout);
  };
  return (
    <View
      onLayout={handleLayout}
      style={{
        height: (726 / 1920) * sw,
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'row',
      }}>
      <VStack className="h-full w-[40%] items-center justify-center">
        <Image
          alt=""
          source={require('@/assets/images/aboutus_bg.png')}
          className="absolute -z-10 h-full w-full"
          resizeMode="cover"
        />
        <Text className="rotate-[270deg] text-[50px] font-[600] text-[#fff]">关于我们</Text>
      </VStack>
      <VStack className="h-[100%] flex-1 justify-center">
        <VStack className="ml-[16.6%] w-[526px]">
          <Text className="w-[491px]text-[14px]/[28px] font-[400] text-[#000]/[0.6]">
            Realm领域地产是一家美国加州本土的豪宅开发订制公司。在加州持有执照:
            建筑设计，结构工程，建筑施工综合承包，水电空调执照。
          </Text>
          <Text className="my-[30px] w-[513px] text-[14px]/[28px] font-[400] text-[#000]/[0.6]">
            从2021年开始，领域地产开始涉足房地产建设开发。早年足迹涉及美国俄亥俄州，佛罗里达州，加利佛尼亚州。累计翻新改造，新建房屋多达百余套，积累的大量的豪宅翻新，新建和投资经验。从2025年开始，只专注于加利佛尼亚州的豪宅新建，改造，翻新以及开发业务。
          </Text>
          <Text className="w-[526px] text-[14px]/[28px] font-[400] text-[#000]/[0.6]">
            我们坚信豪宅开发是最好的房地产投资方式，并且我们打通了从豪宅开发的各个环节:
            找房源，设计，施工，政府审批，房屋出售等等环节积累了海量的经验和关系网络，这让我们成为这个领域的佼佼者。
          </Text>
        </VStack>
      </VStack>
    </View>
  );
}
