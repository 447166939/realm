//import { useLang } from '@/hooks/useLang';
import { Image, Pressable, useWindowDimensions } from 'react-native';

import { HStack } from '@/components/ui/hstack';
export default function Header({
  scrollRef: _s,
  aboutus: _a,
  service: _ser,
  example: _ex,
  intro: _in,
  invest: _inv,
}: any) {
  // const { lang, setLang } = useLang();
  const { width: sw } = useWindowDimensions();
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
  const toggleLang = () => {
    if (lang === 'en') {
      setLang('zh');
    } else {
      setLang('en');
    }
  }; */
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
      <Pressable>
        <Image
          style={{ width: (25 / 750) * sw, height: (25 / 750) * sw }}
          alt=""
          resizeMode="contain"
          source={require('@/assets/images/hamburger.png')}
        />
      </Pressable>
    </HStack>
  );
}
