import { useRecoilState } from 'recoil';
import { cart } from './atoms';

const cloneIndex = (items, id) => ({
  clone: items.map((product) => ({ ...product })),
  index: items.findIndex((product) => product.id === id)
});

export const useAddProduct = () => {
  const [products, setProducts] = useRecoilState(cart);

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
  const [products, setProducts] = useRecoilState(cart);

  return (productId) => {
    setProducts(products.filter((item) => item.id !== productId));
  };
};

export const useRemoveMultipleProducts = () => {
  const [products, setProducts] = useRecoilState(cart);

  return (productsToRemove) => {
    let newProducts = [...products];

    productsToRemove.forEach(id => {
      newProducts = newProducts.filter((item) => item.id !== id);
    });

    setProducts(newProducts);
  };
};

export const useDecreaseProduct = () => {
  const [products, setProducts] = useRecoilState(cart);
  const removeProduct = useRemoveProduct();

  return (product) => {
    const { clone, index } = cloneIndex(products, product.id);

    if (clone[index].amount === 1) {
      removeProduct(product.id);
    } else {
      clone[index].amount -= 1;
      setProducts(clone);
    }
  };
};
