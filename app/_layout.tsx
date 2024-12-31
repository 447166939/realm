import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { RecoilRoot, useRecoilState } from 'recoil';

import 'react-native-reanimated';

import '@/global.css';
import 'swiper/swiper-bundle.min.css';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { useColorScheme } from '@/hooks/useColorScheme';
import { screenHeightAtom, screenWidthAtom } from '@/store/global';
import { LangProvider } from '@/utils/lang';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
function Layout() {
  const colorScheme = useColorScheme();
  const { width, height } = useWindowDimensions();
  const [_, setSw] = useRecoilState(screenWidthAtom);
  const [_h, setSh] = useRecoilState(screenHeightAtom);
  useEffect(() => {
    setSw(width);
    setSh(height);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
export default function RootLayout() {
  return (
    <LangProvider>
      <RecoilRoot>
        <Layout />
      </RecoilRoot>
    </LangProvider>
  );
}
