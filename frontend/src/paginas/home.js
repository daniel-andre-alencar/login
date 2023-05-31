import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.page}>
      <View style={styles.formLogin}>
        <View style={styles.logoContainer}>
          <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastro}>
            <Text style={styles.btnText}>Cadastro</Text>
          </TouchableOpacity>
          <Image
            source={require('../imagens/logo.png')}
            style={styles.logo}
          />
        </View>
        <Image
          source={require('../imagens/im.png')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#080B16',
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  cadastroButton: {
    position: 'absolute',
    width: 100,
    height: 35,
    left: 10, // Altere o valor para ajustar a posição à esquerda
    top: -31,
    backgroundColor: 'transparent', // Altere a cor de fundo para transparente
    borderWidth: 2, // Adicione a largura da borda
    borderColor: '#890A1F', // Defina a cor da borda
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#890A1F',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    height:50,
    with:132,
   
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
};

export default Home;
