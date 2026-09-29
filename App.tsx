import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { RadarScreen } from './src/screens/RadarScreen';
import { SOSScreen } from './src/screens/SOSScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#09090b', borderBottomWidth: 0 },
          headerTintColor: '#fff',
          tabBarStyle: { backgroundColor: '#09090b', borderTopColor: '#27272a' },
          tabBarActiveTintColor: '#10b981',
          tabBarInactiveTintColor: '#52525b',
        }}
      >
        <Tab.Screen name="Radar" component={RadarScreen} options={{ title: 'Mesh Radar' }} />
        <Tab.Screen name="SOS" component={SOSScreen} options={{ title: 'Emergency SOS' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}