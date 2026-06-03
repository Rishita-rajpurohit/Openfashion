import { StyleSheet, Text, View, TouchableOpacity,  } from 'react-native'
import React from 'react'
import colors from '../Colors'
import Fonts from '../Fonts'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Topbar = () => {
  return (
    <View style={{flexDirection:"row", gap:118, marginRight:15, marginTop:40, justifyContent:"flex-end" }}>\
   
      <Text style={{...Fonts.headingfont, color:colors.headingtextcolor}}>My Cart</Text>

      {/* remove allitems from cart */}
      <TouchableOpacity>
      <FontAwesome name="trash" size={24} color="#5F6E6B" />
       </TouchableOpacity>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({})