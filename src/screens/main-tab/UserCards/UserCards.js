// Libraries & Components
import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'

// Contexts
import { UserDataContext } from '../../../contexts/UserDataContext';
import { UserCardsContext } from '../../../contexts/UserCardsContext';

// Components
import GenerateTempCodeButton from '../../../components/temp-code/GenerateTempCodeButton';

// Scripts
import { getUserCards } from './helper';

export default function UserCards() {
  const { user } = useContext(UserDataContext);
  const { userCards, setUserCards } = useContext(UserCardsContext);

  useEffect(() => {
    setUserCards(getUserCards());
  }, []);

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