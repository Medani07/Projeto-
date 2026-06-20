import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
  Alert
} from 'react-native';

export default function App() {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function entrarSistema() {

    if (usuario.trim() === '' || senha.trim() === '') {
      Alert.alert(
        'Atenção',
        'Preencha usuário e senha'
      );
      return;
    }

    Alert.alert(
      'Login realizado',
      `Bem-vindo(a), ${usuario}!`
    );
  }

  return (

    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>
        Portal Acadêmico
      </Text>

      <Text style={styles.subtitulo}>
        Acesse sua conta universitária
      </Text>

      <TextInput
        placeholder="Usuário acadêmico"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry={!mostrarSenha}
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <Pressable
        onPress={() => setMostrarSenha(!mostrarSenha)}
      >
        <Text style={styles.mostrarSenha}>
          {mostrarSenha
            ? 'Ocultar senha'
            : 'Mostrar senha'}
        </Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={entrarSistema}
      >
        <Text style={styles.botaoTexto}>
          Entrar
        </Text>
      </Pressable>

      <Pressable>
        <Text style={styles.criarConta}>
          Criar nova conta
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#eef2f7'
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50'
  },

  subtitulo: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    fontSize: 16
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15
  },

  mostrarSenha: {
    textAlign: 'right',
    color: '#4a90e2',
    marginBottom: 20
  },

  botao: {
    backgroundColor: '#4a90e2',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17
  },

  criarConta: {
    textAlign: 'center',
    marginTop: 20,
    color: '#4a90e2',
    fontWeight: 'bold'
  }

});