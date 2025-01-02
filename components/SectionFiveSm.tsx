import { useState } from 'react';
import { Image, useWindowDimensions, View } from 'react-native';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { VStack } from './ui/vstack';

import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
SwiperCore.use([Pagination]); // eslint-disable-line
const intros = [
  {
    src: require('@/assets/images/intro1_sm.png'),
    name: 'Zion Huang',
    text: '毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook, Amazon作为工程师。现在作为地产投资人以及豪宅建商，持有建筑施工综合执照，水电空调执照。职业地产开发建商，为客户定制豪宅，开发豪宅保驾护航。',
  },
  {
    src: require('@/assets/images/intro1_sm.png'),
    name: 'Zion Huang',
    text: '毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook, Amazon作为工程师。现在作为地产投资人以及豪宅建商，持有建筑施工综合执照，水电空调执照。职业地产开发建商，为客户定制豪宅，开发豪宅保驾护航。',
  },
  {
    src: require('@/assets/images/intro1_sm.png'),
    name: 'Zion Huang',
    text: '毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook, Amazon作为工程师。现在作为地产投资人以及豪宅建商，持有建筑施工综合执照，水电空调执照。职业地产开发建商，为客户定制豪宅，开发豪宅保驾护航。',
  },

  {
    src: require('@/assets/images/intro1_sm.png'),
    name: 'Zion Huang',
    text: '毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook, Amazon作为工程师。现在作为地产投资人以及豪宅建商，持有建筑施工综合执照，水电空调执照。职业地产开发建商，为客户定制豪宅，开发豪宅保驾护航。',
  },

  {
    src: require('@/assets/images/intro1_sm.png'),
    name: 'Zion Huang',
    text: '毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook, Amazon作为工程师。现在作为地产投资人以及豪宅建商，持有建筑施工综合执照，水电空调执照。职业地产开发建商，为客户定制豪宅，开发豪宅保驾护航。',
  },
  {
    src: require('@/assets/images/intro1_sm.png'),
    name: 'Zion Huang',
    text: '毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook, Amazon作为工程师。现在作为地产投资人以及豪宅建商，持有建筑施工综合执照，水电空调执照。职业地产开发建商，为客户定制豪宅，开发豪宅保驾护航。',
  },
];
export default function SectionFive({ onLayout }: any) {
  const { width: sw } = useWindowDimensions();
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class=\"' + className + '\"></span>';
    },
  };
  const handleLayout = (event: any) => {
    onLayout(event.nativeEvent.layout);
    console.log(event.nativeEvent.layout);
  };
  const [swiper, setSwiper] = useState<any>(null);
  return (
    <View onLayout={handleLayout}>
      <VStack style={{ height: (216 / 750) * sw }} className="w-full items-center justify-center">
        <Image
          style={{ position: 'absolute', zIndex: -10, width: '100%', height: '100%' }}
          alt=""
          source={require('@/assets/images/intro_bg_sm.png')}
          resizeMode="cover"
        />
        <Text style={{ fontSize: (50 / 750) * sw }} className="font-[600] leading-none text-[#fff]">
          团队介绍
        </Text>
      </VStack>
      <HStack style={{ marginBottom: (112 / 750) * sw }}>
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          pagination={pagination}
          className="intro"
          loop
          controller={{ control: swiper }}
          onSwiper={(s) => {
            setSwiper(s);
          }}
          style={{ width: '100%', height: '100%' }}
          spaceBetween={10}
          //slidesPerView={1}
          onSlideChange={() => console.log('slide change')}>
          {intros.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <Center style={{ paddingTop: (43 / 750) * sw }}>
                <Image
                  style={{ width: (699 / 750) * sw, height: (400 / 750) * sw }}
                  source={item.src}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: (30 / 750) * sw,
                    color: '#000',
                    fontWeight: 400,
                    width: (642 / 750) * sw,
                    marginTop: (38 / 750) * sw,
                  }}>
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: (24 / 750) * sw,
                    lineHeight: 1.16,
                    marginTop: (17 / 750) * sw,
                    color: '#000',
                    fontWeight: 400,
                    width: (642 / 750) * sw,
                    opacity: '50%',
                    paddingBottom: (100 / 750) * sw,
                  }}>
                  {item.text}
                </Text>
              </Center>
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
      {/* <HStack className="w-full" style={{ height: (707 / 1920) * sw }}>
        <VStack className="h-full flex-1">
          <Center className="w-full" style={{ height: (561 / 1920) * sw }}>
            <Image
              alt=""
              source={require('@/assets/images/intro1.png')}
              className="h-full w-full"
              resizeMode="cover"
            />
          </Center>
          <VStack
            className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
            style={{ paddingLeft: (60 / 1920) * sw }}>
            <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
            <Text className="mt-[10px] w-[842px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
              毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
              Amazon作为软件工程师和产品经理。
            </Text>
          </VStack>
        </VStack>
        <HStack className="h-full flex-1">
          <VStack className="h-full flex-1 border-l-2 border-r-2 border-black">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro2.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
              <Text className="mt-[10px] w-[378px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
                毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
                Amazon作为软件工程师和产品经理。
              </Text>
            </VStack>
          </VStack>
          <VStack className="h-full flex-1">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro3.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
              <Text className="mt-[10px] w-[378px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
                毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
                Amazon作为软件工程师和产品经理。
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </HStack>
      <HStack className="w-full" style={{ height: (707 / 1920) * sw }}>
        <HStack className="h-full flex-1">
          <VStack className="h-full flex-1 border-r-2 border-black">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro4.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
              <Text className="mt-[10px] w-[355px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
                毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
                Amazon作为软件工程师和产品经理。
              </Text>
            </VStack>
          </VStack>
          <VStack className="h-full flex-1">
            <Center className="w-full" style={{ height: (422 / 1920) * sw }}>
              <Image
                alt=""
                source={require('@/assets/images/intro5.png')}
                className="h-full w-full"
                resizeMode="cover"
              />
            </Center>
            <VStack
              className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
              style={{ paddingLeft: (45 / 1920) * sw }}>
              <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
              <Text className="mt-[10px] w-[355px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
                毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
                Amazon作为软件工程师和产品经理。
              </Text>
            </VStack>
          </VStack>
        </HStack>
        <VStack className="h-full flex-1 border-l-2 border-black">
          <Center className="w-full" style={{ height: (561 / 1920) * sw }}>
            <Image
              alt=""
              source={require('@/assets/images/intro6.png')}
              className="h-full w-full"
              resizeMode="cover"
            />
          </Center>
          <VStack
            className="w-full flex-1 justify-center border-b-2 border-t-2 border-black"
            style={{ paddingLeft: (60 / 1920) * sw }}>
            <Text className="text-[30px] font-[400] leading-none text-[#000]">Zion Huang</Text>
            <Text className="mt-[10px] w-[842px] text-[14px] font-[400] leading-none text-[#000]/[0.5]">
              毕业于南加州大学建筑系，曾在国内外多次获得设计竞赛奖名次。毕业后尝试转型科技行业，曾就职于Facebook,
              Amazon作为软件工程师和产品经理。
            </Text>
          </VStack>
        </VStack>
      </HStack> */}
    </View>
  );
}
