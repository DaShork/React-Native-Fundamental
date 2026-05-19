import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { Task } from "../../types/task";
import { COLORS } from "../../constants/colors";

interface Props {
  task: Task;

  onToggle: () => void;

  onDelete: () => void;

  onEdit: () => void;
}

export default function TaskCard({
  task,
  onToggle,
  onDelete,
  onEdit,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
    >
      <View style={styles.left}>
        <View
          style={[
            styles.checkbox,
            task.completed &&
              styles.checkboxCompleted,
          ]}
        />

        <Text
          style={[
            styles.title,

            task.completed &&
              styles.completedText,
          ]}
        >
          {task.title}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onEdit}>
          <Ionicons
            name="create-outline"
            size={22}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDelete}>
          <Ionicons
            name="trash-outline"
            size={22}
            color={COLORS.danger}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,

    padding: 18,

    borderRadius: 22,

    marginBottom: 14,

    flexDirection: "row",

    justifyContent: "space-between",

    alignItems: "center",
  },

  left: {
    flexDirection: "row",

    alignItems: "center",

    flex: 1,
  },

  checkbox: {
    width: 22,
    height: 22,

    borderRadius: 999,

    borderWidth: 2,

    borderColor: COLORS.primary,

    marginRight: 12,
  },

  checkboxCompleted: {
    backgroundColor: COLORS.primary,
  },

  title: {
    fontSize: 16,

    color: COLORS.text,

    flex: 1,
  },

  completedText: {
    textDecorationLine: "line-through",

    opacity: 0.5,
  },

  actions: {
    flexDirection: "row",

    gap: 12,
  },
});