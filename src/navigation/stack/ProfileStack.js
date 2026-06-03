import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen';
import WishListScreen from '../../screens/WishListScreen';

const profileStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="WishListScreen" component={WishListScreen} />
    </Stack.Navigator>
  );
};

export default profileStack;

const styles = StyleSheet.create({});
