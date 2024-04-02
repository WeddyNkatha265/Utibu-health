import React from 'react';
import { View, Text } from 'react-native';
import OrderMedicationStyles from '../styles/OrderMedicationStyles';
import MedicationItem from '../components/MedicationItem';

// Placeholder data for medication items (replace with actual data later)
const medicationData = [
  {
    id: '1',
    name: 'Medication 1',
    description: 'Description for Medication 1',
    imageUri: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Medication 2',
    description: 'Description for Medication 2',
    imageUri: 'https://via.placeholder.com/150',
  },
  // Add more medication items as needed
];

const OrderMedication = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={medicationData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MedicationItem
            name={item.name}
            description={item.description}
            imageUri={item.imageUri}
          />
        )}
      />
    </View>
  );
};

export default OrderMedication;