import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './routes';
import AppProvider from './hooks';

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProvider>
        <View style={{ backgroundColor: '#312e38', flex: 1 }}>
          <AuthRoutes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
