import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
export default function Header() {
  return (
    <HStack className="h-[74px] items-center">
      <HStack className="w-[28.69%] justify-end">
        <Image
          alt="Logo"
          className="h-[35px] w-[135px]"
          resizeMode="contain"
          source={require('@assets/images/logo.png')}
        />
      </HStack>
      <HStack className="ml-[11.3%] w-[34.7%] items-center justify-between">
        <Pressable>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">关于我们</Text>
        </Pressable>
        <Pressable>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">我们的服务</Text>
        </Pressable>
        <Pressable>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">案例展示</Text>
        </Pressable>
        <Pressable>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">团队介绍</Text>
        </Pressable>
        <Pressable>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">一起投资</Text>
        </Pressable>
      </HStack>
      <HStack className="ml-auto h-[100%] w-[12.7%] items-center">
        <Image
          alt=""
          className="h-[18px] w-[18px]"
          resizeMode="contain"
          source={require('@assets/images/lang.png')}
        />
        <Text className="mx-[3px] text-[18px] font-[400] text-[#000]">EN</Text>
        <Image
          alt=""
          className="h-[4px] w-[4px]"
          resizeMode="contain"
          source={require('@assets/images/lang_down.png')}
        />
      </HStack>
    </HStack>
  );
}
