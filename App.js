import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import ChatRoom from './src/Screens/ChatRoom';

dayjs.extend(relativeTime);
export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <ChatRoom />
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

