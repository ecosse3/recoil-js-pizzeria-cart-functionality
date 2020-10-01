import styled from 'styled-components';
import Hero from '../../assets/images/Hero.jpg';

export const HeroImage = styled.div`
  display: block;
  position: relative;
  background: url(${Hero});
  background-size: cover;
  background-position: 50%;
  width: 100%;
  height: 300px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
