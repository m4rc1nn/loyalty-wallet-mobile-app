// Libraries & Components
import { StyleSheet, View, Pressable } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Surface, Text, Icon, Button } from 'react-native-paper';

// Contexts
import { UserDataContext } from '../../../contexts/UserDataContext';
import { UserCardsContext } from '../../../contexts/UserCardsContext';

// My Components
import GenerateTempCodeButton from '../../../components/temp-code/GenerateTempCodeButton';

// Scripts
import { getUserCards } from './helper';

export default function UserCards() {
  const { user } = useContext(UserDataContext);
  const { userCards, setUserCards } = useContext(UserCardsContext);

  useEffect(() => {
    getUserCards().then((response) => {
      if (response !== 'error') {
        setUserCards(response);
      } else {
        console.error('API fetch error');
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.userCardsContainer}>
        { 
          userCards.length ? (
            userCards.map((card) => {
              return (
                <Pressable 
                  key={card.id}
                  style={styles.cardItem}
                  
                >
                  <View style={styles.cardHeader}>
                    <Text variant="titleLarge">
                      {card.company.name}
                    </Text>
                    <Icon size={32} source="swim" />
                  </View>
                  <View style={styles.cardContent}>
                    <Text variant="bodyLarge">Points: {card.points}</Text>
                    <Text>huj</Text>
                  </View>
                </Pressable>
              )
            })
          ) : (
            <Text>No cards.</Text>
          )
        }
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
    alignItems: 'center',
  },
  cardItem: {
    width: '90%',
    marginTop: 15,
    height: 150,
    padding: 15,
    justifyContent: 'space-between',
    borderRadius: 30,
    backgroundColor: '#f1e9f2',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardIcon: {
    paddingRight: 15
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})