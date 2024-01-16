import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const appName = "My Mobile App"

  return (
    <View style={styles.container}>
      <Text> Welcome to {appName}</Text>
      <StatusBar style="auto" />
      <Header name="My Mobile App" version={2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
