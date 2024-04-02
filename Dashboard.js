import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DashboardStyles from '../styles/DashboardStyles';

const Dashboard = ({ navigation }) => {
  return (
    <View style={DashboardStyles.container}>
      <Text style={DashboardStyles.title}>Dashboard</Text>

      <TouchableOpacity 
        style={DashboardStyles.button}
        onPress={() => navigation.navigate('OrderMedication')}
      >
        <Text style={DashboardStyles.buttonText}>Order Medication</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={DashboardStyles.button}
        onPress={() => navigation.navigate('OrderHistory')}
      >
        <Text style={DashboardStyles.buttonText}>Order History</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={DashboardStyles.button}
        onPress={() => navigation.navigate('Statement')}>
        <Text style={DashboardStyles.buttonText}>Statement</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Dashboard;