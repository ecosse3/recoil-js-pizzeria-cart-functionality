import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { useIsMobile } from '@theme';
import { useRecoilValue } from 'recoil';
import { cartState, cartSelector } from '@store';

import Hero from '@/components/Hero';
import CartTable from '@/components/CartTable';
import { Heading } from '@/utils/typography';
import { Container } from './styles';

const Cart = () => {
  const cartItems = useRecoilValue(cartState);
  const { totalCost, totalQty } = useRecoilValue(cartSelector);

  const isMobile = useIsMobile();

  return (
    <>
      <Hero />
      <Container isMobile={isMobile}>
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
