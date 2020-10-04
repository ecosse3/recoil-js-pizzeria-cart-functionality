import { useRecoilState } from 'recoil';
import { cart } from './atoms';

const cloneIndex = (items, id) => ({
  clone: items.map((product) => ({ ...product })),
  index: items.findIndex((product) => product.id === id)
});

export const useAddProduct = () => {
  const [products, setProducts] = useRecoilState(cart);

  return (item) => {
    const { clone, index } = cloneIndex(products, item.id);

    if (index !== -1) {
      clone[index].amount += 1;
      setProducts(clone);
    } else {
      setProducts([...clone, { ...item, amount: 1 }]);
    }
  };
};

export const useRemoveProduct = () => {
  const [products, setProducts] = useRecoilState(cart);

  return (product) => {
    setProducts(products.filter((item) => item.id !== product));
  };
};
