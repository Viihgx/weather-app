import React from 'react';
import styled, { keyframes } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/main.scss';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  margin: 20px auto;
`;

const Loader = () => {
  return <Spinner />;
};

export default Loader;
