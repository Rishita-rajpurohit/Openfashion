import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WishListScreen from '../../screens/WishListScreen'

const WishlistStack = () => {
    const Stack = createNativeStackNavigator();

  return (
  <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='WishListScreen' component={WishListScreen}/>
  </Stack.Navigator> 
  )
}

export default WishlistStack

const styles = StyleSheet.create({})