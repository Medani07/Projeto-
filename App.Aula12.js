import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Portal Acadêmico
      </Text>

      <Text style={styles.subtitulo}>
        Bem-vindo ao sistema
      </Text>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Avisos')}
      >
        <Text style={styles.botaoTexto}>
          Ir para Avisos
        </Text>
      </Pressable>

    </View>
  );
}

function AvisosScreen() {

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Avisos
      </Text>

      <Text style={styles.texto}>
        📚 Nenhum aviso novo no momento.
      </Text>

    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4a90e2'
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Avisos" component={AvisosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    justifyContent: 'center',
    padding: 25
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: 10
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30
  },

  texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555'
  },

  botao: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }

});