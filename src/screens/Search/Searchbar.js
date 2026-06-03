import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Fonts from '../Fonts'
import colors from '../Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Searchbar = () => {
  return (
    <View style={styles.Searchbarconatiner}>
<Ionicons name="search" size={24} color={colors.homeiconbackgroundcolor} />
<View style={{width:260, height:42, }}>
<TextInput placeholder='SEARCH'placeholderTextColor={colors.textcolor} style={{fontSize:16, ...Fonts.Titlefont,
  
}} ></TextInput></View>

<TouchableOpacity>
     <Ionicons name="close-circle" size={24} color="black" />
     </TouchableOpacity>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
Searchbarconatiner:{
    width:342,
    height:42,

    marginLeft:15,
    marginRight:15,
    backgroundColor:colors.searchbarcolor,
    marginTop:40,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingLeft:10,
    paddingRight:10,
    borderRadius:5

}


})  