import Banner from '@/components/Banner';
import Header from '@/components/Header';
import { VStack } from '@/components/ui/vstack';

export default function Page() {
  return (
    <VStack>
      <Header></Header>
      <VStack className="flex-1">
        <Banner />
      </VStack>
    </VStack>
  );
}
