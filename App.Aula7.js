// ==========================================
// AULA 7 — COMPONENTES E INTERFACE
// Projeto adaptado: Central Acadêmica
// Aluna: Kelen Medani
// ==========================================

import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  Image,
  ScrollView,
  Switch,
  StyleSheet
} from 'react-native';

export default function Index() {

  // ==========================================
  // PARTE 1 — useState
  // Controle de estados do aplicativo
  // ==========================================

  const [aluno, setAluno] = useState('');
  const [alertasAtivos, setAlertasAtivos] = useState(true);

  // ==========================================
  // PARTE 2 — Função com Alert
  // ==========================================

  function ativarConta() {

    if (aluno.trim() === '') {

      Alert.alert(
        'Atenção',
        'Informe seu nome para ativar!'
      );

      return;
    }

    Alert.alert(
      'Conta acadêmica ativa',
      `Bem-vindo(a) ${aluno}!`
    );
  }

  // ==========================================
  // PARTE 3 — Array e renderização dinâmica
  // ==========================================

  const notificacoesAcademicas = [

    'Nova atividade disponível na plataforma',

    'Prova de Matemática na sexta-feira',

    'Prazo do trabalho prorrogado',

    'Frequência atualizada no sistema',

    'Novo material enviado pelo professor'

  ];

  // ==========================================
  // PARTE 4 — Interface visual
  // Componentes React Native
  // ==========================================

  return (

    <ScrollView style={styles.page}>

      {/* Cabeçalho */}

      <View style={styles.card}>

        <Text style={styles.header}>
          Central Acadêmica
        </Text>

        <Text style={styles.subtitle}>
          Notificações da faculdade
        </Text>

      </View>

      {/* Imagem */}

      <View style={styles.card}>

        <Image

          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png'
          }}

          style={styles.image}

        />

      </View>

      {/* Campo TextInput */}

      <View style={styles.card}>

        <Text style={styles.label}>
          Nome do aluno:
        </Text>

        <TextInput

          style={styles.input}

          placeholder="Digite seu nome"

          value={aluno}

          onChangeText={setAluno}

        />

        <Text style={styles.preview}>
          Aluno: {aluno || '---'}
        </Text>

      </View>

      {/* Botão Pressable */}

      <View style={styles.card}>

        <Pressable

          style={styles.button}

          onPress={ativarConta}

        >

          <Text style={styles.buttonText}>
            Ativar notificações
          </Text>

        </Pressable>

      </View>

      {/* Switch */}

      <View style={styles.switchContainer}>

        <Text style={styles.label}>
          Receber alertas acadêmicos
        </Text>

        <Switch

          value={alertasAtivos}

          onValueChange={setAlertasAtivos}

        />

      </View>

      {/* Lista dinâmica */}

      <View style={styles.card}>

        <Text style={styles.subtitle}>
          Últimos avisos:
        </Text>

        {notificacoesAcademicas.map((item, index) => (

          <Text

            key={index}

            style={styles.listItem}

          >

            📚 {item}

          </Text>

        ))}

      </View>

    </ScrollView>

  );

}

// ==========================================
// PARTE 5 — StyleSheet
// Estilização do aplicativo
// ==========================================

const styles = StyleSheet.create({

  page: {
    flex: 1,
    backgroundColor: '#eef2f7',
    paddingTop: 60,
    paddingHorizontal: 18
  },

  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 25,
    elevation: 3
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 25
  },

  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c3e50'
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5
  },

  label: {
    fontSize: 15,
    marginBottom: 8
  },

  preview: {
    marginTop: 8,
    fontStyle: 'italic',
    color: '#666'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12
  },

  button: {
    backgroundColor: '#4a90e2',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

  image: {
    width: 110,
    height: 110,
    alignSelf: 'center'
  },

  listItem: {
    fontSize: 14,
    marginBottom: 6,
    color: '#444'
  },

});