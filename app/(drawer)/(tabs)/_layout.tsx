import { Ionicons } from "@expo/vector-icons"
import { DrawerToggleButton } from "@react-navigation/drawer"
import { Tabs } from "expo-router"
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerLeft: () => <DrawerToggleButton />,
      headerTitleAlign: "center",
      headerLeftContainerStyle: {
        paddingLeft: 16,
        paddingBottom: 6,
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />
        }}
      />
    </Tabs>
  )
}