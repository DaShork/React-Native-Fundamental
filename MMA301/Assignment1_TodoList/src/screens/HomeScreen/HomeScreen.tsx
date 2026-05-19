import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import { useState } from "react";

import Header from "../../components/Header/Header";
import StatsSection from "../../components/StatsSection/StatsSection";
import TaskInput from "../../components/TaskInput/TaskInput";
import TaskCard from "../../components/TaskCard/TaskCard";
import FloatingButton from "../../components/FloatingButton/FloatingButton";

import { COLORS } from "../../constants/colors";
import { mockTasks } from "../../data/mockTask";
import { Task } from "../../types/task";

export default function HomeScreen() {
  const [tasks, setTasks] =
    useState<Task[]>(mockTasks);

  const [text, setText] = useState("");

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const handleAddOrEdit = () => {
    if (!text.trim()) return;

    if (editingId) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingId
            ? { ...task, title: text }
            : task
        )
      );

      setEditingId(null);
    } else {
      const newTask = {
        id: Date.now().toString(),
        title: text,
        completed: false,
      };

      setTasks([newTask, ...tasks]);
    }

    setText("");
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <StatsSection />

      <Text style={styles.sectionTitle}>
        Today's Task
      </Text>

      <TaskInput
        value={text}
        onChangeText={setText}
        onPress={handleAddOrEdit}
        isEditing={!!editingId}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onToggle={() =>
              toggleTask(item.id)
            }
            onDelete={() =>
              deleteTask(item.id)
            }
            onEdit={() => {
              setText(item.title);

              setEditingId(item.id);
            }}
          />
        )}
      />

      <FloatingButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: COLORS.background,

    paddingHorizontal: 20,

    paddingTop: 20,
  },

  sectionTitle: {
    fontSize: 22,

    fontWeight: "700",

    marginBottom: 18,
  },
});