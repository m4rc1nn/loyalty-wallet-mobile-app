import { StyleSheet, Animated, View } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import React, { useEffect, useState, useRef } from 'react'

// Scripts
import { getRemainingSeconds, countProgress, getPositiveValueOnly, getNegativeValueOnly } from './helper';

// ProgressBar helper constants 
const MAX_CODE_DURATION = 60;

const PROGRESS_CHANGE_PER_SECOND = 1 / MAX_CODE_DURATION;

// Create ProgressBar Class component so it's possible to use useRef() on it
class ClassProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ProgressBar {...this.props} />;
  }
}

// Animatable instance of ProgressBar
const AnimatedProgressBar = Animated.createAnimatedComponent(ClassProgressBar);

export default function CodeLifetimeIndicator({expirationDate, show, setAllowGeneratingNewCode}) {
  const { current: progressBarValue } = useRef(new Animated.Value(1));

  const runAnimation = () => {
    const secondsLeft = getRemainingSeconds(expirationDate);
    progressBarValue.setValue(countProgress(expirationDate, PROGRESS_CHANGE_PER_SECOND));
    setTimeout(() => setAllowGeneratingNewCode(true), (secondsLeft - 30) * 1000);

    Animated.timing(progressBarValue, {
      toValue: 0,
      duration: (secondsLeft * 1000),
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    runAnimation();
  }, [expirationDate])

  return (
    <View style={styles.container}>
      <AnimatedProgressBar 
        style={styles.progressBar}
        animatedValue={progressBarValue}
        fillStyle={{
          backgroundColor: progressBarValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['rgb(184, 19, 19)', 'rgb(184, 184, 19)', 'rgb(19, 184, 19)']
          })
        }}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    width: '75%',
    alignItems: 'stretch',
    marginBottom: 14
  },
  progressBar: {
    height: 6,
  }
})