import React from 'react';
import PropTypes from 'prop-types';

import {
  Bottom,
  ButtonContainer,
  CardContentWrapper,
  CardWrapper,
  Description,
  Image,
  Info,
  OrderButton,
  Price,
  PriceOld,
  Title,
  Top
} from './styles';

const Card = (props) => {
  const {
    image, title, icons, description, price, priceOld, ingredients
  } = props;

  return (
    <CardWrapper>
      <Image src={image} />
      <Info onClick={() => console.log('click')} />
      <CardContentWrapper>
        <Top>
          <Title>{title}</Title>
          {/* {icons?.forEach(icon => <Icon />)} */}
          <Description>{description}</Description>
        </Top>
        <Bottom>
          <Price>{price}</Price>
          {priceOld && (
          <PriceOld>{priceOld}</PriceOld>
          )}
          <ButtonContainer>
            <OrderButton>ORDER</OrderButton>
          </ButtonContainer>
        </Bottom>
      </CardContentWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceOld: PropTypes.string,
  ingredients: PropTypes.string.isRequired
};

export default Card;
