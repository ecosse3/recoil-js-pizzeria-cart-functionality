import styled from 'styled-components';
import { FiShoppingCart } from 'react-icons/fi';

export const ButtonContainer = styled.div`
  display: block;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  background: ${props => (props.color === 'primary' ? props.theme.colors.primary : props.theme.colors.secondary)};
  border-radius: 4px;
  padding: 11px 16px 11px 18px;
  transition: 300ms;

  &:hover {
    cursor: pointer;
    background: ${props => (props.color === 'primary' ? props.theme.colors.primaryDark : props.theme.colors.secondaryDark)};
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
