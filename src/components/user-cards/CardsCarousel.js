import React from 'react';
import { Dimensions, View, StyleSheet, Pressable } from 'react-native';
import { Text, Icon, Button, useTheme } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
 
export default function CardsCarousel({cards}) {
  const width = Dimensions.get('window').width;
  const { colors } = useTheme();
    return (
        <Carousel
            loop={false}
            vertical={false}
            width={width * 0.7}
            height={width / 2}
            style={styles.container}
            data={cards}
            scrollAnimationDuration={500}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={({ index }) => (
                <Pressable 
                  key={cards[index].id}
                  style={[styles.itemContainer, { backgroundColor: colors.surface}]}
                  elevation={5}
                >
                  <View style={styles.cardHeader}>
                    <Text variant="titleLarge">
                      {cards[index].company.name}
                    </Text>
                    <Icon size={32} source="swim" />
                  </View>
                  <View style={styles.cardContent}>
                    <Text variant="bodyLarge">Points: {cards[index].points}</Text>
                    <Text>huj</Text>
                  </View>
                </Pressable>
            )}
          />
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginLeft: '3%',
    marginTop: 15,
  },
  itemContainer: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'red',
    width: '90%',
    padding: 15,
    justifyContent: 'space-between',
    borderRadius: 30,
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
});
 