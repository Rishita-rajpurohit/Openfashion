import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Topbar from './Cart/Topbar'
import colors from './Colors'
import Card from './Cart/Card'
import ApplyCoupon from './Cart/ApplyCoupon'

const CartScreen = () => {
  return (
    <View style={{backgroundColor:colors.Screenbackgroundcolor, flex:1}}>

     <Topbar/>

     <ScrollView showsVerticalScrollIndicator={false} style={{marginLeft:15, marginRight:15}}>
 <Card/>

{/* <ApplyCoupon/> */}
     </ScrollView>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})