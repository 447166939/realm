import { Image, useWindowDimensions, View } from 'react-native';

import { VStack } from './ui/vstack';

import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
export default function SectionThree({ onLayout }: any) {
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
          style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%' }}
          source={require('@/assets/images/serve_bg_sm.png')}
          resizeMode="cover"
        />
        <Text style={{ fontSize: (28 / 750) * sw }} className="font-[600] leading-none text-[#fff]">
          服务内容
        </Text>
      </VStack>

      <Center style={{ height: (1130 / 750) * sw }}>
        <Image
          alt=""
          style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%' }}
          source={require('@/assets/images/house1_sm.png')}
          resizeMode="cover"
        />
        <Text style={{ fontSize: (62 / 750) * sw }} className="font-[600] leading-none text-[#fff]">
          豪宅设计
        </Text>
        <Text
          style={{ width: (572 / 750) * sw, marginTop: (52 / 750) * sw, fontSize: (26 / 750) * sw }}
          className="font-[400] leading-relaxed text-[#fff]">{`团队设计师来自美国顶级名校: 宾夕法尼亚大学， 南加州大学，南加州大学建筑学院，伯克利大学等`}</Text>
      </Center>
      <Center style={{ height: (1130 / 750) * sw }}>
        <Image
          alt=""
          style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%' }}
          source={require('@/assets/images/house2_sm.png')}
          resizeMode="cover"
        />
        <Text style={{ fontSize: (62 / 750) * sw }} className="font-[600] leading-none text-[#fff]">
          豪宅施工
        </Text>
        <Text
          style={{ width: (572 / 750) * sw, marginTop: (52 / 750) * sw, fontSize: (26 / 750) * sw }}
          className="font-[400] leading-relaxed text-[#fff]">{`通过翻新，改造，加建等方式对豪宅进行翻新，达到短期内房屋价值迅速最大化提升的结果。 `}</Text>
      </Center>
      <Center style={{ height: (1130 / 750) * sw }}>
        <Image
          alt=""
          style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%' }}
          source={require('@/assets/images/house3_sm.png')}
          resizeMode="cover"
        />
        <Text style={{ fontSize: (62 / 750) * sw }} className="font-[600] leading-none text-[#fff]">
          豪宅订制
        </Text>
        <Text
          style={{ width: (572 / 750) * sw, marginTop: (52 / 750) * sw, fontSize: (26 / 750) * sw }}
          className="font-[400] leading-relaxed text-[#fff]">{`豪宅订制一条龙服务，从设计，政府批复，到细节选材，施工工艺。无论您从空地开发还是已有豪宅改建，都能满足您的需求。`}</Text>
      </Center>
      <Center style={{ height: (1130 / 750) * sw }}>
        <Image
          alt=""
          style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%' }}
          source={require('@/assets/images/house4_sm.png')}
          resizeMode="cover"
        />
        <Text style={{ fontSize: (62 / 750) * sw }} className="font-[600] leading-none text-[#fff]">
          豪宅开发
        </Text>
        <Text
          style={{ width: (572 / 750) * sw, marginTop: (52 / 750) * sw, fontSize: (26 / 750) * sw }}
          className="font-[400] leading-relaxed text-[#fff]">{`交个朋友，一起在加州最好的地区: 尔湾，新港，比佛利，伯克利，帕拉奥托 等地区 做豪宅地产开发`}</Text>
      </Center>
    </View>
  );
}
