import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';
import { theme } from '../../utils/theme';

export const ButtonContainer = styled.div`
  display: block;
  position: relative;
  color: ${theme.colors.white};
  background: ${props => (props.color === 'primary' ? theme.colors.primary : theme.colors.secondary)};
  border-radius: 4px;
  padding: 11px 16px 11px 18px;
  transition: 300ms;

  &:hover {
    cursor: pointer;
    background: ${props => (props.color === 'primary' ? theme.colors.primaryDark : theme.colors.secondaryDark)};
  }
`;

export const ShoppingCartIcon = styled(FiShoppingCart)`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  top: 1px;
  right: 5px;
`;
