import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AuthForm from './components/Authfrom';
import SocialFeed from './components/SocialFeed';
export default function App() {
  return (
   <SocialFeed/> 
  );
}