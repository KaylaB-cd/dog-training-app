import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PetRegistrationScreen from './screens/PetRegistrationScreen'; // move screen to /screens if needed
import TricksPage from './screens/TricksPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PetRegistration">
        <Stack.Screen name="PetRegistration" component={PetRegistrationScreen} />
        <Stack.Screen name="TricksPage" component={TricksPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}