import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserCards from '../screens/main-tab/UserCards';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Karty" component={UserCards}  />
      <Tab.Screen name="Karty2" component={UserCards}  />
      <Tab.Screen name="Karty3" component={UserCards}  />
      <Tab.Screen name="Karty4" component={UserCards}  />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})