import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
  const handleLanguageSelect = (language) => {
    navigation.navigate('QuizType', { language });
  };
  const logo = require('../assets/Images/learn-lingo.png');

  return (
      <View style={styles.container}>
           <Image 
             source={logo} 
             style={styles.logo}
             resizeMode="contain"
           />
      <Text style={styles.header}>Welcome Back!</Text>
      <Text style={styles.subheader}>Select a language:</Text>
      
      <View style={styles.languageContainer}>
        <TouchableOpacity 
          style={styles.languageButton}
          onPress={() => handleLanguageSelect('English')}
        >
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.languageButton}
          onPress={() => handleLanguageSelect('Spanish')}
        >
          <Text style={styles.languageText}>Spanish</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.languageButton}
          onPress={() => handleLanguageSelect('French')}
        >
          <Text style={styles.languageText}>French</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F5FF',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  languageContainer: {
    width: '100%',
    maxWidth: 300,
  },
  languageButton: {
    backgroundColor: '#B388EB',
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  languageText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default LandingPage;