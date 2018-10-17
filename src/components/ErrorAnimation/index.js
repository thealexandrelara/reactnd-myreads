import React from 'react';
import PropTypes from 'prop-types';
import LottieControl from '../LottieControl';

import animationData from '../../assets/animations/cloud_disconnection.json';

const ConnectionErrorAnimation = ({ className }) => {
  return (
    <LottieControl
      className={className}
      animationData={animationData}
      height={200}
      width={200}
    />
  );
};

ConnectionErrorAnimation.propTypes = {
  className: PropTypes.string
};

export default ConnectionErrorAnimation;
