import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

import { useNavigation } from '@react-navigation/native';

const SeleccionaTuGenero = () => {
    const navigation = useNavigation();
  const handleGenderSelect = () => {
    // Aquí puedes manejar la selección de género.
    navigation.navigate("Match")
  };

  return (
    <ImageBackground
    source={require("../assets/images/jugador.jpeg")}
    style={styles.bg}
  >
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Por favor, selecciona tu género</Text>
        
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleGenderSelect('male')} style={styles.button}>
          <Ionicons name="male-outline" size={32} color="blue" />
          <Text>Hombre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGenderSelect('female')} style={styles.button}>
          <Ionicons name="female-outline" size={32} color="pink" />
          <Text>Mujer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 1,
    marginTop: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 50,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SeleccionaTuGenero;