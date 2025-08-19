import { DrawerToggleButton } from "@react-navigation/drawer"
import { Tabs } from "expo-router"
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerLeft: () => <DrawerToggleButton />,
      headerTitleAlign: "center",
    }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}