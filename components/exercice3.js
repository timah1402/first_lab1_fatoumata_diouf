import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function Exercise3() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.countText, { color: count % 2 === 0 ? 'green' : 'red' }]}>
        Count: {count}
      </Text>
      
      {/* Button component */}
      <Button 
        title="Increment" 
        onPress={incrementCount}
      />
      
      {/* Bonus: TouchableOpacity component */}
      <TouchableOpacity style={styles.touchableButton} onPress={incrementCount}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  touchableButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});