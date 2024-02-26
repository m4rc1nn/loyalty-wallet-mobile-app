// Libraries & Components
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'

// Contexts
import { AuthContext } from '../../../contexts/AuthContext';
import { UserDataContext } from '../../../contexts/UserDataContext';

// Scripts
import { displayUsersFirstName } from './helper';

// Components
import GenerateTempCodeButton from '../../../components/temp-code/GenerateTempCodeButton';

export default function UserCards() {
  const { setLoggedIn } = useContext(AuthContext);
  const { user } = useContext(UserDataContext);

  return (
    <View style={styles.container}>
      <View style={styles.userCardsContainer}>
        
      </View>
      <GenerateTempCodeButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userCardsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topBar: {
    position: 'absolute',
    width: '100%',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,

  }
})