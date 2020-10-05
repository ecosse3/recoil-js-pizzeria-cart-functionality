import { atom } from 'recoil';

export const cart = atom({
  key: 'cart',
  default: []
});

export const snackbarMessage = atom({
  key: 'snackbarMessage',
  default: null
});

export const snackbarIsActive = atom({
  key: 'snackbarIsActive',
  default: false
});
