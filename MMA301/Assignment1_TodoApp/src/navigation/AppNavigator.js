import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoProvider } from '../context/TodoContext';
import HomeScreen from '../screens/HomeScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import EditTodoScreen from '../screens/EditTodoScreen';
import CompletedScreen from '../screens/CompletedScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add Todo" component={AddTodoScreen} />
          <Stack.Screen name="Edit Todo" component={EditTodoScreen} />
          <Stack.Screen name="Completed" component={CompletedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
}
