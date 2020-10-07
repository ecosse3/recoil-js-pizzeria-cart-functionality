import React from 'react';
import PropTypes from 'prop-types';

import useSound from 'use-sound';
import { currency } from '../../utils/consts';
import addToCartSfx from '../../assets/sfx/add-to-cart.mp3';

import {
  Bottom,
  ButtonContainer,
  CardContentWrapper,
  CardWrapper,
  Description,
  Icon,
  Image,
  Info,
  OrderButton,
  Price,
  PriceOld,
  Title,
  Top,
  TopData,
  IconsWrapper
} from './styles';

import { useAddProduct } from '../../store';
import { useSnackbar } from '../../hooks/useSnackbar';

const Card = (props) => {
  const {
    id, image, title, icons, description, price, priceOld
  } = props;

  const addProduct = useAddProduct();
  const { openSnackBar } = useSnackbar();
  const [playSound] = useSound(addToCartSfx);

  const showSnackbarHandler = () => {
    openSnackBar(`Added ${title} to cart...`);
  };

  return (
    <CardWrapper>
      <Image src={image} />
      <Info onClick={() => console.log('click')} />
      <CardContentWrapper>
        <Top>
          <TopData>
            <Title>{title}</Title>
            <IconsWrapper>
              {icons?.map(icon => <Icon icon={icon} />)}
            </IconsWrapper>
          </TopData>
          <Description>{description}</Description>
        </Top>
        <Bottom>
          <Price>{price.toFixed(2)} {currency}</Price>
          {priceOld && (
          <PriceOld>{priceOld.toFixed(2)} {currency}</PriceOld>
          )}
          <ButtonContainer onClick={() => { addProduct({ id, name: title, price }); playSound(); showSnackbarHandler(); }}>
            <OrderButton>ORDER</OrderButton>
          </ButtonContainer>
        </Bottom>
      </CardContentWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceOld: PropTypes.number
};

export default Card;
