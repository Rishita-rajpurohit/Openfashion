import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigation from './MainTabNavigator';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import AllProductScreen from '../screens/AllProductsScreen';
import SearchScreen from '../screens/SearchScreen';
import WishListScreen from '../screens/WishListScreen';
import Login1 from '../screens/Login1';
import Signup from '../screens/Signup';
const RootNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="AllProductScreen" component={AllProductScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login1" component={Login1} />

      <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
