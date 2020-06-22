import React from 'react';
import { AppProvider } from './App';
import { BooksProvider } from './Books';
import App from '../App';

export const Providers: React.FC = () => (
  <AppProvider>
    <BooksProvider>
      <App />
    </BooksProvider>
  </AppProvider>
);
