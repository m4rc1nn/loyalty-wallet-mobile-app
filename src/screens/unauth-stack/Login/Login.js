// Libraries & Components
import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

// Contexts
import { AuthContext } from '../../../contexts/AuthContext';
import { UserDataContext } from '../../../contexts/UserDataContext';

// Scripts
import { sendUserCredentials } from '../../../scripts/initialLogin';


export default function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const { setUser } = useContext(UserDataContext);

  const login = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      sendUserCredentials(userInfo.idToken, 'ygyf')
        .then((res) => {
          if (res !== 'error') {
            setUser(res);
            setLoggedIn(true);
          }
        })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <GoogleSigninButton onPress={login} />
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