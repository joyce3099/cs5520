import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {
  const appName = "My Mobile App"
  const [text,setText] = useState("")
  console.log(text)

  function changeTextHandler(changeText){
    console.log("user is typing",changeText)
    setText(changeText)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name="My Mobile App" version={2}/>
      <TextInput 
        placeholder="type something" 
        style={styles.input} 
        value={text} 
        onChangeText={changeTextHandler}
      />
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
