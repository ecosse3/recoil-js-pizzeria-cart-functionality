import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import Slider from 'react-slick';
import Hero from '../../components/Hero';
import Card from '../../components/Card';
import SliderArrow from '../../components/SliderArrow';

import data from '../../utils/data';

import { Heading } from '../../utils/typography';
import { useIsMobile } from '../../utils/theme';

import { SliderSection, SliderWrapper } from './styles';


const Home = () => {
  const isMobile = useIsMobile();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: <SliderArrow next />,
    prevArrow: <SliderArrow prev />
  };

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
          <Row>
            <SliderWrapper>
              <Slider {...settings}>
                {data?.map((product) => (
                  <Card key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} priceOld={product.priceOld} icons={product.icons} />
                ))}
              </Slider>
            </SliderWrapper>
          </Row>
        </Grid>
      </SliderSection>
    </>
  );
};

export default Home;
