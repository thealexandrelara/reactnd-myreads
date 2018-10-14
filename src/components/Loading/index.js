import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
const animationData = require('../../assets/animations/preloader.json');

export default class Loading extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  state = {
    isStopped: false,
    isPaused: false
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div className={this.props.className}>
        <Lottie
          options={defaultOptions}
          height={100}
          width={200}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}
