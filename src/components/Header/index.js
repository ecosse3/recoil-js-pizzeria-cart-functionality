import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Container } from './styles';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import Button from '../Button';

const Header = () => (
  <Container>
    <Grid>
      <Row between="xs" middle="xs">
        <Col>
          <Logo />
        </Col>
        <Col>
          <Button color="secondary">Cart: 2</Button>
        </Col>
      </Row>
    </Grid>
  </Container>
);

export default Header;
