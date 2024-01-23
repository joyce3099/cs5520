import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({name,children}) {
//   console.log(props);
  return (
    <View >
      <Text style={styles.header}>Welcome to {name}</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    color:"blue",
    fontSize:20,
    borderColor:"blue",
    borderWidth:2,
  }
})