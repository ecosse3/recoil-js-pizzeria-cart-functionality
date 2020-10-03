import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { useIsMobile } from '../../utils/theme';

import { Container, FooterText } from './styles';

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <Grid>
        <Row center="xs">
          <Col>
            <FooterText isMobile={isMobile}>Copyright {new Date().getFullYear()}. Made by Ecosse3</FooterText>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Footer;