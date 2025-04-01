import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuizTypeScreen = ({ route, navigation }) => {
  const { language } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Quiz Type</Text>
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