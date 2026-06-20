import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default function App() {

  const alunos = [
    {
      id: '1',
      nome: 'Carlos Silva',
      curso: 'Análise e Desenvolvimento'
    },
    {
      id: '2',
      nome: 'Ana Souza',
      curso: 'Engenharia de Software'
    },
    {
      id: '3',
      nome: 'Pedro Santos',
      curso: 'Ciência da Computação'
    },
    {
      id: '4',
      nome: 'Mariana Lima',
      curso: 'Sistemas de Informação'
    }
  ];

  return (

    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png'
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        Lista Acadêmica
      </Text>

      <Text style={styles.subtitulo}>
        Alunos cadastrados no sistema
      </Text>

      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}

        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.nome}>
              👨‍🎓 {item.nome}
            </Text>

            <Text style={styles.curso}>
              {item.curso}
            </Text>

          </View>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    paddingTop: 60,
    paddingHorizontal: 20
  },

  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginBottom: 15
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50'
  },

  subtitulo: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 25,
    fontSize: 15
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,

    elevation: 4,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },

    shadowOpacity: 0.1,
    shadowRadius: 4
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50'
  },

  curso: {
    marginTop: 5,
    color: '#666',
    fontSize: 14
  }

});