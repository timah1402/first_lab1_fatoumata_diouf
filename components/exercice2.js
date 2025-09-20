import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function ProfileCard() {
  return (
    <View style={styles.profileCard}>
      <Image 
        source={require('../assets/dieuldem.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>John Doe</Text>
      <Text style={styles.bioText}>Software Developer</Text>
    </View>
  );
}

export default function Exercise2() {
  return (
    <View style={styles.container}>
      <ProfileCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bioText: {
    fontSize: 14,
    color: '#666',
  },
});