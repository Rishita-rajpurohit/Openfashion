import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {Authstorage} from '../services/storage/authStorage'

const SplashScreen = () => {
    const navigation=useNavigation();
    // useEffect(()=>{
    //     const timer=setTimeout(()=>{
    //         navigation.replace("MainTabNavigation")
    //     },2000)

    //     return()=>clearTimeout(timer)
    // },[navigation]);


useEffect(()=>{
  checktoken();
},[])


const checktoken = async()=>{
try{

 const token = await Authstorage.getToken();

 setTimeout(()=>{

if(!token){
  navigation.replace('Login1')
}
else if(token){
   navigation.replace('MainTabNavigation')
}

 }, 2000)


}
catch(error){
  console.log("error in splash screen login token:", error)
}


}


  return (
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
   <Image source={require('../assets/images/splash.png')}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})