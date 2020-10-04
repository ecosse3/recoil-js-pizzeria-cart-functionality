import styled from 'styled-components';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

export const BiLeftArrowSVG = styled(BiLeftArrow)`
  width: 55px;
  height: 40px;
`;

export const BiRightArrowSVG = styled(BiRightArrow)`
  width: 55px;
  height: 40px;
`;


export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: ${({ next }) => (next ? '-100px' : 'unset')};
  left: ${({ prev }) => (prev ? '-100px' : 'unset')};
  display: flex;
  width: 75px;
  height: 75px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.4);

  &:hover {
    cursor: pointer;
  }
`;
