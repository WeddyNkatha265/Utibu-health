import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import LoginScreenStyles from '../styles/LoginScreenStyles';

const Login = ({ navigation }) => {
  const handleLogin = () => {
    // Perform login logic here
    // If login is successful, navigate to Dashboard screen
    navigation.navigate('Dashboard');
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={LoginScreenStyles.title}>Login</Text>
      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Username or Email"
        autoCapitalize="none"
      />
      <TextInput
        style={LoginScreenStyles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={LoginScreenStyles.button} onPress={handleLogin}>
        <Text style={LoginScreenStyles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;