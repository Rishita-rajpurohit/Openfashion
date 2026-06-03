import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fonts from '../Fonts'
import colors from '../Colors'

const Topbar = () => {
  return (
    <View style={styles.maincontainer}>
      <Text style={{...Fonts.headingfont, color:colors.headingtextcolor, paddingLeft:15, paddingTop:24, paddingBottom:16}}>My Wishlist</Text>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({

    maincontainer:{
        borderBottomWidth:1, borderColor:colors.bottombordercolor,
        
    }
})