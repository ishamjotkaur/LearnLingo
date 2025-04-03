import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import supabase from '../supabaseClient';
 
export default function ProfilePage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('Loading...');
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetchUserData();
  }, []);
 
  const fetchUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setEmail(user.email);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };
 
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigation.reset({
        index: 0,
        routes: [{ name: 'SignInPage' }],
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Profile</Text>
     
      <Image
        source={require('../assets/user.png')}
        style={styles.profileImage}
      />
 
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>{loading ? 'Loading...' : email}</Text>
        </View>
      </View>
 
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.valueContainer}>
          <Text style={styles.value}>••••••••</Text>
        </View>
      </View>
 
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F5FF',
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 30,
    color: '#333',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 50,
  },
  detailContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    marginHorizontal: 16,
    shadowColor: '#000',
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  valueContainer: {
    minHeight: 24,
    justifyContent: 'center',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
  },
  logoutButton: {
    backgroundColor: '#B388EB',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});