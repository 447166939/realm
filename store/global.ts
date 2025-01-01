import { atom } from 'recoil';
export const screenWidthAtom = atom<number>({
  key: 'sw',
  default: 1920,
});
export const screenHeightAtom = atom<number>({
  key: 'sh',
  default: 1080,
});
export const scrollViewAtom = atom<number>({
  key: 'scrollView',
});
export const hoverIndexAtom = atom<number>({
  key: 'hoverIndex',
  default: 0,
});
export const picsAtom = atom<any[]>({
  key: 'pics',
  default: [],
});
export const groupIndexAtom = atom<number>({
  key: 'groupIndex',
  default: 0,
});
