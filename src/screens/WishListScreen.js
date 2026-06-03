import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import colors from './Colors'
import Fonts from './Fonts'
import Topbar from './wishlist/Topbar'
import WishlistCard from './wishlist/WishlistCard'


const WishListScreen = () => {
  return (
    <View style={styles.mainContainer}>

      <Topbar/>
     <ScrollView showsVerticalScrollIndicator={false} style={{paddingLeft:15, paddingRight:15}}>

<WishlistCard/>


     </ScrollView>


    </View>
  )
}

export default WishListScreen

const styles = StyleSheet.create({
mainContainer:{
  backgroundColor:colors.Screenbackgroundcolor,
flex:1  
  
  
}



})