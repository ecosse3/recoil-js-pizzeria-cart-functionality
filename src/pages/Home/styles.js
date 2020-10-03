import styled, { css } from 'styled-components';
import FoodPattern from '../../assets/images/food-pattern.jpg';

export const SliderSection = styled.div`
  position: relative;
  display: flex;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(197, 197, 197, 0.5) 100%), url(${FoodPattern});
  height: calc(100vh - 380px);
`;
