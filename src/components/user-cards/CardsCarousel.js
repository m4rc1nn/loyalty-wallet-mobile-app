import React from 'react';
import { Dimensions, View, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
 
export default function CardsCarousel({cards}) {
  const width = Dimensions.get('window').width;
  const { colors } = useTheme();

  const image = {uri: "https://images.squarespace-cdn.com/content/v1/5f06d673352720325a1f3b5d/1626685519270-REGZB8AWDZUDUYAD0QEY/Atlantis+Leisure+Swimming+Pool+Oban+Argyll+Otters+Flume+Indoor"};

    return (
        <Carousel
            loop={false}
            vertical={false}
            width={width * 0.7}
            height={width / 2}
            style={styles.container}
            data={cards}
            scrollAnimationDuration={500}
            renderItem={({ index }) => (
              <ImageBackground
                source={image}
                key={cards[index].id}
                style={styles.image}
              >
                <Pressable style={styles.pressable}>
                  <View style={styles.cardHeader}>
                    <Text variant="titleLarge">
                      {cards[index].company.name}
                    </Text>
                  </View>
                  <View style={styles.cardContent}>
                    <Text variant="bodyLarge">Points: {cards[index].points}</Text>
                    <Text>huj</Text>
                  </View>
                   </Pressable>
              </ImageBackground>
            )}
          />
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 4,
  },
  pressable: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    marginLeft: '3%',
    flex: 1,
    padding: 15,
    borderRadius: 30,
    overflow: 'hidden',
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
 