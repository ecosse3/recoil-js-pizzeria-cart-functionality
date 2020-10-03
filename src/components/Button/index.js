import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { theme, useIsMobile } from '../../utils/theme';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

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
