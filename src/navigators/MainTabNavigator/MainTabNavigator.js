import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserCards from '../../screens/main-tab/UserCards/UserCards';
import { useTheme } from 'react-native-paper';

import { UserDataContext } from '../../contexts/UserDataContext';

import { displayUsersFirstName } from './helper';

import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const {user} = useContext(UserDataContext);
  const { colors } = useTheme();
  return (
    <Tab.Navigator screenOptions={{
        title: 'Cześć, ' + displayUsersFirstName(user.name),
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen 
        name="Cards"
        options={{
          tabBarLabel: "Karty",
          tabBarIcon: ({color}) => <Feather name="credit-card" size={26} color={color} />
        }}    
        component={UserCards}  
      />
      <Tab.Screen 
        name="Rewards"
        options={{
          tabBarLabel: "Nagrody",
          tabBarIcon: ({color}) => <Feather name="gift" size={26} color={color} />
        }}    
        component={UserCards}  
      />
      <Tab.Screen 
        name="Partners"
        options={{
          tabBarLabel: "Nasi partnerzy",
          tabBarIcon: ({color}) => <FontAwesome6 name="people-line" size={26} color={color}/>
        }}    
        component={UserCards}  
      />
      <Tab.Screen 
        name="More"
        options={{
          tabBarLabel: "Więcej",
          tabBarIcon: ({color}) => <Entypo name="dots-three-horizontal" size={26} color={color} />
        }}    
        component={UserCards}  
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})