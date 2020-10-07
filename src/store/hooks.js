import { useRecoilState } from 'recoil';
import useSound from 'use-sound';
import { cartState, selectedProductsState } from './atoms';
import trashSfx from '../assets/sfx/trash.mp3';

// Utility functions

const cloneIndex = (items, id) => ({
  clone: items.map((product) => ({ ...product })),
  index: items.findIndex((product) => product.id === id)
});

// Hooks

export const useAddProduct = () => {
  const [products, setProducts] = useRecoilState(cartState);

  return (product) => {
    const { clone, index } = cloneIndex(products, product.id);

    if (index !== -1) {
      clone[index].amount += 1;
      setProducts(clone);
    } else {
      setProducts([...clone, { ...product, amount: 1 }]);
    }
  };
};

export const useRemoveProduct = () => {
  const [products, setProducts] = useRecoilState(cartState);

  return (productId) => {
    setProducts(products.filter((item) => item.id !== productId));
  };
};

export const useRemoveMultipleProducts = () => {
  const [products, setProducts] = useRecoilState(cartState);

  return (productsToRemove) => {
    let newProducts = [...products];

    productsToRemove.forEach(id => {
      newProducts = newProducts.filter((item) => item.id !== id);
    });

    setProducts(newProducts);
  };
};

export const useDecreaseProduct = () => {
  const [products, setProducts] = useRecoilState(cartState);
  const [selected, setSelected] = useRecoilState(selectedProductsState);
  const removeProduct = useRemoveProduct();
  const [playRemoveSound] = useSound(trashSfx, { volume: 0.25 });

  return (product) => {
    const { clone, index } = cloneIndex(products, product.id);

    if (clone[index].amount === 1) {
      playRemoveSound();
      removeProduct(product.id);

      if (selected.indexOf(product.id) !== -1) {
        setSelected(selected.filter((productId) => productId !== product.id));
      }
    } else {
      clone[index].amount -= 1;
      setProducts(clone);
    }
  };
};
