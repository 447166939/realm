import { useState } from 'react';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

import Banner from '@/components/Banner';
import BannerSm from '@/components/BannerSm';
import Footer from '@/components/Footer';
import FooterSm from '@/components/FooterSm';
import Header from '@/components/Header';
import HeaderSm from '@/components/Headersm';
import SectionFive from '@/components/SectionFive';
import SectionFiveSm from '@/components/SectionFiveSm';
import SectionFour from '@/components/SectionFour';
import SectionFourSm from '@/components/SectionFourSm';
import SectionOne from '@/components/SectionOne';
import SectionOneSm from '@/components/SectionOneSm';
import SectionSix from '@/components/SectionSix';
import SectionSixSm from '@/components/SectionSixSm';
import SectionThree from '@/components/SectionThree';
import SectionThreeSm from '@/components/SectionThreeSm';
import SectionTwo from '@/components/SectionTwo';
import SectionTwoSm from '@/components/SectionTwoSm';
import { useMediaQuery } from '@/components/ui/utils/use-media-query';
import { VStack } from '@/components/ui/vstack';

export default function Page() {
  const [_isMobile, _isTablet, _isSmallScreen, isLargeScreen] = useMediaQuery([
    {
      maxWidth: 480,
    },
    {
      minWidth: 481,
      maxWidth: 768,
    },
    {
      minWidth: 769,
      maxWidth: 1440,
    },
    {
      minWidth: 1441,
    },
  ]);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const [aboutus, setAboutus] = useState<any>();
  const [service, setService] = useState<any>();
  const [example, setExample] = useState<any>();
  const [intro, setIntro] = useState<any>();
  const [invest, setInvest] = useState<any>();
  return (
    <VStack className="w-full flex-1 bg-[#fff]">
      {isLargeScreen ? (
        <Header
          invest={invest}
          intro={intro}
          example={example}
          service={service}
          aboutus={aboutus}
          scrollRef={scrollRef}></Header>
      ) : (
        <HeaderSm
          invest={invest}
          intro={intro}
          example={example}
          service={service}
          aboutus={aboutus}
          scrollRef={scrollRef}></HeaderSm>
      )}
      <Animated.ScrollView ref={scrollRef} style={{ flex: 1, width: '100%' }}>
        {isLargeScreen ? <Banner /> : <BannerSm />}
        {isLargeScreen ? (
          <SectionOne onLayout={setAboutus} />
        ) : (
          <SectionOneSm onLayout={setAboutus} />
        )}
        {isLargeScreen ? <SectionTwo /> : <SectionTwoSm />}
        {isLargeScreen ? (
          <SectionThree onLayout={setService} />
        ) : (
          <SectionThreeSm onLayout={setService} />
        )}
        {isLargeScreen ? (
          <SectionFour onLayout={setExample} />
        ) : (
          <SectionFourSm onLayout={setExample} />
        )}
        {isLargeScreen ? (
          <SectionFive onLayout={setIntro} />
        ) : (
          <SectionFiveSm onLayout={setIntro} />
        )}
        {isLargeScreen ? (
          <SectionSix onLayout={setInvest} />
        ) : (
          <SectionSixSm onLayout={setInvest} />
        )}
        {isLargeScreen ? <Footer scrollRef={scrollRef} /> : <FooterSm scrollRef={scrollRef} />}
      </Animated.ScrollView>
    </VStack>
  );
}
