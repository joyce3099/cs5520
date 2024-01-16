import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const appName = "My Mobile App"
  const [text,setText] = useState("")
  // console.log(text)
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name="My Mobile App" version={2}/>
      <Input text={text} onChangeText={setText}/>
      <Text>{text}</Text>
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
  input:{
    borderBottomWidth:2,
    borderBlockColor:"purple",
    width:"50%"
  }
});
