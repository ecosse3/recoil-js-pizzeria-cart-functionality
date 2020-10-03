import React from 'react';

import { ButtonContainer, ShoppingCartIcon } from './styles';

const Button = (props) => {
  const {
    color, width, height, children, icon
  } = props;

  return (
    <ButtonContainer
      color={color}
      width={width}
      height={height}
    >
      {icon === 'shopping' && <ShoppingCartIcon />}
      {children}
    </ButtonContainer>
  );
};

export default Button;
