import { DrawerToggleButton } from "@react-navigation/drawer"
import { Stack } from "expo-router"
import React from 'react'

export default function FeedLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Feed",
          headerLeft: () => <DrawerToggleButton />,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  )
}