import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

const Logo = ({ className }) => (
  <img src={logo} className={className} alt="logo" />
);

Logo.propTypes = {
  className: PropTypes.string.isRequired
};

export default Logo;
