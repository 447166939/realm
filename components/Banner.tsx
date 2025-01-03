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
const videoSource = require('@/assets/images/banner.mp4');
SwiperCore.use([Autoplay]); // eslint-disable-line
export default function Banner() {
  const player: any = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  const { height: sh } = useWindowDimensions();
  // const [showModal, setShowModal] = useState(false);
  // const swiper = useRef<any>(null);
  //const [idx, setIdx] = useState(0);
  // const handlePress = (index: number) => {
  //   setShowModal(true);
  //   swiper?.current?.scrollTo(index);
  // };
  useEffect(() => {
    if (!isPlaying) {
      player.play();
    }
  }, [player, isPlaying]);

  return (
    <HStack
      style={{ height: 0.82 * sh }}
      //onPress={() => handlePress(0)}
      className="flex-row items-center justify-center">
      <VideoView
        contentFit="cover"
        style={{ position: 'absolute', height: '100%', width: '100%' }}
        player={player}
        nativeControls={false}
      />

      {/* <Image
        alt=""
        className="absolute h-[100%] w-full"
        resizeMode="cover"
        source={require('@assets/images/BlackHole_Lensing.gif')}
      /> */}
      <Center className="w-[687px] flex-col">
        <HStack className="w-[400px]">
          <Text className="text-center text-[100px] font-[600] leading-none text-[#fff]">领域</Text>
          <VStack className="absolute left-[100px] h-full w-full overflow-hidden">
            <Swiper
              autoplay={{ delay: 3000 }}
              loop
              spaceBetween={50}
              direction="vertical"
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>
                <Text className="text-[100px] font-[600] leading-none text-[#fff]">地产</Text>
              </SwiperSlide>
              <SwiperSlide>
                <Text className="text-[100px] font-[600] leading-none text-[#fff]">建筑</Text>
              </SwiperSlide>
            </Swiper>
          </VStack>
        </HStack>
        <Text className="mt-[43px] text-center text-[24px] font-[400] text-[#fff]">{`美国加州 豪宅设计，豪宅施工，豪宅订制，豪宅开发\n执照含: 建筑设计，结构工程，建筑施工综合承包，豪宅地产经纪`}</Text>
      </Center>
      {/*  <BigVideo
        ref={swiper}
        index={idx}
        setIdx={setIdx}
        videoArr={videoArr}
        showModal={showModal}
        setShowModal={setShowModal}
      /> */}
    </HStack>
  );
}
