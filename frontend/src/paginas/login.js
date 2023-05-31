import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usuarioService from '../services/usuarioService';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    console.log(email, senha);

    usuarioService
      .loginUsuario(email, senha)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          Alert.alert('Bem-vindo!');
          setEmail('');
          setSenha('');
        }
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Email ou senha inválidos');
      });
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.wrapper}>
      <Image source={require('../imagens/logo.png')} style={styles.logo} />

      <View style={styles.contentLogin}>
        <Text style={styles.heading}>Entre Agora</Text>

        <View style={styles.boxLogin}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#FFFFFF"
            value={email}
            onChangeText={(text) => setEmail(text)}
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Digite sua  Senha"
            placeholderTextColor="#FFFFFF"
            secureTextEntry
            value={senha}
            onChangeText={(text) => setSenha(text)}
            required
          />
          {error && <Text style={styles.errorMessage}>{error}</Text>}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#080B16',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },

  heading: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 20,
    color: '#FFFFFF',
    
  },

  errorMessage: {
    fontSize: 14,
    color: '#4125f7',
    margin: 0,
  },
  input: {
    padding: 20,
    fontSize: 14,
    borderWidth: 2,
    marginBottom: 20,
    marginTop: 5,
    color: '#FFFFFF',
    backgroundColor: '#',
    borderColor: '#890A1F',
    borderRadius: 15,
    paddingHorizontal: 80,
    paddingVertical: 15,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#890A1F',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    height:45,
    with:197,
    top:55
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
};

export default Login;
