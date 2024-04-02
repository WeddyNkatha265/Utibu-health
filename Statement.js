import React from 'react';
import { View, Text } from 'react-native';
import StatementStyles from '../styles/StatementScreen';

const Statement = () => {
  return (
    <View style={StatementStyles.container}>
      <Text style={StatementStyles.title}>Statement</Text>
      {/* Add statement details component here */}
    </View>
  );
};

export default Statement;