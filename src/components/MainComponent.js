import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from '../navigators/MainTabNavigator';
import UnauthorizedStackNavigator from '../navigators/UnauthorizedStackNavigator';
import MainLoading from '../screens/MainLoading';
import { useAuth } from '../contexts/AuthContext';

export default function MainComponent() {
  const {loggedIn, loading} = useAuth();
  return (
    <NavigationContainer>
      {
        loading ?
          <MainLoading /> 
          :
          loggedIn ? <MainTabNavigator /> : <UnauthorizedStackNavigator /> 
      }
    </NavigationContainer>
  )
}