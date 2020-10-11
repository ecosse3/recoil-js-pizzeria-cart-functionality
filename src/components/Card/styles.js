import styled from 'styled-components';
import InfoSVG from '../../assets/svg/info.svg';
import VegeSVG from '../../assets/svg/vege_icon.svg';
import HotSVG from '../../assets/svg/hot_icon.svg';
import WheatSVG from '../../assets/svg/wheat_icon.svg';

import Button from '../Button';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  width: 330px;
  height: 510px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ButtonContainer = styled.div`
  display: inline-flex;
  padding-left: 15px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.18em;
`;

export const Top = styled.div`
`;

export const TopData = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 32px 24px 0 24px;
  justify-content: space-between;
`;

export const IconsWrapper = styled.div`
  margin-top: 2px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 24px 40px 24px;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
`;

export const Image = styled.div`
  position: relative;
  background: url(${props => props.src});
  background-size: auto;
  width: 100%;
  height: 216px;
  border-radius: 16px 16px 0 0;
`;

export const Info = styled.div`
  position: absolute;
  top: 16px;
  right: 24px;
  width: 32px;
  height: 32px; border-radius: 50%; background-color: ${({ theme }) => theme.colors.white};
  transition: 400ms;

  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
    background-color: rgba(240, 240, 240, 1)
  }

  &:after {
    position: absolute;
    content: url(${InfoSVG});
    right: 12px;
    top: 6px;
  }
`;

export const Title = styled.div`
  display: inline-block;
  font-family: 'DM Serif Display';
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.deepBlue};
  line-height: 1.05;
`;

export const Description = styled.div`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.56;
  color: ${({ theme }) => theme.colors.indigoFlight};
  padding: 32px 24px;
`;

export const Price = styled.div`
  display: inline-block;
  font-family: 'DM Serif Display';
  font-size: 28px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.deepBlue};
`;

export const PriceOld = styled.div`
  display: inline-block;
  font-family: 'DM Serif Display';
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  padding-left: 8px;
  text-decoration: line-through;
`;

export const OrderButton = styled(Button)``;

const handleIcon = icon => {
  switch (icon) {
    case 'vege':
      return `${VegeSVG}`;

    case 'wheat':
      return `${WheatSVG}`;

    case 'hot':
      return `${HotSVG}`;

    default:
      return '';
  }
};

export const Icon = styled.div`
  position: relative;
  display: inline-flex;
  align-self: flex-end;
  background: url(${({ icon }) => handleIcon(icon)});
  width: 24px;
  height: 24px;
  margin-left: 5px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  top: 16px;
  left: 30px;
  width: 230px;
  min-height: 160px;
  background: #FFFFFF;
  border-radius: 4px;
  animation: 0.2s fadeIn;

  &:after {
    content: '';
    position: absolute;
    right: -8px;
    top: 14px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #FFF;
    transform: rotate(-90deg);
    clear: both;
  }
`;

export const InfoBoxTitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 5px 16px;
  border-bottom: 1px solid #D9D9D9;
`;

export const InfoBoxTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
`;

export const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Ingredient = styled.span`
  font-size: 12px;
`;
