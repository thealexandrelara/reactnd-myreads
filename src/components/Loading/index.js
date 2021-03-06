import React from 'react';
import PropTypes from 'prop-types';
import LottieControl from '../LottieControl';

import animationData from '../../assets/animations/preloader.json';

const Loading = ({ className }) => {
  return (
    <LottieControl
      className={className}
      animationData={animationData}
      height={200}
      width={200}
    />
  );
};

Loading.propTypes = {
  className: PropTypes.string
};

export default Loading;
