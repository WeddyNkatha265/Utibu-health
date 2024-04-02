import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MedicationItemStyles } from '../styles/MedicationItemStyles';

const MedicationItem = ({ name, description, imageUri }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={MedicationItemStyles.container}>
      <Image source={{ uri: imageUri }} style={MedicationItemStyles.image} />
      <View style={MedicationItemStyles.details}>
        <Text style={MedicationItemStyles.name}>{name}</Text>
        <Text style={MedicationItemStyles.description}>{description}</Text>
      </View>
      <View style={MedicationItemStyles.quantityContainer}>
        <TouchableOpacity style={MedicationItemStyles.quantityButton} onPress={decrementQuantity}>
          <Text style={MedicationItemStyles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={MedicationItemStyles.quantity}>{quantity}</Text>
        <TouchableOpacity style={MedicationItemStyles.quantityButton} onPress={incrementQuantity}>
          <Text style={MedicationItemStyles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MedicationItem;