import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* PART 3 */}
      <View style={styles.section}>
        <Text style={styles.title}>02 - Text</Text>
        <Text style={styles.text}>Yêu em Sang</Text>
        <Text style={styles.text}>Yêu em Phúc</Text>
      </View>

      {/* PART 4 */}
      <View style={styles.section}>
        <Text style={styles.title}>02 - 04.working with core components</Text>
        <Button
          title="Yêu em Khoi"
          onPress={() => {}}
        />
      </View>

      {/* PART 6 */}
      <View style={styles.section}>
        <Text style={styles.title}>02 - 06.exploring layout</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
              placeholder="Nhập tên người yêu"
              style={styles.input}
            />
            <Button
              title="Thêm người yêu"
              onPress={() => {}}
            />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Part 4 - List</Text>
        <Text>List người em yêu</Text>
        <Text style={styles.title}>Đã xong đến 02. Vid 9</Text>

      </View>
    
      <View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  section: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  text: {
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'white',
  },

});