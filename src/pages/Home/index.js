import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import Slider from 'react-slick';
import { useIsMobile } from '@theme';
import data from '@/utils/data';
import { Heading } from '@/utils/typography';
import Hero from '../../components/Hero';
import Card from '../../components/Card';
import SliderArrow from '../../components/SliderArrow';

import { SliderSection, SliderWrapper } from './styles';


const Home = () => {
  const isMobile = useIsMobile();

  const settings = {
    dots: false,
    infinite: false,
    draggable: false,
    swipeToSlide: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: !isMobile && <SliderArrow next />,
    prevArrow: !isMobile && <SliderArrow prev />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          swipeToSlide: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false
        }
      }
    ]
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
            <SliderWrapper isMobile={isMobile}>
              <Slider {...settings}>
                {data?.map((product) => (
                  <Card key={product.id} id={product.id} image={product.image} title={product.title} description={product.description} price={product.price} priceOld={product.priceOld} icons={product.icons} ingredients={product.ingredients} />
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
