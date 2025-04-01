// src/navigation/MainStack.js
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './MainTabs';
import QuizTypeScreen from '../screens/QuizTypeScreen';
import MCQQuizScreen from '../screens/MCQQuizScreen';
import FillBlankQuizScreen from '../screens/FillBlankQuizScreen';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainTabs" 
        component={MainTabs} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="QuizType" 
        component={QuizTypeScreen}
        options={({ route }) => ({ 
          title: `${route.params.language} Quizzes`,
          tabBarStyle: { display: 'none' } 
        })}
      />
      <Stack.Screen 
        name="MCQQuiz" 
        component={MCQQuizScreen}
        options={({ route }) => ({ 
          title: `${route.params.language} MCQ Quiz`,
          tabBarStyle: { display: 'none' }
        })}
      />
      <Stack.Screen 
        name="FillBlankQuiz" 
        component={FillBlankQuizScreen}
        options={({ route }) => ({ 
          title: `${route.params.language} Fill-in Quiz`,
          tabBarStyle: { display: 'none' }
        })}
      />
    </Stack.Navigator>
  );
}