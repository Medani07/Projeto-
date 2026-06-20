import React from 'react';
import { View, Button, Alert } from 'react-native';
import Realm from 'realm';

const PessoaSchema = {
  name: 'Pessoa',
  properties: {
    nome: 'string',
  },
};

export default function App() {

  async function salvarPessoa() {
    try {
      const realm = await Realm.open({
        schema: [PessoaSchema],
      });

      realm.write(() => {
        realm.create('Pessoa', {
          nome: 'Carlos',
        });
      });

      Alert.alert('Sucesso', 'Pessoa salva no banco!');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Falha ao salvar no Realm');
    }
  }

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button title="Salvar Realm" onPress={salvarPessoa} />
    </View>
  );
}
