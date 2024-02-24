import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react';

import axiosInstance from '../../axios';

//Components
import TempCodeModal from './TempCodeModal';

export default function GenerateTempCodeButton() {
  const [tempCode, setTempCode] = useState({code: null, expires: null});
  const [showModal, setShowModal] = useState(false);

  const showTempCode = async () => {
    if (tempCode && new Date(tempCode.expires) > new Date()) {
      setShowModal(true);
      return;
    }
    axiosInstance.post('/temp-code')
      .then((response) => {
        setTempCode({
          code: response.data.tempCode.code,
          expires: response.data.tempCode.expires
        });
        setShowModal(true);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <View style={styles.container}>
      <TempCodeModal showModal={showModal} setShowModal={setShowModal} code={tempCode} changeTempCode={setTempCode} />
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#28a665' : '#33c479',
          },
          styles.button,
        ]}
        onPress={showTempCode}
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