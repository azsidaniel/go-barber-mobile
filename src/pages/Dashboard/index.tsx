import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';
import { useAuth } from '../../hooks/Auth';

const Dashboard: FC = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sair" onPress={signOut} />
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
