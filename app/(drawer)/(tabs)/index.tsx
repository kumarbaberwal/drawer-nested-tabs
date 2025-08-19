import { Link } from "expo-router"
import React from 'react'
import { Text, View } from 'react-native'

export default function index() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text>Index</Text>
      <Link href={"/outside"}>
        <Text>
          Outside
        </Text>
      </Link>
    </View>
  )
}