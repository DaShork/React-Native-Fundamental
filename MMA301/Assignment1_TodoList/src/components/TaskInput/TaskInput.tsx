import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS } from "../../constants/colors";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onPress: () => void;
  isEditing: boolean;
}

export default function TaskInput({
  value,
  onChangeText,
  onPress,
  isEditing,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add new task..."
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          {isEditing ? "Edit" : "Add"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    gap: 12,

    marginBottom: 24,
  },

  input: {
    flex: 1,

    backgroundColor: COLORS.white,

    paddingHorizontal: 18,
    paddingVertical: 16,

    borderRadius: 20,

    fontSize: 16,
  },

  button: {
    backgroundColor: COLORS.primary,

    paddingHorizontal: 20,

    borderRadius: 20,

    justifyContent: "center",
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: "700",
  },
});