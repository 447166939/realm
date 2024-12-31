import { useContext } from 'react';

import text from '@/assets/lang.json';

import { LangContext } from '@/utils/lang';

type Text = typeof text;

export const useLang = () => {
  const { lang, setLang } = useContext(LangContext);

  const t = (key: string) => text[lang as keyof Text][key as keyof Text['zh']];

  return {
    lang,
    t,
    setLang,
  };
};
