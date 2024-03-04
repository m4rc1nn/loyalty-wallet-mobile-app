// Libraries & Components
import { StyleSheet, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Text, Icon, useTheme } from 'react-native-paper';

// Contexts
import { UserDataContext } from '../../../contexts/UserDataContext';
import { UserCardsContext } from '../../../contexts/UserCardsContext';

// My Components
import GenerateTempCodeButton from '../../../components/temp-code/GenerateTempCodeButton';
import CardsCorusel from '../../../components/user-cards/CardsCarousel';

// Scripts
import { getUserCards, groupCards } from './helper';

export default function UserCards() {
  const { user } = useContext(UserDataContext);
  const { userCards, setUserCards } = useContext(UserCardsContext);
  const [loading, setLoading] = useState(true);

  const { colors } = useTheme();

  useEffect(() => {
    getUserCards().then((response) => {
      if (response !== 'error') {
        setUserCards(groupCards(response));
        //console.log(groupCards(response))
        setLoading(false);
      } else {
        console.error('API fetch error');
      }
    });
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: colors.lighterBackground}]}>
        { 
          !loading ? (
            Object.keys(userCards).map((key, index) => {
              return (
                <View key={index} style={styles.categoryContainer}>
                  <View style={styles.categoryLabel}>
                    <Icon size={32} source="swim" color={colors.accent}/>
                    <Text 
                      variant="titleLarge"
                      style={{ color: colors.accent}}
                    >
                      {key}
                    </Text>
                  </View>
                  <CardsCorusel cards={userCards[key]}/>
                </View>
              )
            })
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
  },
  categoryContainer: {
    marginTop: 10
  },
  categoryLabel: {
    flexDirection: 'row',
    gap: 6,
    marginLeft: '3%'
  }
});