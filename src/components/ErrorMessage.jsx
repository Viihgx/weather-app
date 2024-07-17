import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/main.scss';

const ErrorMessage = ({ message }) => {
  return (
    <div className="alert alert-danger mt-3" role="alert">
      {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
