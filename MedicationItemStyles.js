import { StyleSheet } from 'react-native';

const MedicationItemStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
    },
    details: {
      flex: 1,
      marginLeft: 16,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: '#666666',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    quantityButton: {
      backgroundColor: '#007bff',
      borderRadius: 20,
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 8,
    },
    quantityButtonText: {
      color: '#ffffff',
      fontSize: 20,
    },
    quantity: {
      fontSize: 18,
      marginHorizontal: 8,
    },
  });

export default MedicationItemStyles;