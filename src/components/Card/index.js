import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useSound from 'use-sound';
import { useIsMobile } from '@theme';
import { useAddProduct } from '@store';
import { useSnackbar } from '@/hooks/useSnackbar';
import { currency } from '@/utils/consts';
import addToCartSfx from '@/assets/sfx/add-to-cart.mp3';
import popDownSfx from '@/assets/sfx/pop-down.mp3';
import popUpOnSfx from '@/assets/sfx/pop-up-on.mp3';
import popUpOffSfx from '@/assets/sfx/pop-up-off.mp3';

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
  const [playAddToCart] = useSound(addToCartSfx, { volume: 0.15 });
  const [playActive] = useSound(popDownSfx, { volume: 0.25 });
  const [playOn] = useSound(popUpOnSfx, { volume: 0.25 });
  const [playOff] = useSound(popUpOffSfx, { volume: 0.25 });

  const isMobile = useIsMobile();

  const showSnackbarHandler = () => {
    openSnackBar(`Added ${title} to cart...`);
  };

  return (
    <CardWrapper isMobile={isMobile}>
      {toggleInfoBox && (
        <InfoBox isMobile={isMobile}>
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
      <Info onClick={() => { setToggleInfoBox(toggle => !toggle); toggleInfoBox ? playOff() : playOn(); }} onMouseDown={() => playActive()} />
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
          <Price isMobile={isMobile}>{price.toFixed(2)} {currency}</Price>
          {priceOld && (
          <PriceOld isMobile={isMobile}>{priceOld.toFixed(2)} {currency}</PriceOld>
          )}
          <ButtonContainer onClick={() => { addProduct({ id, name: title, price }); playAddToCart(); showSnackbarHandler(); }}>
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
