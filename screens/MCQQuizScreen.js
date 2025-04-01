import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { quizQuestions } from '../data/quizData';

const MCQQuizScreen = ({ route, navigation }) => {
  const { language } = route.params;
  const questions = quizQuestions[language]?.mcq || [];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const handlePress = (picked) => {
    setSelected(picked);
    
    if (picked === questions[current].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        Alert.alert(
          "Quiz Done",
          `You got ${score + (picked === questions[current].correctAnswer ? 1 : 0)} out of ${questions.length} right!`,
          [{ text: "OK", onPress: () => navigation.goBack() }]
        );
      }
    }, 500);
  };

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No questions found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questions[current].question}</Text>
      
      {questions[current].options.map((option, i) => (
        <TouchableOpacity
          key={i}
          style={[
            styles.optionButton,
            selected === i && {
              backgroundColor: i === questions[current].correctAnswer ? 'lightgreen' : 'pink'
            }
          ]}
          onPress={() => handlePress(i)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
      
      <View style={styles.footer}>
        <Text style={styles.progressText}>Question: {current + 1}/{questions.length}</Text>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  optionButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  progressText: {
    color: '#666',
  },
  scoreText: {
    color: '#6a1b9a', 
    fontWeight: 'bold',
  },
});

export default MCQQuizScreen;