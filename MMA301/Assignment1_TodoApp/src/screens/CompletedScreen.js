import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TodoContext } from '../context/TodoContext';
import TaskCard from '../components/TaskCard';
import styles from '../styles/styles';

export default function CompletedScreen({ navigation }) {
  const { tasks, toggleComplete } = useContext(TodoContext);
  const completedTasks = tasks.filter((item) => item.completed);

  const renderItem = ({ item }) => (
    <TaskCard item={item} onPress={() => toggleComplete(item.id)} />
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerLeft}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Completed Task</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>
      <View style={styles.body}>
        <FlatList
          data={completedTasks}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={<Text style={styles.noTasksText}>No completed tasks yet.</Text>}
        />
      </View>
    </SafeAreaView>
  );
}
