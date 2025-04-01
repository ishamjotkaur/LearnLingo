// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInPage from './screens/SignInPage';
import MainStack from './navigation/MainStack';
import SignUpScreen from './screens/SignUpScreen';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SignInPage">
        <RootStack.Screen 
          name="SignInPage" 
          component={SignInPage} 
          options={{ headerShown: false }} 
        />
        <RootStack.Screen 
          name="MainApp" 
          component={MainStack}
          options={{ headerShown: false }} 
        />
        <RootStack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{ title: 'Create Account' }}
      />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}