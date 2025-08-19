import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ headerShown: false, title: "Home" }} />
      <Drawer.Screen name="support" options={{ headerShown: false, title: "Support" }} />
    </Drawer>
  )
}