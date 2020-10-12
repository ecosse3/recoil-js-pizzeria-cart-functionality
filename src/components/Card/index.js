import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useSound from 'use-sound';
import { useAddProduct } from '@store';
import { useSnackbar } from '@/hooks/useSnackbar';
import { currency } from '@/utils/consts';
import addToCartSfx from '@/assets/sfx/add-to-cart.mp3';

import {
  Bottom,
  ButtonContainer,
  CardContentWrapper,
  CardWrapper,
  Description,
  Icon,
  IconsWrapper,
  Image,
  Info,
  InfoBox,
  InfoBoxContainer,
  InfoBoxTitle,
  InfoBoxTitleContainer,
  Ingredient,
  OrderButton,
  Price,
  PriceOld,
  Title,
  Top,
  TopData
} from './styles';

const Card = (props) => {
  const {
    description,
    icons,
    id,
    image,
    ingredients,
    price,
    priceOld,
    title
  } = props;

  const [toggleInfoBox, setToggleInfoBox] = useState(false);
  const addProduct = useAddProduct();
  const { openSnackBar } = useSnackbar();
  const [playSound] = useSound(addToCartSfx, { volume: 0.15 });

  const showSnackbarHandler = () => {
    openSnackBar(`Added ${title} to cart...`);
  };

  return (
    <CardWrapper>
      {toggleInfoBox && (
        <InfoBox>
          <InfoBoxTitleContainer>
            <InfoBoxTitle>Ingredients:</InfoBoxTitle>
          </InfoBoxTitleContainer>
          <InfoBoxContainer>
            {ingredients?.map(ingredient => (
              <Ingredient>{ingredient}</Ingredient>
            ))}
          </InfoBoxContainer>
        </InfoBox>
      )}
      <Image src={image} />
      <Info onClick={() => setToggleInfoBox(toggle => !toggle)} />
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
  description: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number.isRequired,
  priceOld: PropTypes.number,
  title: PropTypes.string.isRequired
};

export default Card;
