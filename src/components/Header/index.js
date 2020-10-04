import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { useRecoilValue } from 'recoil';
import { cartState } from '../../store';

import { Container } from './styles';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Button from '../Button';

const Header = () => {
  const { totalQty } = useRecoilValue(cartState);

  return (
    <Container>
      <Grid>
        <Row between="xs" middle="xs">
          <Col>
            <Link to="/">
              <Logo />
            </Link>
          </Col>
          <Col>
            <Link to="/cart">
              <Button color="secondary" icon="shopping">Cart: {totalQty}</Button>
            </Link>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Header;
