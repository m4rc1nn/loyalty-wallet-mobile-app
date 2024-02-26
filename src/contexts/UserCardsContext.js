import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserCardsContext = createContext([]);

export default function UserCardsContextProvider({children}) {
  const [userCards, setUserCards] = useState([]);

  useEffect(() => {
    setUserCards(getUserCards);
  }, []);
  
  // Save userCards to local storage
  const storeUserCards = async (userCards) => {
    try {
      const stringifiedUserCards = JSON.stringify(userCards);
      await AsyncStorage.setItem('userCards', stringifiedUserCards);
      return true;
    } catch (e) {
      console.log(e);
    }
  }
  // Retrieve userCards from local storage (if present)
  const getUserCards = async () => {
    try {
      const stringifiedUserCards = await AsyncStorage.getItem('userCards');
      return stringifiedUserCards != null ? JSON.parse(stringifiedUserCards) : null;
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <UserCardsContext.Provider value={{ userCards, setUserCards }}>
      { children }
    </UserCardsContext.Provider>
  )
}
