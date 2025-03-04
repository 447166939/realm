//import { useLang } from '@/hooks/useLang';
import { Image, Pressable, useWindowDimensions } from 'react-native';

import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { useLang } from '@/hooks/useLang';
export default function Header({
  scrollRef: _s,
  aboutus: _a,
  service: _ser,
  example: _ex,
  intro: _in,
  invest: _inv,
}: any) {
  const { lang, setLang } = useLang();
  const { width: sw } = useWindowDimensions();
  const toggleLang = () => {
    if (lang === 'en') {
      setLang('zh');
    } else {
      setLang('en');
    }
  };
  /* const goToTop = () => {
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
   */
  return (
    <HStack
      style={{
        height: (80 / 750) * sw,
        paddingLeft: (41 / 750) * sw,
        paddingRight: (32 / 750) * sw,
      }}
      className="items-center justify-between">
      <Pressable>
        <Image
          style={{ width: (126 / 750) * sw, height: (35 / 750) * sw }}
          alt=""
          resizeMode="contain"
          source={require('@/assets/images/logoSm.png')}
        />
      </Pressable>
      <Pressable onPress={toggleLang} style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{ width: (18 / 750) * sw, height: (18 / 750) * sw }}
          alt=""
          resizeMode="contain"
          source={require('@assets/images/lang.png')}
        />
        <Text
          style={{
            marginLeft: (3 / 750) * sw,
            marginRight: (3 / 750) * sw,
            fontSize: (18 / 750) * sw,
          }}
          className="font-[400] text-[#000]">
          {lang === 'en' ? 'EN' : 'CN'}
        </Text>
        <Image
          style={{ width: (4 / 750) * sw, height: (4 / 750) * sw }}
          alt=""
          resizeMode="contain"
          source={require('@assets/images/lang_down.png')}
        />
      </Pressable>
      {/*  <Pressable>
        <Image
          style={{ width: (25 / 750) * sw, height: (25 / 750) * sw }}
          alt=""
          resizeMode="contain"
          source={require('@/assets/images/hamburger.png')}
        />
      </Pressable> */}
    </HStack>
  );
}
