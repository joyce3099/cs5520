import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Modal,Button } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const appName = "My Mobile App"
  const [text,setText] = useState("")
  const [isModalVisible,setIsModalVisible] = useState(false)
  // console.log(text)

  function receiveInput(data){
    console.log("receive input from input.js",data)
    setText(data)
    setIsModalVisible(false)
  }

  function dismissModal(){
    setIsModalVisible(false)
  }
  
  return (
    
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topView}>
        <Header name={appName} version={2}/>
        <Button title="Add a goal" onPress={() =>setIsModalVisible(true)}/>
        <Input inputHandler={receiveInput} modalVisible={isModalVisible} dismissModal={dismissModal}/>
        </View>
        <Text style={styles.bottomView}>{text}</Text>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderBottomWidth:2,
    borderBlockColor:"purple",
    width:"50%"
  },
  topView:{
    flex:1,
    alignItems: 'center',
  },
  bottomView:{
    flex:4,backgroundColor:"lightpink",
  }
});
