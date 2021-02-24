import React, { FC } from 'react';
import { AuthProvider } from './Auth';

const AppProvider: FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
