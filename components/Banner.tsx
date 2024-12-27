import { useEffect, useRef, useState } from 'react';

import { Center } from './ui/center';
import BigVideo from './BigVideo';

import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
const videoSource = require('@/assets/images/banner.mp4');
const videoArr = [
  { video: require('@/assets/images/banner.mp4'), thumbnail: require('@/assets/images/pic1.png') },
];
export default function Banner() {
  const player: any = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
  const [showModal, setShowModal] = useState(false);
  const swiper = useRef<any>(null);
  const [idx, setIdx] = useState(0);
  const handlePress = (index: number) => {
    setShowModal(true);
    swiper?.current?.scrollTo(index);
  };
  useEffect(() => {
    if (!isPlaying) {
      player.play();
    }
  }, [player, isPlaying]);
  return (
    <Pressable
      onPress={() => handlePress(0)}
      className="h-[650px] flex-row items-center justify-center">
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
        <Text className="text-center text-[100px] font-[600] text-[#fff]">领域地产</Text>
        <Text className="text-center text-[24px] font-[400] text-[#fff]">{`美国加州 豪宅设计，豪宅施工，豪宅订制，豪宅开发\n执照含: 建筑设计，结构工程，建筑施工综合承包，豪宅地产经纪`}</Text>
      </Center>
      <BigVideo
        ref={swiper}
        index={idx}
        setIdx={setIdx}
        videoArr={videoArr}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Pressable>
  );
}
