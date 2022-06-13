import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  Modal,
  Pressable,
  StyleSheet,
  View,
  Image,
  TextInput,
  Alert,
} from 'react-native';
export const Formulario = ({
  modalVisible,
  setModalVisible,
  decimal,
  setDecimal,
}) => {
  const [resultado, setResultado] = useState(null);
  const handleSubmit = () => {
    let sum = 0;
    if (decimal === null || decimal != 1 && decimal != 0) {
      Alert.alert('ERROR', 'Numero incorrecto ingrese 0 o 1');
      return;
    }
    for (let i = 0; i < decimal.length; i++) {
      sum += +decimal[i] * 2 ** (decimal.length - 1 - i);
    }
    setResultado(sum.toString());
    setDecimal('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.modalContent}>
        <View style={styles.contentForm}></View>
        <Text style={styles.topText}>Conversor</Text>
        <Image
          source={require('../assets/logo-removebg-preview.png')}
          style={styles.logo}
        />
        <TextInput
          placeholder="Ingresa el número binario"
          placeholderTextColor={'#666'}
          style={styles.inputBinario}
          keyboardType="decimal-pad"
          value={decimal}
          onChangeText={setDecimal}
        />
        <View style={styles.firstCircle}></View>
        <TextInput
          placeholder="Resultado en decimal"
          placeholderTextColor={'#666'}
          style={
            resultado != null
              ? [styles.inputBinario, styles.resultadoBinarioTrue]
              : [styles.inputBinario, styles.resultadoBinario]
          }
          keyboardType="decimal-pad"
          value={resultado}
          editable={false}
          selectTextOnFocus={false}
        />
        <View style={styles.secondCircle}></View>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.btnConvertir} onPress={handleSubmit}>
            <Text style={styles.btnConvertirText}>Convertir</Text>
          </Pressable>
          <Pressable style={styles.btnVolver} onPress={setModalVisible}>
            <Text style={styles.btnConvertirText}>Volver inicio</Text>
          </Pressable>
        </View>
        <View style={styles.buttons}>
          <View style={styles.active}></View>
          <View style={styles.noActive}></View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#628C80',
    flex: 1,
  },
  contentForm: {
    backgroundColor: '#A6D79B',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 25,
    borderRadius: 10,
    width: 370,
    height: 5,
  },
  topText: {
    marginHorizontal: 25,
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  logo: {
    width: 200,
    height: 200,
    marginHorizontal: 110,
    marginTop: 60,
    marginBottom: 60,
  },
  inputBinario: {
    backgroundColor: '#FDFAE6',
    marginHorizontal: 60,
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  firstCircle: {
    position: 'relative',
    backgroundColor: '#A6D79B',
    borderRadius: 100,
    width: 45,
    height: 45,
    alignSelf: 'flex-end',
    marginRight: 35,
    bottom: 55,
  },
  resultadoBinario: {
    backgroundColor: '#FDFAE6',
    marginHorizontal: 60,
    borderRadius: 10,
    paddingLeft: 40,
    paddingVertical: 20,
  },
  resultadoBinarioTrue: {
    backgroundColor: '#FDFAE6',
    marginHorizontal: 60,
    borderRadius: 10,
    paddingLeft: 40,
    paddingVertical: 20,
    color: '#000',
  },
  secondCircle: {
    position: 'relative',
    backgroundColor: '#A6D79B',
    borderRadius: 100,
    width: 45,
    height: 45,
    alignSelf: 'flex-start',
    marginLeft: 35,
    bottom: 55,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnConvertir: {
    backgroundColor: '#A6D79B',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  btnConvertirText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnVolver: {
    marginLeft: 10,
    backgroundColor: '#A6D79B',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  buttons: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "center"
  },
  active: {
    backgroundColor: '#FDFAE6',
    borderRadius: 100,
    width: 15,
    height: 15,
  },
  noActive: {
    backgroundColor: '#A6D79B',
    borderRadius: 100,
    width: 15,
    height: 15,
    marginLeft: 10
  },
});
