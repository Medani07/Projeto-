import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

export default function App() {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dados, setDados] = useState([]);

  // listar notificações do banco
  async function listar() {
    const resp = await fetch('http://10.0.2.2:3000/moradores');
    const json = await resp.json();
    setDados(json);
  }

  // salvar notificação
  async function salvar() {
    await fetch('http://10.0.2.2:3000/moradores', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        nome: titulo,
        apartamento: descricao
      })
    });

    listar();
    setTitulo('');
    setDescricao('');
  }

  useEffect(() => {
    listar();
  }, []);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Central de Notificações Acadêmicas</Text>

      <TextInput
        placeholder="Título da notificação"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />

      <Button title="Salvar Notificação" onPress={salvar} />

      <FlatList
        data={dados}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
          <Text style={styles.item}>
            🔔 {item.nome} - {item.apartamento}
          </Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  item: {
    marginTop: 10,
    fontSize: 16
  }
});
