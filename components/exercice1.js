import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export default function Exercice1() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-2xl font-bold`}>
        Hello World!
      </Text>
    </View>
  );
}