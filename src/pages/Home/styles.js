import styled, { css } from 'styled-components';
import FoodPattern from '../../assets/images/food-pattern.jpg';

export const SliderSection = styled.div`
  position: relative;
  display: flex;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(197, 197, 197, 0.5) 100%), url(${FoodPattern});
  width: 100%;
  min-height: calc(100vh - 380px);
  padding: 40px 0 60px 0;
  justify-content: center;


  ${props => props.isMobile && css`
    & > div {
      justify-content: center;
      width: 100%;
    }
  `}
`;

export const SliderWrapper = styled.div`
  ${props => !props.isMobile && css`
    width: calc(100% + 30px);
    padding: 15px 100px;
    margin-left: -15px;
    margin-top: -15px;
    overflow: hidden;
  `}

  ${props => props.isMobile && css`
    .slick-slider {
      width: calc(100vw - 4rem);
    }
  `}

  .slick-list {
    overflow: ${props => !props.isMobile && 'visible'};
    width: ${props => !props.isMobile && 'calc(100% + 50px)'};
    margin-left: 0px;
  }

  .slick-slide {
    transition: 0.2s;
    opacity: 0;
  }

  .slick-slide .drop-shadow {
    box-shadow: none;
    transition: box-shadow 0.1s easy-in-out;
  }

  .slick-slide.slick-active {
    opacity: 1;
  }

  .slick-slide.slick-active .drop-shadow {
    box-shadow: 0 0 43px 0 rgba(0, 0, 0, 0.35);
  }
`;
