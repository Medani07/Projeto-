import React from 'react';
import { View, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('condo.db');
export default function App() {
function criarTabela() {
db.transaction(tx => {
tx.executeSql(
'CREATE TABLE IF NOT EXISTS moradores (id INTEGER PRIMARY KEY
AUTOINCREMENT, nome TEXT);'
);
});
}
function inserir() {
db.transaction(tx => {
tx.executeSql(
'INSERT INTO moradores (nome) values (?)',
['Carlos']
);
});
}
return (
<View>
<Button title="Criar Tabela" onPress={criarTabela}/>
<Button title="Inserir" onPress={inserir}/>
</View>
);
}

