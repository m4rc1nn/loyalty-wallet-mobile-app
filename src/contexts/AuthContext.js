// Libraries & Components
import React, {createContext, useState, useEffect, useContext} from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Contexts
import { UserDataContext } from './UserDataContext';

// Env variables
import {
	GOOGLE_WEB_CLIENT_ID,
	GOOGLE_ANDROID_CLIENT_ID,
	GOOGLE_IOS_CLIENT_ID,
} from '@env';

// Scripts
import { sendUserCredentials } from '../scripts/initialLogin';

GoogleSignin.configure({
	webClientId: GOOGLE_WEB_CLIENT_ID,
	androidClientId: GOOGLE_ANDROID_CLIENT_ID,
	iosClientId: GOOGLE_IOS_CLIENT_ID
});

export const AuthContext = createContext([]);

export default function AuthContextProvider({children}) {
  const { setUser } = useContext(UserDataContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const silentLogIn = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      sendUserCredentials(userInfo.idToken, userInfo.user.email)
        .then((res) => {
          if (res === 'SUCCESS') {
            setUser(res);
            setLoggedIn(true);
            setLoading(false);
          } else {
            throw new Error('Backend server error');
          }
        }); 
    } catch (error) {
      console.error(error);
      setLoading(false);
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    //silentLogIn();
  }, [])
  
  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, loading }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const {loggedIn, loading} = useContext(AuthContext);

  return {loggedIn: loggedIn, loading: loading};
}