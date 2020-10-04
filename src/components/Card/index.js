import React from 'react';
import PropTypes from 'prop-types';
import { currency } from '../../utils/consts';

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

const Card = (props) => {
  const {
    id, image, title, icons, description, price, priceOld
  } = props;

  const addItem = useAddProduct();

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
          <ButtonContainer onClick={() => addItem({ id, name: title, price })}>
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
