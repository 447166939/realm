import React, { ReactNode, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const langProps: any = {
  lang: 'en',
  setLang: () => {},
};

export const LangContext = React.createContext(langProps);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<'zh' | 'en'>('en');
  const changeLang = (lang: 'zh' | 'en') => {
    AsyncStorage.setItem('lang', lang);
    setLang(lang);
  };
  useEffect(() => {
    const initLang = async () => {
      const ret = await AsyncStorage.getItem('lang');
      if (!ret) {
        AsyncStorage.setItem('lang', 'en');
        setLang('en');
      } else {
        setLang(ret as 'zh' | 'en');
      }
    };
    initLang();
  }, []);
  return (
    <LangContext.Provider value={{ lang, setLang: changeLang }}>{children}</LangContext.Provider>
  );
};
