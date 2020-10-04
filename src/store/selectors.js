import { selector } from 'recoil';
import { cart } from './atoms';

export const cartState = selector({
  key: 'cartState',
  get: ({ get }) => {
    const totalCost = get(cart).reduce((a, b) => a + b.price * b.amount, 0);
    const totalQty = get(cart).reduce((a, b) => a + b.amount, 0);

    return {
      totalCost,
      totalQty
    };
  }
});

