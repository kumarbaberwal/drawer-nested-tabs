import { Link } from "expo-router"
import React from 'react'
import { Text, View } from 'react-native'

export default function index() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Link href="/(drawer)/(tabs)/feed/1" >
        <Text>
          Feed 1
        </Text>
      </Link>
      <Link href="/(drawer)/(tabs)/feed/2" >
        <Text>
          Feed 2
        </Text>
      </Link>
      <Link href="/(drawer)/(tabs)/feed/3" >
        <Text>
          Feed 3
        </Text>
      </Link>
    </View>
  )
}