import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import ErrorAnimation from '../ErrorAnimation';

const ErrorBox = ({ errorMessage, className }) => {
  return (
    <Container>
      <ErrorAnimation />
      <p className="error-box-text">{errorMessage}</p>
    </Container>
  );
};

ErrorBox.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default ErrorBox;
