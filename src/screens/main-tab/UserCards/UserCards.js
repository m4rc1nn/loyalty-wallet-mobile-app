// Libraries & Components
import { StyleSheet, View } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native-paper';

// Contexts
import { UserDataContext } from '../../../contexts/UserDataContext';
import { UserCardsContext } from '../../../contexts/UserCardsContext';

// My Components
import GenerateTempCodeButton from '../../../components/temp-code/GenerateTempCodeButton';
import CardsCorusel from '../../../components/user-cards/CardsCarousel';

// Scripts
import { getUserCards } from './helper';

export default function UserCards() {
  const { user } = useContext(UserDataContext);
  const { userCards, setUserCards } = useContext(UserCardsContext);

  useEffect(() => {
    getUserCards().then((response) => {
      if (response !== 'error') {
        setUserCards(response);
        console.log(response);
      } else {
        console.error('API fetch error');
      }
    });
  }, []);

  return (
    <View style={styles.container}>
        { 
          userCards.length ? (
            <View>
              <Text variant="titleLarge">Sport</Text>
              <CardsCorusel cards={userCards}/>
            </View>
          ) : (
            <Text>No cards.</Text>
          )
        }
      
      <GenerateTempCodeButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  userCardsContainer: {
    backgroundColor: 'yellow',
    height: 150,
    alignSelf: 'stretch'
  }
});