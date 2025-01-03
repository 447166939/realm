import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Center } from './ui/center/index.web';
import { HStack } from './ui/hstack/index.web';
import { VStack } from './ui/vstack/index.web';

import { Text } from '@/components/ui/text';
const videoSource = require('@/assets/images/banner_sm.mp4');
SwiperCore.use([Autoplay]); // eslint-disable-line
export default function Banner() {
  const player: any = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });
  const { width: sw } = useWindowDimensions();
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  useEffect(() => {
    if (!isPlaying) {
      player.play();
    }
  }, [player, isPlaying]);

  return (
    <HStack
      style={{ height: (1200 / 750) * sw }}
      className="flex-row items-center justify-center bg-black">
      <VideoView
        contentFit="cover"
        style={{ position: 'absolute', height: '100%', width: '100%' }}
        player={player}
        nativeControls={false}
      />
      <Center style={{ width: (477 / 750) * sw }} className="flex-col">
        <HStack style={{ width: (400 / 750) * sw }}>
          <Text
            style={{ fontSize: (100 / 750) * sw }}
            className="text-center font-[600] leading-none text-[#fff]">
            领域
          </Text>
          <VStack
            style={{ left: (100 / 750) * sw }}
            className="absolute h-full w-full overflow-hidden">
            <Swiper
              autoplay={{ delay: 500 }}
              loop
              spaceBetween={50}
              direction="vertical"
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>
                <Text
                  style={{ fontSize: (100 / 750) * sw }}
                  className="font-[600] leading-none text-[#fff]">
                  地产
                </Text>
              </SwiperSlide>
              <SwiperSlide>
                <Text
                  style={{ fontSize: (100 / 750) * sw }}
                  className="font-[600] leading-none text-[#fff]">
                  建筑
                </Text>
              </SwiperSlide>
            </Swiper>
          </VStack>
        </HStack>
        <Text
          style={{ fontSize: (30 / 750) * sw, marginTop: (43 / 750) * sw, lineHeight: 1.2 }}
          className="text-center font-[400] text-[#fff]">{`美国加州 豪宅设计，豪宅施工，豪宅订制，豪宅开发\n执照含: 建筑设计，结构工程，建筑施工综合承包，豪宅地产经纪`}</Text>
      </Center>
    </HStack>
  );
}
