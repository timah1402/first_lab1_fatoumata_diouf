import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Exercise4() {
  const fruits = [
    'Apple', 
    'Banana', 
    'Cherry', 
    'Date', 
    'Elderberry', 
    'Fig', 
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon',
    'Mango',
    'Orange',
    'Papaya',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tangerine',
    'Ugli Fruit',
    'Vanilla Bean',
    'Watermelon',
    'Xigua',
    

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fruit List</Text>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={true}>
        {fruits.map((fruit, index) => (
          <Text 
            key={index} 
            style={[
              styles.listItem, 
              { backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#e0e0e0' }
            ]}
          >
            {fruit}
          </Text>
        ))}
        
        {/* Challenge: Show "End of List" only if more than 5 items */}
        {fruits.length > 5 && (
          <Text style={styles.endOfListText}>End of List</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  scrollView: {
    flex: 1,
    margin: 15,
    paddingHorizontal: 10,
  },
  listItem: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#333',
  },
  endOfListText: {
    padding: 20,
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#666',
    backgroundColor: '#f9f9f9',
    marginTop: 10,
    borderRadius: 5,
  },
});