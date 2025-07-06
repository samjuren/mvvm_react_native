import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/home/HomeScreen';
import CepDetailsScreen from './src/views/cepDetails/CepDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  CepDetails: { cepData: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Busca por CEP' }}
        />
        <Stack.Screen
          name="CepDetails"
          component={CepDetailsScreen}
          options={{ title: 'Detalhes do CEP' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}