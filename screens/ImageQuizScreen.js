import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { quizQuestions } from '../data/quizData';

const ImageQuizScreen = ({ route, navigation }) => {
  const { language } = route.params;
  const questions = quizQuestions[language]?.imageMatch || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const currentQuestion = questions[currentIndex];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
      Alert.alert("Correct!", "Well done!");
    } else {
      Alert.alert("Wrong", `The correct answer is: ${currentQuestion.correctAnswer}`);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      Alert.alert(
        "Quiz Completed!",
        `Your score: ${score}/${questions.length}`,
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    }
  };

  if (questions.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No image quizzes available for {language}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is this?</Text>
      
      <Image 
        source={currentQuestion.questionImage} 
        style={styles.questionImage}
        resizeMode="contain"
      />
      
      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <Text style={styles.score}>Score: {score}/{questions.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#F5F7FA',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
  questionImage: {
    width: 200,
    height: 200,
    marginBottom: 30
  },
  optionsContainer: {
    width: '100%',
    marginBottom: 20
  },
  optionButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    alignItems: 'center'
  },
  optionText: {
    fontSize: 16,
    color: '#333'
  },
  score: {
    fontSize: 18,
    color: '#6a1b9a',
    fontWeight: 'bold'
  }
});

export default ImageQuizScreen;