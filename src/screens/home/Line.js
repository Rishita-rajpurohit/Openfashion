import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../Colors'

const Line = () => {
  return (
     <View style={styles.borderline}>
      <View style={styles.line}></View>
      <View style={styles.sqaure}></View>
      <View style={styles.line}></View>
    </View>
  )
}

export default Line

const styles = StyleSheet.create({
    line:{
  width: 50,
  height: 0.5,
  backgroundColor: colors.iconcolor2,
  marginTop:5,
},
sqaure:{
  marginHorizontal:2,
  width:10,
  height:10,
    borderColor:colors.iconcolor2,
    borderWidth:0.3,
transform: [{ rotate: '45deg' }]
},
borderline:{
  flexDirection:"row",
 
  justifyContent:"center",
  marginBottom:23,
  marginTop:10,
},
})