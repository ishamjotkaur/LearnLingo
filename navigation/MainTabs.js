import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import LandingPage from '../screens/LandingPage';
import ConversationSimulator from '../screens/ConversationSimulator';
import ProfilePage from '../screens/ProfilePage';


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          
          if (route.name === 'Home') {
            iconSource = require('../assets/icons/home.png');
          } else if (route.name === 'Conversation') {
            iconSource = require('../assets/icons/chat.png');
          } else if (route.name === 'Profile') {
            iconSource = require('../assets/icons/profile.png');
          }

          return (
            <Image 
              source={iconSource}
              style={{ 
                width: size, 
                height: size,
                tintColor: color 
              }}
            />
          );
        },
        tabBarActiveTintColor: '#B388EB',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          backgroundColor: 'white',
          height: 60,
          paddingBottom: 5,
        },
        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={LandingPage} />
      <Tab.Screen name="Conversation" component={ConversationSimulator} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}