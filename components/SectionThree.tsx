import { useWindowDimensions, View } from 'react-native';

import { VStack } from './ui/vstack';

import HoverableView from '@/components/HoverableView';
import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
export default function SectionThree({ onLayout }: any) {
  const { width: sw } = useWindowDimensions();
  const handleLayout = (event: any) => {
    onLayout(event.nativeEvent.layout);
    console.log(event.nativeEvent.layout);
  };
  return (
    <View onLayout={handleLayout} style={{ height: (sw / 4) * (726 / 481) + 217, width: '100%' }}>
      <VStack style={{ height: (217 / 1920) * sw }} className="w-full items-center justify-center">
        <Image
          alt=""
          source={require('@/assets/images/serve_bg.png')}
          className="absolute -z-10 h-full w-full"
          resizeMode="cover"
        />
        <Text className="text-[50px] font-[600] leading-none text-[#fff]">服务内容</Text>
        <Text className="mt-[25px] text-[16px] font-[400] leading-none text-[#fff]">
          有任何想法随时与我们团队联系，我们将全力为您服务。
        </Text>
      </VStack>
      <HStack className="w-full flex-1">
        <HoverableView>
          <Image
            alt=""
            className="h-[100%] w-full"
            resizeMode="cover"
            source={require('@assets/images/house1.png')}
          />
          <Center className="absolute bottom-0 left-0 right-0 top-0">
            <Text className="text-[40px] font-[600] leading-none text-[#fff]">豪宅设计</Text>
            <Text className="mt-[12px] w-[337px] text-[16px] font-[400] leading-relaxed text-[#fff]">{`团队设计师来自美国顶级名校: 宾夕法尼亚大学,\n南加州大学，南加州大学建筑学院，伯克利大学等`}</Text>
          </Center>
        </HoverableView>
        <HoverableView>
          <Image
            alt=""
            className="h-[100%] w-full"
            resizeMode="cover"
            source={require('@assets/images/house2.png')}
          />
          <Center className="absolute bottom-0 left-0 right-0 top-0">
            <Text className="text-[40px] font-[600] leading-none text-[#fff]">豪宅施工</Text>
            <Text className="mt-[12px] w-[337px] text-[16px] font-[400] leading-relaxed text-[#fff]">
              通过翻新，改造，加建等方式对豪宅进行翻新，达到短期内房屋价值迅速最大化提升的结果。{' '}
            </Text>
          </Center>
        </HoverableView>
        <HoverableView>
          <Image
            alt=""
            className="h-[100%] w-full"
            resizeMode="cover"
            source={require('@assets/images/house3.png')}
          />
          <Center className="absolute bottom-0 left-0 right-0 top-0">
            <Text className="text-[40px] font-[600] leading-none text-[#fff]">豪宅订制</Text>
            <Text className="mt-[12px] w-[337px] text-[16px] font-[400] leading-relaxed text-[#fff]">{`豪宅订制一条龙服务，从设计，政府批复，到细节选材，施工工艺。无论您从空地开发还是已有豪宅改建，都能满足您的需求。`}</Text>
          </Center>
        </HoverableView>
        <HoverableView>
          <Image
            alt=""
            className="h-[100%] w-full"
            resizeMode="cover"
            source={require('@assets/images/house4.png')}
          />
          <Center className="absolute bottom-0 left-0 right-0 top-0">
            <Text className="text-[40px] font-[600] leading-none text-[#fff]">豪宅开发</Text>
            <Text className="mt-[12px] w-[337px] text-[16px] font-[400] leading-relaxed text-[#fff]">{`交个朋友，一起在加州最好的地区: 尔湾，新港，比佛利，伯克利，帕拉奥托 等地区 做豪宅地产开发`}</Text>
          </Center>
        </HoverableView>
      </HStack>
    </View>
  );
}
