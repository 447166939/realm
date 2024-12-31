import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { useLang } from '@/hooks/useLang';
export default function Header({ scrollRef, aboutus, service, example, intro, invest }: any) {
  const { lang, setLang } = useLang();
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
      <HStack className="ml-[11.3%] w-[34.7%] items-center justify-between">
        <Pressable onPress={goToAboutus}>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">关于我们</Text>
        </Pressable>
        <Pressable onPress={goToService}>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">我们的服务</Text>
        </Pressable>
        <Pressable onPress={goToExample}>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">案例展示</Text>
        </Pressable>
        <Pressable onPress={goToIntro}>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">团队介绍</Text>
        </Pressable>
        <Pressable onPress={goToInvest}>
          <Text className="text-[16px] font-[400] text-[#000]/[0.5]">一起投资</Text>
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
