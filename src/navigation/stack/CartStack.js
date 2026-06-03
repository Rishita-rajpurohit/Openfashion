import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartScreen from '../../screens/CartScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const CartStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default CartStack

const styles = StyleSheet.create({})