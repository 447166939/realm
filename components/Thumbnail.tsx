import { useWindowDimensions } from 'react-native';

import { Center } from './ui/center';

import { Image } from '@/components/ui/image';

export default function Thumbnail({ source }: any) {
  const { width: sw } = useWindowDimensions();

  return (
    <Center style={{ width: (169 / 1920) * sw, height: (107 / 1920) * sw }}>
      <Image className="h-full w-full rounded-[10px]" alt="" source={source} resizeMode="cover" />
    </Center>
  );
}
