import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react';

import axiosInstance from '../axios';

export default function GenerateTempCodeButton() {
  const [tempCode, setTempCode] = useState(null);

  const getTempCode = async () => {
    axiosInstance.post('/temp-code')
      .then((response) => {
        console.log(response.data.tempCode.code);
        console.log(new Date(response.data.tempCode.expires))
        setTempCode(response.data.tempCode.code);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#28a665' : '#33c479',
          },
          styles.button,
        ]}
        onPress={getTempCode}
      >
        <Text style={styles.buttonText}>Pokaż kod</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginBottom: 12,
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25
  },
  buttonText: {
    fontSize: 18,
    letterSpacing: 0.4
  }
})