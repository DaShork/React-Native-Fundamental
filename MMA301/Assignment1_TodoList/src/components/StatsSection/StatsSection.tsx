import { View, StyleSheet } from "react-native";
import StatsCard from "../StatsCard/StatsCard";
import { COLORS } from "../../constants/colors";

export default function StatsSection() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <StatsCard
          title="Today"
          count={6}
          color={COLORS.blue}
        />

        <StatsCard
          title="Scheduled"
          count={5}
          color={COLORS.yellow}
        />
      </View>

      <View style={styles.row}>
        <StatsCard
          title="All"
          count={14}
          color={COLORS.green}
        />

        <StatsCard
          title="Overdue"
          count={3}
          color={COLORS.pink}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,

    marginBottom: 28,
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },
});