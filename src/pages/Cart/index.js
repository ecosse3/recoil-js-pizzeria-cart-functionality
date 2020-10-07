import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { useRecoilValue } from 'recoil';
import { Container } from './styles';

import Hero from '../../components/Hero';
import { Heading } from '../../utils/typography';
import CartTable from '../../components/CartTable';
import { cartState, cartSelector } from '../../store';

const Cart = () => {
  const cartItems = useRecoilValue(cartState);
  const { totalCost, totalQty } = useRecoilValue(cartSelector);

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
            <CartTable products={cartItems} totalCost={totalCost} totalQty={totalQty} />
          </Row>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
