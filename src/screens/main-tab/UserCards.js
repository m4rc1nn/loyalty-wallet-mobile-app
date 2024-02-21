import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../../contexts/AuthContext';

export default function UserCards() {
  const { setLoggedIn } = useContext(AuthContext);

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
      <Pressable onPress={signOut}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})