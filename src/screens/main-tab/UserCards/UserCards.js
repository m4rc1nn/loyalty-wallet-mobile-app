// Libraries & Components
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Contexts
import { AuthContext } from '../../../contexts/AuthContext';
import { UserDataContext } from '../../../contexts/UserDataContext';

// Scripts
import { displayUsersFirstName } from './helper';

// Components
import GenerateTempCodeButton from '../../../components/GenerateTempCodeButton';

export default function UserCards() {
  const { setLoggedIn } = useContext(AuthContext);
  const { user } = useContext(UserDataContext);

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text>
          Cześć, {displayUsersFirstName(user.name)}
        </Text>
        <Pressable onPress={signOut}>
          <Text>Sign out</Text>
        </Pressable>
      </View>
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