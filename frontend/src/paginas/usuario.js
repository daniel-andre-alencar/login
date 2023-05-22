import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import usuarioService from '../services/usuarioService';


const Cadastro = () => {
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    senha: '',
    nrsec: ''
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    try {
      const teste = formData.nrsec = '123';
  
      if (
        formData.nome.trim() === '' ||
        formData.email.trim() === '' ||
        formData.senha.trim() === ''
      ) {
        alert('Preencha todos os campos!');
        return;
      }
  
      await usuarioService.postUsuario(formData, teste);
      alert('Inserido com Sucesso!');
  
      // Zerar os valores dos inputs
      setFormData({
        email: '',
        nome: '',
        senha: '',
        nrsec: ''
      });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Faça o seu Cadastro</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor='#FFFFFF'
          value={formData.nome}
          onChangeText={(text) => handleChange('nome', text)}
          required
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor='#FFFFFF'
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          required

        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor='#FFFFFF'
          value={formData.senha}
          onChangeText={(text) => handleChange('senha', text)}
          secureTextEntry
          required

        />
      </View>
      
      <Button title="Cadastrar" onPress={handleSubmit} color="#f72585" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  heading: {
    padding: 0,
    margin: 0,
    fontWeight: '500',
    fontSize: 23,
    color: '#fff',
    marginBottom: 20,
 
  },
  formGroup: {
    marginBottom: 20,
    width:'50%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  input: {
    padding: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#555',
    marginTop: 5,
    borderRadius: 4,
    backgroundColor: '#444',
    color: '#fff',
    width: '100%',
  },
};

export default Cadastro;
