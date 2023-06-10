import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import DEMO from "../assets/data/demo";

import { useRoute } from '@react-navigation/native';

// Componente de mensaje individual
const Message = ({ message, isUser }) => (
  <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.receivedMessage]}>
    <Text style={styles.messageText}>{message}</Text>
  </View>
);

// Componente de conversación
const Conversation = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const scrollViewRef = useRef();

  useEffect(() => {
    const jugador = DEMO.find((item) => item.sofifa_id === route.params.paramKey);
    setMessages([{ text: `Hola soy ${jugador.short_name} preguntame lo que quieras `, isUser: false }]);
  }, []);

  const handleSend = async () => {
    if (currentMessage.length > 0) {
      setMessages([...messages, { text: currentMessage, isUser: true }]);
      setCurrentMessage('');
      scrollViewRef.current.scrollToEnd({ animated: true });
      const jugador = DEMO.find((item) => item.sofifa_id === route.params.paramKey);
      jugador.question = currentMessage;
      jugador.playerName = jugador.long_name;
      await fetchData(currentMessage, jugador);
    }
  };

  const route = useRoute();

  const fetchData = async (currentMessage, jugador) => {
    try {    
      const response = await fetch('http://167.172.15.143:8080/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jugador),
      });

      const json = await response.json();
      setMessages([...messages, { text: currentMessage, isUser: true }, { text: json.message, isUser: false }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.conversationContainer}
        ref={scrollViewRef}
      >
        {messages.map((message, index) => 
          <Message key={index} message={message.text} isUser={message.isUser} />
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={currentMessage}
          onChangeText={setCurrentMessage}
          placeholder="Escribe un mensaje"
        />
        <View style={styles.buttonContainer}>
          <Button title="Enviar" onPress={handleSend} color="#009688" />
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  conversationContainer: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 25,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    backgroundColor: '#FFFFFF',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default Conversation;