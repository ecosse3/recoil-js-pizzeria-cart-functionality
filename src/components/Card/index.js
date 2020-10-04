import React from 'react';
import PropTypes from 'prop-types';

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

const Card = (props) => {
  const {
    image, title, icons, description, price, priceOld
  } = props;

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
  icons: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceOld: PropTypes.string
};

export default Card;
