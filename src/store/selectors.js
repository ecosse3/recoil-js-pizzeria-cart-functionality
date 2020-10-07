import { selector } from 'recoil';
import { cartState } from './atoms';

export const cartSelector = selector({
  key: 'cartSelector',
  get: ({ get }) => {
    const totalCost = get(cartState).reduce((a, b) => a + b.price * b.amount, 0);
    const totalQty = get(cartState).reduce((a, b) => a + b.amount, 0);

    return {
      totalCost,
      totalQty
    };
  }
});

