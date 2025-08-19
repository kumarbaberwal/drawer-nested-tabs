import { useLocalSearchParams } from "expo-router";
import React from 'react';
import { Text, View } from 'react-native';

export default function Feed() {
  const { id } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Id: {id}</Text>
    </View>
  )
}