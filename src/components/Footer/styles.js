import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Container = styled.div`
  display: flex;
  position: relative;
  background-color: ${theme.colors.primary};
  height: 80px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`;

export const FooterText = styled.div`
  display: flex;
  font-family: 'Montserrat Subrayada';
  font-size: ${props => (props.isMobile ? '12px' : '18px')};
  color: ${theme.colors.white};
`;
