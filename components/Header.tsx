import { useRecoilValue } from 'recoil';

import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { useLang } from '@/hooks/useLang';
import { headerIndexAtom } from '@/store/global';
export default function Header({ scrollRef, aboutus, service, example, intro, invest }: any) {
  const { lang, setLang } = useLang();
  const idx = useRecoilValue(headerIndexAtom);
  const goToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };
  const goToAboutus = () => {
    scrollRef.current?.scrollTo({ y: aboutus?.y, animated: true });
  };
  const goToService = () => {
    scrollRef.current?.scrollTo({ y: service?.y, animated: true });
  };
  const goToExample = () => {
    scrollRef.current?.scrollTo({ y: example?.y, animated: true });
  };
  const goToIntro = () => {
    scrollRef.current?.scrollTo({ y: intro?.y, animated: true });
  };
  const goToInvest = () => {
    scrollRef.current?.scrollTo({ y: invest?.y, animated: true });
  };
  const toggleLang = () => {
    if (lang === 'en') {
      setLang('zh');
    } else {
      setLang('en');
    }
  };
  return (
    <HStack className="h-[74px] items-center">
      <HStack className="w-[28.69%] justify-end">
        <Pressable onPress={goToTop}>
          <Image
            alt="Logo"
            className="h-[35px] w-[135px]"
            resizeMode="contain"
            source={require('@assets/images/logo.png')}
          />
        </Pressable>
      </HStack>
      <HStack className="ml-[11.3%] h-full w-[34.7%] justify-between">
        <Pressable className="justify-center" onPress={goToAboutus}>
          {idx === 0 ? (
            <HStack className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#323FEA]"></HStack>
          ) : null}
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">关于我们</Text>
        </Pressable>
        <Pressable className="justify-center" onPress={goToService}>
          {idx === 1 ? (
            <HStack className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#323FEA]"></HStack>
          ) : null}
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">服务内容</Text>
        </Pressable>
        <Pressable className="justify-center" onPress={goToExample}>
          {idx === 2 ? (
            <HStack className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#323FEA]"></HStack>
          ) : null}
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">案例展示</Text>
        </Pressable>
        <Pressable className="justify-center" onPress={goToIntro}>
          {idx === 3 ? (
            <HStack className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#323FEA]"></HStack>
          ) : null}
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">团队介绍</Text>
        </Pressable>
        <Pressable className="justify-center" onPress={goToInvest}>
          {idx === 4 ? (
            <HStack className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#323FEA]"></HStack>
          ) : null}
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">联系我们</Text>
        </Pressable>
      </HStack>
      <Pressable onPress={toggleLang} className="ml-auto h-[100%] w-[12.7%] flex-row items-center">
        <Image
          alt=""
          className="h-[18px] w-[18px]"
          resizeMode="contain"
          source={require('@assets/images/lang.png')}
        />
        <Text className="mx-[3px] text-[18px] font-[400] text-[#000]">
          {lang === 'en' ? 'EN' : 'CN'}
        </Text>
        <Image
          alt=""
          className="h-[4px] w-[4px]"
          resizeMode="contain"
          source={require('@assets/images/lang_down.png')}
        />
      </Pressable>
    </HStack>
  );
}
