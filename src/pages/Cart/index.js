import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Container } from './styles';

import Hero from '../../components/Hero';
import { Heading } from '../../utils/typography';
import CartTable from '../../components/CartTable';

const Cart = () => (
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
          <CartTable />
        </Row>
      </Grid>
    </Container>
  </>
);

export default Cart;
