import { StyleSheet, Text, View , TextInput, Button,Modal} from 'react-native'
import React from 'react'
import { useState } from 'react';

const Input = ({inputHandler ,modalVisible,dismissModal}) => {

    console.log(inputHandler);
    const [text,setText] = useState("")
    
    function changeTextHandler(changeText){
        console.log("user is typing",changeText)
        setText(changeText)
      }   
      
    function confirmHandler(){
      inputHandler(text)
    }

    function cancelHandler(){
      // hide the modal
      dismissModal()

    }

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
       <TextInput 
        placeholder="type something" 
        style={styles.input} 
        value={text} 
        onChangeText={changeTextHandler}
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="confirm" onPress={confirmHandler}/>
        </View>
        <View style={styles.button}>
          <Button title="cancel" onPress={cancelHandler}/>
        </View>
      </View>
      </View>
    </Modal>
  )
}

export default Input

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
    input:{
        borderBottomWidth:2,
        borderBlockColor:"purple",
        width:"50%",
      },
    buttons:{
      flexDirection:"row",
      justifyContent:"space-between"
    },
    button:{
      backgroundColor:"pink",
      margin:20,
    }
      

})