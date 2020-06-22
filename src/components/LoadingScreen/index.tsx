import React from 'react';
import { LoadgingPage } from './styles';
import GoogleLogo from '../../assets/img/googleBooksLogo.svg';

export const LoadingScreen: React.FC = () => {
  return (
    <LoadgingPage>
      <img src={GoogleLogo} width="300px" alt="Google Logo" />
    </LoadgingPage>
  );
};
