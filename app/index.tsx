import { useRef, useState } from 'react';
import { ScrollView } from 'react-native';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SectionFive from '@/components/SectionFive';
import SectionFour from '@/components/SectionFour';
import SectionOne from '@/components/SectionOne';
import SectionSix from '@/components/SectionSix';
import SectionThree from '@/components/SectionThree';
import SectionTwo from '@/components/SectionTwo';
import { VStack } from '@/components/ui/vstack';

export default function Page() {
  const scrollRef = useRef<any>(null);
  const [aboutus, setAboutus] = useState<any>();
  const [service, setService] = useState<any>();
  const [example, setExample] = useState<any>();
  const [intro, setIntro] = useState<any>();
  const [invest, setInvest] = useState<any>();
  return (
    <VStack className="w-full flex-1 bg-[#fff]">
      <Header
        invest={invest}
        intro={intro}
        example={example}
        service={service}
        aboutus={aboutus}
        scrollRef={scrollRef}></Header>
      <ScrollView ref={scrollRef} style={{ flex: 1, width: '100%' }}>
        <Banner />
        <SectionOne onLayout={setAboutus} />
        <SectionTwo />
        <SectionThree onLayout={setService} />
        <SectionFour onLayout={setExample} />
        <SectionFive onLayout={setIntro} />
        <SectionSix onLayout={setInvest} />
        <Footer />
      </ScrollView>
    </VStack>
  );
}
