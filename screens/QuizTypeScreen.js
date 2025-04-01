import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const flagImages = {
  english: require('../assets/Images/english.png'),
  spanish: require('../assets/Images/spanish.png'),
  french: require('../assets/Images/french.png')
};

const QuizTypeScreen = ({ route, navigation }) => {
  const { language } = route.params;
  const languageKey = language.toLowerCase();
  const flagImage = flagImages[languageKey];

  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <Image 
          source={flagImage} 
          style={styles.flagImage}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.header}>Choose Quiz Type: </Text>
      <Text style={styles.subheader}>For {language} language</Text>
      
      <TouchableOpacity 
        style={styles.quizButton}
        onPress={() => navigation.navigate('MCQQuiz', { language })}
      >
        <Text style={styles.buttonText}>Multiple Choice Quiz</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.quizButton}
        onPress={() => navigation.navigate('FillBlankQuiz', { language })}
      >
        <Text style={styles.buttonText}>Fill in the Blanks</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.quizButton}
        onPress={() => navigation.navigate('ImageQuiz', { language })}
      >
        <Text style={styles.buttonText}>Image Matching</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F8F5FF'
  },
  flagContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  flagImage: {
    width: 300,
    height: 190,
    borderColor: '#ddd',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333'
  },
  subheader: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#555'
  },
  quizButton: {
    backgroundColor: '#B388EB',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  }
});

export default QuizTypeScreen;