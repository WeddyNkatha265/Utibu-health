// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LandingScreen from '../screens/LandingScreen';
import RegistrationScreen from '../screens/Registration';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import OrderMedication from '../screens/OrderMedication';
import OrderHistory from '../screens/OrderHistory';
import Statement from '../screens/Statement';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="OrderMedication" component={OrderMedication} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="Statement" component={Statement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;