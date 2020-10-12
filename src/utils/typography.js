import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '@theme';
import {
  space,
  lineHeight,
  fontSize,
  fontStyle,
  size,
  color,
  colorStyle,
  textStyle,
  fontFamily,
  fontWeight,
  letterSpacing,
  borderRadius
} from 'styled-system';

const { heading } = theme.textStyles;

const Component = styled.h1`
  ${space}
  ${fontSize}
  ${fontStyle}
  ${color}
  ${size}
  ${colorStyle}
  ${textStyle}
  ${lineHeight}
  ${letterSpacing}
  ${fontFamily}
  ${fontWeight}
  ${borderRadius}
`;

export const Heading = (props) => (
  <Component {...heading} {...props}>
    {props.children}
  </Component>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired
};
