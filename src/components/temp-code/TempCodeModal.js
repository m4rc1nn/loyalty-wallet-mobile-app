// Libraries & Components
import React, { useState } from 'react';
import { Modal, StyleSheet, Pressable, View, ActivityIndicator } from 'react-native';
import { useTheme, Text } from 'react-native-paper';

// My Components
import CodeLifetimeIndicator from './CodeLifetimeIndicator';

// Scripts & Helpers
import { getRemainingSeconds } from './helper';
import axiosInstance from '../../axios';

export default TempCodeModal = ({code, showModal, setShowModal, changeTempCode}) => {
  const [codeGenerating, setCodeGenerating] = useState(false);
  const [allowGeneratingNewCode, setAllowGeneratingNewCode] = useState(false);

  const { colors, dark } = useTheme();

  const generateNewCode = async () => {
    setCodeGenerating(true);
    axiosInstance.post('/temp-code')
      .then((response) => {
        changeTempCode({
          code: response.data.tempCode.code,
          expires: response.data.tempCode.expires
        });
        setAllowGeneratingNewCode(false);
        setCodeGenerating(false);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
      <Modal
        animationType="none"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={[styles.centeredView, dark ? { backgroundColor: 'rgba(255, 255, 255, 0.3)' } : { backgroundColor: 'rgba(0, 0, 0, 0.4)' }]}>
          <View style={[styles.modalView, {backgroundColor: colors.lighterBackground}]}>
            {
              codeGenerating ? (
                <ActivityIndicator size="large" color="#0000ff" style={{marginBottom: 25}}/>
              ) : (
                <View style={styles.modalTextView}>
                  <Text style={styles.modalLabelText}>Twój tymczasowy kod</Text>
                  <Text style={styles.code}>{code.code}</Text>
                  <CodeLifetimeIndicator expirationDate={code.expires} show={showModal} setAllowGeneratingNewCode={setAllowGeneratingNewCode} />
                </View>
              )
            }
            
            <Pressable
              style={[
                styles.button, 
                codeGenerating || !allowGeneratingNewCode ? {backgroundColor: colors.darkerPrimary, opacity: 0.7} : {backgroundColor: colors.primary}
              ]}
              onPress={generateNewCode}
              disabled={codeGenerating || !allowGeneratingNewCode}
            >
              <Text style={styles.textStyle}>Wygeneruj nowy kod</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    justifyContent: 'flex-end',
    minHeight: 200,
    width: '100%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingBottom: 35,
    paddingTop: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalLabelText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  code: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 8
  },
  modalTextView: {
    alignItems: 'center',
    width: '100%'
  },
});