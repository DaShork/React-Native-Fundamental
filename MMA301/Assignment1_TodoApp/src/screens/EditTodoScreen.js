import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TodoContext } from '../context/TodoContext';
import styles from '../styles/styles';

export default function EditTodoScreen({ navigation, route }) {
  const { tasks, updateTask } = useContext(TodoContext);
  const task = tasks.find((item) => item.id === route.params?.taskId) || {};
  const [title, setTitle] = useState(task.title || '');
  const [detail, setDetail] = useState(task.detail || '');

  const onSubmit = () => {
    if (!title.trim()) {
      Alert.alert('Validation', 'Please enter a task title.');
      return;
    }
    updateTask(task.id, title.trim(), detail.trim());
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Edit Task</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

      <KeyboardAvoidingView style={styles.body} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            placeholder="Update task title"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Detail</Text>
          <TextInput
            value={detail}
            onChangeText={setDetail}
            style={[styles.input, styles.textArea]}
            placeholder="Update task detail"
            placeholderTextColor="#999"
            multiline
          />
        </View>
        <View style={styles.editActions}>
          <TouchableOpacity style={[styles.button, styles.updateButton]} onPress={onSubmit}>
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
