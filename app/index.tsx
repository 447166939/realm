import { ScrollView } from 'react-native';

import Banner from '@/components/Banner';
import Header from '@/components/Header';
import SectionFive from '@/components/SectionFive';
import SectionFour from '@/components/SectionFour';
import SectionOne from '@/components/SectionOne';
import SectionSix from '@/components/SectionSix';
import SectionThree from '@/components/SectionThree';
import SectionTwo from '@/components/SectionTwo';
import { VStack } from '@/components/ui/vstack';

export default function Page() {
  return (
    <VStack className="w-full flex-1 bg-[#fff]">
      <Header></Header>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <Banner />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </ScrollView>
    </VStack>
  );
}
