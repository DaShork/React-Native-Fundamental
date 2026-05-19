import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TodoContext } from '../context/TodoContext';
import styles from '../styles/styles';

export default function AddTodoScreen({ navigation }) {
  const { addTask } = useContext(TodoContext);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const onSubmit = () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Please enter a task title.');
      return;
    }
    addTask(title.trim(), detail.trim());
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Add Task</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

      <KeyboardAvoidingView style={styles.body} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            placeholder="Enter todo title"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Detail</Text>
          <TextInput
            value={detail}
            onChangeText={setDetail}
            style={[styles.input, styles.textArea]}
            placeholder="Enter todo detail"
            placeholderTextColor="#999"
            multiline
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
