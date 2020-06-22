import React, { createContext, useState, useEffect } from 'react';
import { IAppContext } from './types';

export const AppContext = createContext<IAppContext>({
  appLoading: true,
  setAppLoading: () => true,
});

export const AppProvider: React.FC = ({ children }) => {
  const [appLoading, setAppLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setAppLoading(false), 1000);
  }, []);
  return (
    <AppContext.Provider value={{ appLoading, setAppLoading }}>
      {children}
    </AppContext.Provider>
  );
};
