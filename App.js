import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import relativeTime from "dayjs/plugin/relativeTime"
import dayjs from 'dayjs';

dayjs.extend(relativeTime);
export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" backgroundColor='white' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    marginTop: 55
  },
});

