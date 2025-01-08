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
    <View onLayout={handleLayout}>
      <VStack style={{ height: (216 / 750) * sw }} className="items-center justify-center">
        <Image
          alt=""
          source={require('@/assets/images/aboutus_bg_sm.png')}
          className="absolute -z-10 h-full w-full"
          resizeMode="cover"
        />
        <Text style={{ fontSize: (50 / 750) * sw }} className="font-[600] text-[#fff]">
          关于我们
        </Text>
      </VStack>
      <VStack
        style={{
          paddingTop: (74 / 750) * sw,
          paddingLeft: (56 / 750) * sw,
          paddingBottom: (94 / 750) * sw,
        }}>
        <Text
          style={{ width: (600 / 750) * sw, fontSize: (24 / 750) * sw }}
          className="font-[400] text-[#000]/[0.6]">
          Realm领域地产是一家美国加州本土的豪宅开发订制公司。在加州持有执照:
          建筑设计，结构工程，建筑施工综合承包，水电空调执照。
        </Text>
        <Text
          style={{ width: (628 / 750) * sw, fontSize: (24 / 750) * sw, marginTop: (46 / 750) * sw }}
          className="font-[400] text-[#000]/[0.6]">
          {`从2021年开始，领域地产开始涉足房地产建设开发。早年足迹涉及美国俄亥俄州，佛罗里达州，加利佛尼亚州。累计翻新改造，新建房屋多达百余套，积累的大量的豪宅翻新，新建和投资经验。从2025年开始，只专注于加利佛尼亚州的豪宅新建，改造，翻新以及开发业务。`}
        </Text>
        <Text
          style={{ width: (642 / 750) * sw, fontSize: (24 / 750) * sw, marginTop: (43 / 750) * sw }}
          className="font-[400] text-[#000]/[0.6]">
          我们坚信豪宅开发是最好的房地产投资方式，并且我们打通了从豪宅开发的各个环节:
          找房源，设计，施工，政府审批，房屋出售等等环节积累了海量的经验和关系网络，这让我们成为这个领域的佼佼者。
        </Text>
      </VStack>
    </View>
  );
}
