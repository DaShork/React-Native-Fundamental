import React, { useContext, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TodoContext } from '../context/TodoContext';
import TaskCard from '../components/TaskCard';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {
  const { tasks, toggleComplete, deleteTask } = useContext(TodoContext);
  const [activeTab, setActiveTab] = useState('All');

  const filteredTasks = tasks.filter((item) => {
    if (activeTab === 'Completed') {
      return item.completed;
    }
    return true;
  });

  const renderItem = ({ item }) => (
    <TaskCard
      item={item}
      onPress={() => toggleComplete(item.id)}
      onEdit={() => navigation.navigate('Edit Todo', { taskId: item.id })}
      onDelete={() => deleteTask(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>TODO APP</Text>
        <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Completed')}>
          <Ionicons name="checkmark-done-circle-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={<Text style={styles.noTasksText}>No tasks found. Tap + to add a new todo.</Text>}
        />
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'All' && styles.tabButtonActive]}
          onPress={() => setActiveTab('All')}
        >
          <Text style={[styles.tabText, activeTab === 'All' && styles.tabTextActive]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Completed' && styles.tabButtonActive]}
          onPress={() => setActiveTab('Completed')}
        >
          <Text style={[styles.tabText, activeTab === 'Completed' && styles.tabTextActive]}>Completed</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('Add Todo')}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
