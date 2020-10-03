import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Hero from '../../components/Hero';

import { Heading } from '../../utils/typography';
import { useIsMobile } from '../../utils/theme';

import { SliderSection } from './styles';

const Home = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <Hero />
      <SliderSection>
        <Grid>
          <Row center="xs">
            <Col>
              <Heading mt={60}>Our menu</Heading>
            </Col>
          </Row>
        </Grid>
      </SliderSection>
    </>
  );
};

export default Home;
