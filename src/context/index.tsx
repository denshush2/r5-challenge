import React from 'react';
import { AppProvider } from './App';
import { BooksProvider } from './Books';
import { Routes } from '../routes';

export const Providers: React.FC = () => (
  <AppProvider>
    <BooksProvider>
      <Routes />
    </BooksProvider>
  </AppProvider>
);
