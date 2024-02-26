import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserCards from '../../screens/main-tab/UserCards/UserCards';

import { UserDataContext } from '../../contexts/UserDataContext';

import { displayUsersFirstName } from './helper';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  const {user} = useContext(UserDataContext);
  return (
    <Tab.Navigator screenOptions={{
        // header: () => {
        //   return (
        //     <View style={styles.topBar}>
        //       <Text>
        //         Cześć, {displayUsersFirstName(user.name)}
        //       </Text>
        //       <Pressable onPress={signOut}>
        //         <Text>Sign out</Text>
        //       </Pressable>
        //     </View>
        //   )
        // }
        title: 'Cześć, ' + displayUsersFirstName(user.name)
      }}
    >
      <Tab.Screen name="Karty" component={UserCards}  />
      <Tab.Screen name="Karty2" component={UserCards}  />
      <Tab.Screen name="Karty3" component={UserCards}  />
      <Tab.Screen name="Karty4" component={UserCards}  />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})