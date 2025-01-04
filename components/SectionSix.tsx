import { useWindowDimensions, View } from 'react-native';

import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
export default function SectionSix({ onLayout }: any) {
  const { width: sw } = useWindowDimensions();
  const handleLayout = (event: any) => {
    onLayout(event.nativeEvent.layout);
  };
  return (
    <View
      onLayout={handleLayout}
      style={{ height: (726 / 1920) * sw, flexDirection: 'row', width: '100%' }}>
      <VStack className="h-full flex-1 items-center justify-center">
        <VStack className="w-[400px]">
          <Text className="text-[50px] font-[600] leading-none text-[#000]">保持联系</Text>
          <Text className="mt-[25px] text-[16px] font-[400] leading-none text-[#000]">
            有任何想法随时与我们团队联系，我们将全力为您服务。
          </Text>
          <HStack className="mt-[33px] items-center">
            <Image
              className="mr-[15px] h-[20px] w-[20px]"
              alt=""
              resizeMode="contain"
              source={require('@/assets/images/icon1.png')}
            />
            <Text className="text-[14px] font-[400] leading-none text-[#000]/[0.6]">
              jianseneasy@gmail.com
            </Text>
          </HStack>
          <HStack className="mt-[25px] items-center">
            <Image
              className="mr-[15px] h-[20px] w-[20px]"
              alt=""
              resizeMode="contain"
              source={require('@/assets/images/icon2.png')}
            />
            <Text className="text-[14px] font-[400] leading-none text-[#000]/[0.6]">
              518-666-7778
            </Text>
          </HStack>
          <HStack className="mt-[25px] items-center">
            <Image
              className="mr-[15px] h-[20px] w-[20px]"
              alt=""
              resizeMode="contain"
              source={require('@/assets/images/icon3.png')}
            />
            <Text className="leaing-none text-[14px] font-[400] text-[#000]/[0.6]">
              時間 9:00 AM - 6 PM PT 周一到周五
            </Text>
          </HStack>
          <HStack className="mt-[25px] items-center">
            <Image
              className="mr-[15px] h-[20px] w-[20px]"
              alt=""
              resizeMode="contain"
              source={require('@/assets/images/icon4.png')}
            />
            <Text className="text-[14px] font-[400] leading-none text-[#000]/[0.6]">
              8326 Valley Blvd, Unit A Rosemead, CA 91770, Los Angeles
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <VStack style={{ width: (768 / 1920) * sw }} className="h-full items-center justify-center">
        <Image
          className="absolute -z-10 h-full w-full"
          alt=""
          resizeMode="cover"
          source={require('@/assets/images/form_bg.png')}
        />
        <VStack className="h-[472px] w-[423px]">
          <Text className="text-[18px] font-[400] leading-none text-[#fff]">
            如您有业务 欢迎与我们联系
          </Text>
          <Text className="mt-[32px] text-[14px] font-[400] leading-none text-[#fff]/[0.6]">
            姓名
          </Text>
          <HStack className="mt-[10px]">
            <Input className="h-[50px] flex-1 bg-white" variant="outline">
              <InputField placeholder="名" />
            </Input>
            <Input className="ml-[23px] h-[50px] flex-1 bg-white" variant="outline">
              <InputField placeholder="姓" />
            </Input>
          </HStack>
          <Text className="mt-[25px] text-[14px] font-[400] leading-none text-[#fff]/[0.6]">
            邮箱
          </Text>
          <Input variant="outline" className="mt-[7px] h-[50px] bg-white">
            <InputField placeholder="邮箱地址" />
          </Input>
          <Text className="mt-[25px] text-[14px] font-[400] leading-none text-[#fff]/[0.6]">
            电话
          </Text>
          <Input className="mt-[7px] h-[50px] bg-white">
            <InputField placeholder="电话号码" />
          </Input>
          <Button
            variant="outline"
            className="mt-[70px] h-[70px] w-[181px] border-2 border-white bg-[#010101]">
            <ButtonText className="text-[20px] font-[400] text-[#fff]">提交</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </View>
  );
}
