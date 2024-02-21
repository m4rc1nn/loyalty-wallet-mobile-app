import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/unauth-stack/Login';

const Stack = createStackNavigator();

export default function UnauthorizedStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign in" component={Login} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})