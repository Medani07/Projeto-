import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default function App() {

  return (

    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135789.png'
        }}
        style={styles.logo}
      />

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Aviso Acadêmico
        </Text>

        <Text style={styles.texto}>
          O prazo para entrega do trabalho foi atualizado
          pela coordenação do curso.
        </Text>

        <Text style={styles.data}>
          📅 Entrega até sexta-feira
        </Text>

      </View>

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

  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },

  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },

    shadowOpacity: 0.1,
    shadowRadius: 5
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center'
  },

  texto: {
    fontSize: 17,
    color: '#555',
    lineHeight: 25,
    textAlign: 'center'
  },

  data: {
    marginTop: 20,
    fontSize: 15,
    color: '#4a90e2',
    textAlign: 'center',
    fontWeight: 'bold'
  }

});