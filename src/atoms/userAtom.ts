import { atom } from 'recoil';

export interface IUser {
  email: string;
}

export const isLoggedInAtom = atom<boolean>({
  key: 'isLoggedInAtom',
  default: false,
});

export const userAtom = atom<IUser>({
  key: 'userAtom',
  default: {
    email: 'dolls_love@naver.com',
  },
});
