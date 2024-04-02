import React from 'react';
import { View, Text } from 'react-native';
import { CheckoutStyles } from '../styles/CheckoutScreenStyles';

const CheckoutScreen = () => {
  return (
    <View style={CheckoutStyles.container}>
      <Text>Checkout Screen</Text>
      {/* Add checkout functionality here */}
    </View>
  );
};

export default CheckoutScreen;