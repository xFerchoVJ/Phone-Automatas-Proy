import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Pressable,
  View,
} from 'react-native';
import { Formulario } from './src/components/Formulario';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [decimal, setDecimal] = useState(null);
  const startHandle = () => {
    setModalVisible(!modalVisible);
    console.log(modalVisible);
  };
  return (
    <SafeAreaView style={styles.primaryView}>
      <Image
        source={require('./src/assets/logo-removebg-preview.png')}
        style={styles.logo}
      />
      <Text style={styles.mainText}>Converter</Text>
      <Text style={styles.descriptionText}>
        Convertidor de números binarios a
      </Text>
      <Text style={styles.descriptionText}>números decimales</Text>
      <Pressable style={styles.btnStart} onPress={startHandle}>
        <Text style={styles.btnStartText}>Start</Text>
      </Pressable>
      <View style={styles.buttons}>
        <View style={styles.active}></View>
        <View style={styles.noActive}></View>
      </View>
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        decimal={decimal}
        setDecimal={setDecimal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  primaryView: {
    backgroundColor: '#628C80',
    flex: 1,
  },
  logo: {
    width: 250,
    height: 250,
    marginHorizontal: 85,
    marginTop: 90,
    marginBottom: 50,
  },
  mainText: {
    color: '#FDFAE6',
    textAlign: 'center',
    fontSize: 38,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 12,
    letterSpacing: 5,
  },
  descriptionText: {
    textAlign: 'center',
    color: '#FDFAE6',
    fontSize: 19,
    fontWeight: '500',
  },
  btnStart: {
    backgroundColor: '#A6D79B',
    padding: 20,
    marginTop: 80,
    marginHorizontal: 130,
    borderRadius: 10,
  },
  btnStartText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "center"
  },
  active: {
    backgroundColor: '#A6D79B',
    borderRadius: 100,
    width: 15,
    height: 15,
  },
  noActive: {
    backgroundColor: '#FDFAE6',
    borderRadius: 100,
    width: 15,
    height: 15,
    marginLeft: 10
  },
});
export default App;
