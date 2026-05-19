import {
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";

export default function FloatingButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons
        name="add"
        size={28}
        color={COLORS.white}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",

    right: 24,
    bottom: 24,

    width: 64,
    height: 64,

    borderRadius: 999,

    backgroundColor: COLORS.primary,

    justifyContent: "center",
    alignItems: "center",

    elevation: 5,
  },
});