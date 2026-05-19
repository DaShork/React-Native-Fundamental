import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

interface Props {
  title: string;
  count: number;
  color: string;
}

export default function StatsCard({
  title,
  count,
  color,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color },
      ]}
    >
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 18,

    borderRadius: 24,

    minHeight: 100,

    justifyContent: "space-between",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  count: {
    fontSize: 28,
    fontWeight: "700",
    alignSelf: "flex-end",
  },
});