import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserDataContext = createContext([]);

export default function UserDataContextProvider({children}) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    
  }, []);
  
  // Save user to local storage
  const storeUserData = async (user) => {
    try {
      const stringifiedUser = JSON.stringify(user);
      await AsyncStorage.setItem('userData', stringifiedUser);
      return true;
    } catch (e) {
      console.log(e);
    }
  }
  // Retrieve user from local storage (if present)
  const getUserData = async () => {
    try {
      const stringifiedUser = await AsyncStorage.getItem('userData');
      return stringifiedUser != null ? JSON.parse(stringifiedUser) : null;
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      { children }
    </UserDataContext.Provider>
  )
}
