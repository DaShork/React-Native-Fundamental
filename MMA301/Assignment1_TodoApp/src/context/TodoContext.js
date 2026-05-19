import React, { createContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@todoapp_tasks';

export const TodoContext = createContext({});

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      if (saved) {
        setTasks(JSON.parse(saved));
      }
    } catch (error) {
      console.log('Failed to load tasks:', error);
    }
  };

  const saveTasks = async (nextTasks) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextTasks));
    } catch (error) {
      console.log('Failed to save tasks:', error);
    }
  };

  const addTask = (title, detail) => {
    const nextTasks = [
      { id: Date.now().toString(), title, detail, completed: false },
      ...tasks,
    ];
    setTasks(nextTasks);
    saveTasks(nextTasks);
  };

  const updateTask = (id, title, detail) => {
    const nextTasks = tasks.map((task) =>
      task.id === id ? { ...task, title, detail } : task
    );
    setTasks(nextTasks);
    saveTasks(nextTasks);
  };

  const deleteTask = (id) => {
    Alert.alert('Delete task', 'Do you want to remove this task?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          const nextTasks = tasks.filter((task) => task.id !== id);
          setTasks(nextTasks);
          saveTasks(nextTasks);
        },
      },
    ]);
  };

  const toggleComplete = (id) => {
    const nextTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(nextTasks);
    saveTasks(nextTasks);
  };

  return (
    <TodoContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
}
