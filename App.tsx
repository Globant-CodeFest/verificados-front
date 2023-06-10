import { StatusBar } from 'expo-status-bar';
import  Home from './screens/Home';
import  Conversation from './screens/Conversation';
import  SeleccionaTuGenero from './screens/SeleccionaTuGenero';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Match" component={Home} />
        <Stack.Screen name="Conversacion" component={Conversation} />
        <Stack.Screen name="Inicio" component={SeleccionaTuGenero} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
