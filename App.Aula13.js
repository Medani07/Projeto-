import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [usuarioSalvo, setUsuarioSalvo] = useState('');

  async function salvar() {
    try {
      await AsyncStorage.setItem('usuario', 'Carlos');
      Alert.alert('Sucesso', 'Usuário salvo com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar');
    }
  }

  async function ler() {
    try {
      const valor = await AsyncStorage.getItem('usuario');
      setUsuarioSalvo(valor || 'Nada encontrado');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível ler os dados');
    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Persistência Local
      </Text>

      <Text style={styles.subtitulo}>
        AsyncStorage - Portal Acadêmico
      </Text>

      <Pressable style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar usuário</Text>
      </Pressable>

      <Pressable style={styles.botaoSecundario} onPress={ler}>
        <Text style={styles.botaoTexto}>Ler usuário</Text>
      </Pressable>

      {usuarioSalvo !== '' && (
        <View style={styles.card}>
          <Text style={styles.resultado}>
            Usuário salvo: {usuarioSalvo}
          </Text>
        </View>
      )}

    </View>
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
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50'
  },

  subtitulo: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    fontSize: 15
  },

  botao: {
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center'
  },

  botaoSecundario: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginTop: 20,
    elevation: 4
  },

  resultado: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333'
  }

});