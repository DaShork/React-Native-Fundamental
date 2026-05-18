import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hello Jack,</Text>

        <Text style={styles.subtitle}>
          You have work today
        </Text>
      </View>

      <Ionicons
        name="notifications-outline"
        size={24}
        color={COLORS.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text,
  },

  subtitle: {
    marginTop: 4,
    color: COLORS.subText,
    fontSize: 14,
  },
});