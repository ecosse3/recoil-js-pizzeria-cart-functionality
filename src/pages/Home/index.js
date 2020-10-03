import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import Hero from '../../components/Hero';
import Card from '../../components/Card';

import Image1 from '../../assets/images/card1.png';

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
              <Heading mb={60}>Our menu</Heading>
            </Col>
          </Row>
          <Row center="xs">
            <Col>
              <Card image={Image1} title="Pepperoni Pizza" description="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust." price="21,99 zł" priceOld="26,99 zł" />
            </Col>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Grid>
      </SliderSection>
    </>
  );
};

export default Home;
