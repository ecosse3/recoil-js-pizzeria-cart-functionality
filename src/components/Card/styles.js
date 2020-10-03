import styled from 'styled-components';
import { theme } from '../../utils/theme';
import InfoSVG from '../../assets/svg/info.svg';
import Button from '../Button';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  border-radius: 16px;
  width: 330px;
  height: 510px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ButtonContainer = styled.div`
  display: inline-block;
  padding-left: 15px;
`;

export const Top = styled.div`
`;

export const Bottom = styled.div`
  justify-self: flex-end;
  padding-bottom: 40px;
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
  background-size: cover;
  width: 100%;
  height: 216px;
  border-radius: 16px 16px 0 0;
`;

export const Info = styled.div`
  position: absolute;
  top: 16px;
  right: 24px;
  width: 32px;
  height: 32px; border-radius: 50%; background-color: ${theme.colors.white};
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
  display: block;
  font-family: 'DM Serif Display';
  font-size: 24px;
  font-weight: 400;
  color: ${theme.colors.deepBlue};
  line-height: 1.05;
  padding: 32px 24px 0 24px;
`;

export const Description = styled.div`
  display: block;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.56;
  color: ${theme.colors.indigoFlight};
  padding: 32px 24px;
`;

export const Price = styled.div`
  display: inline-block;
  font-family: 'DM Serif Display';
  font-size: 28px;
  font-weight: 400;
  color: ${theme.colors.deepBlue};
  padding-left: 24px;
`;

export const PriceOld = styled.div`
  display: inline-block;
  font-family: 'DM Serif Display';
  font-size: 20px;
  font-weight: 400;
  color: ${theme.colors.primary};
  padding-left: 8px;
  text-decoration: line-through;
`;

export const OrderButton = styled(Button)`
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
`;
