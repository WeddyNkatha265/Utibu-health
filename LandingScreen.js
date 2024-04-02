import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LandingScreenStyles } from '../styles/LandingScreenStyles';

const LandingScreen = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate('Registration');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={LandingScreenStyles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={LandingScreenStyles.logo}
      />

      <Text style={LandingScreenStyles.title}>Welcome to Utibu Health</Text>
      <Text style={LandingScreenStyles.title}>Empowering Health and Wellness: Your Personalized Healthcare Companion</Text>

      <TouchableOpacity style={LandingScreenStyles.button} onPress={handleRegister}>
        <Text style={LandingScreenStyles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={LandingScreenStyles.button} onPress={handleLogin}>
        <Text style={LandingScreenStyles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;