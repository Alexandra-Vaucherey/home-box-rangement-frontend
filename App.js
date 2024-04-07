import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Accueil'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profil'}}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: 'Bienvenue'}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{title: 'Inscription'}}/>
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{title: 'Tableau de bord'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
