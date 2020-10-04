import React from 'react';
import PropTypes from 'prop-types';

import { Arrow, BiLeftArrowSVG, BiRightArrowSVG } from './styles';

const SliderArrow = (props) => {
  const {
    onClick, prev, next
  } = props;

  return (
    <Arrow prev={prev} next={next} onClick={onClick}>{prev && (<BiLeftArrowSVG />)}{next && (<BiRightArrowSVG />)}</Arrow>
  );
};

SliderArrow.propTypes = {
  onClick: PropTypes.element,
  prev: PropTypes.bool,
  next: PropTypes.bool
};

export default SliderArrow;
