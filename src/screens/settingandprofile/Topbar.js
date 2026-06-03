import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../Colors'
import Fonts from '../Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Topbar = () => {
  return (
    <View style={{flexDirection:"row", gap:95, paddingTop:30, marginLeft:20, paddingBottom:30}}>
        <TouchableOpacity >
    <Ionicons name="menu-outline" size={26} color={colors.homeiconbackgroundcolor} />
</TouchableOpacity>

      <Text style={{...Fonts.headingfont, color:colors.headingtextcolor}}>SETTINGS</Text>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({})