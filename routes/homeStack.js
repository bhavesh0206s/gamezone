import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'

const Stack = createStackNavigator();

export default function HomeStack() {
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
        name="Home"
        options={({ navigation, route }) => ({
          headerTitle: () => <Header navigation={navigation} title='GameZone'/>,
        })}
        component={Home} 
      />
      <Stack.Screen
        name="ReviewDetails" 
        options={{
          title: 'Review Details',
        }}
        component={ReviewDetails} 
      />
    </Stack.Navigator>
  );
}
