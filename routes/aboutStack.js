import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header'
import About from '../screens/about';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#445',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen 
        name="About"
        options={({ navigation, route }) => ({
          headerTitle: () => <Header navigation={navigation} title='About GameZone'/>,
        })}
        component={About} 
      />
    </Stack.Navigator>
  );
}
