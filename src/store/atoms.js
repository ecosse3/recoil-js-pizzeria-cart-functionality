import { atom } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: []
});

export const selectedProductsState = atom({
  key: 'selectedProductsState',
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
