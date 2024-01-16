import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react';

const Input = () => {
    const [text,setText] = useState("")
    console.log(text)

    function changeTextHandler(changeText){
        console.log("user is typing",changeText)
        setText(changeText)
      }    

  return (
    <View>
       <TextInput 
        placeholder="type something" 
        style={styles.input} 
        value={text} 
        onChangeText={changeTextHandler}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:2,
        borderBlockColor:"purple",
        width:"50%"
      }
})