import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from '../navigators/MainTabNavigator/MainTabNavigator';
import UnauthorizedStackNavigator from '../navigators/UnauthorizedStackNavigator';
import MainLoading from '../screens/MainLoading';
import { useAuth } from '../contexts/AuthContext';

import { useTheme } from 'react-native-paper';

export default function MainComponent() {
  const {loggedIn, loading} = useAuth();
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme}>
      {
        loading ?
          <MainLoading /> 
          :
          loggedIn ? <MainTabNavigator /> : <UnauthorizedStackNavigator /> 
      }
    </NavigationContainer>
  )
}