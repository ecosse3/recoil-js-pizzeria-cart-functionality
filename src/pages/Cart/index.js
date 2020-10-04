import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { useRecoilValue } from 'recoil';
import { Container } from './styles';

import Hero from '../../components/Hero';
import { Heading } from '../../utils/typography';
import CartTable from '../../components/CartTable';
import { cart, cartState } from '../../store';

const Cart = () => {
  const cartItems = useRecoilValue(cart);
  const { totalCost } = useRecoilValue(cartState);

  return (
    <>
      <Hero />
      <Container>
        <Grid>
          <Row center="xs">
            <Col>
              <Heading mb={60}>Cart</Heading>
            </Col>
          </Row>
          <Row>
            <CartTable products={cartItems} total={totalCost} />
          </Row>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
