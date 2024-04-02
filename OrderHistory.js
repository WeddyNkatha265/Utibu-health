import React from 'react';
import { View, Text } from 'react-native';
import OrderHistoryStyles from '../styles/OrderHistoryStyles';

const OrderHistory = () => {
  return (
    <View style={OrderHistoryStyles.container}>
      <Text style={OrderHistoryStyles.title}>Order History</Text>
      {/* Add order history list component here */}
    </View>
  );
};

export default OrderHistory;