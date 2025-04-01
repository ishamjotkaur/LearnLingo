import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { quizQuestions } from '../data/quizData';

const FillBlankQuizScreen = ({ route, navigation }) => {
  const { language } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);

  const allQuestions = quizQuestions[language]?.fillBlank || [];
  const currentQuestion = allQuestions[currentQuestionIndex];

  const checkAnswer = () => {
    const cleanUserAnswer = userAnswer.toLowerCase().trim();
    const correctAnswer = currentQuestion.answer.toLowerCase().trim();
    const isCorrect = cleanUserAnswer === correctAnswer;

    if (isCorrect) {
      setScore(score + 1);
      Alert.alert("Correct!", "Good job!");
    } else {
      Alert.alert("Oops!", `The correct answer is: ${currentQuestion.answer}`);
    }

    setUserAnswer('');

    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert(
        "Quiz Finished!",
        `Your final score: ${isCorrect ? score + 1 : score}/${allQuestions.length}`,
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    }
  };

  if (allQuestions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No questions available for {language}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{currentQuestion.question}</Text>
      
      <TextInput
        style={styles.inputBox}
        value={userAnswer}
        onChangeText={setUserAnswer}
        placeholder="Type your answer here"
      />
      
      <TouchableOpacity 
        style={styles.submitButton}
        onPress={checkAnswer}
        disabled={userAnswer === ''}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      
      <Text style={styles.counter}>
        Question {currentQuestionIndex + 1} of {allQuestions.length}
      </Text>
      
      <Text style={styles.scoreText}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  inputBox: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#6a1b9a',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  counter: {
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
  scoreText: {
    textAlign: 'center',
    color: '#6a1b9a',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default FillBlankQuizScreen;