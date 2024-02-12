import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserCards from '../screens/MainDrawerNavigator/UserCards';

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Your cards" component={UserCards} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})