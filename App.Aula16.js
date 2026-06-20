import React, { useEffect, useState } from 'react';
import { View, Button, Alert, Text, FlatList } from 'react-native';
import Realm from 'realm';

const PessoaSchema = {
  name: 'Pessoa',
  properties: {
    nome: 'string',
  },
};

export default function App() {

  const [lista, setLista] = useState([]);

  // FUNÇÃO PARA SALVAR
  async function salvarPessoa() {
    const realm = await Realm.open({ schema: [PessoaSchema] });

    realm.write(() => {
      realm.create('Pessoa', {
        nome: 'Aluno ' + Math.floor(Math.random() * 100),
      });
    });

    Alert.alert('Salvo com sucesso!');
    buscarPessoas(); // atualiza lista
  }

  // FUNÇÃO PARA BUSCAR
  async function buscarPessoas() {
    const realm = await Realm.open({ schema: [PessoaSchema] });

    const dados = realm.objects('Pessoa');

    // converter para array normal
    setLista([...dados]);
  }

  // executa ao abrir o app
  useEffect(() => {
    buscarPessoas();
  }, []);

  return (
    <View style={{ flex:1, padding:30 }}>

      <Button title="Salvar nova pessoa" onPress={salvarPessoa} />

      <Text style={{ marginTop:20, fontSize:18 }}>
        Pessoas cadastradas:
      </Text>

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize:16, marginTop:10 }}>
            • {item.nome}
          </Text>
        )}
      />

    </View>
  );
}