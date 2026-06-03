import { StyleSheet, Text, View, ScrollView, TouchableOpacity,  } from 'react-native'
import React from 'react'
import colors from './Colors'
import Fonts from './Fonts'
import Topbar from './settingandprofile/Topbar'
import LoginDetails from './settingandprofile/LoginDetails'
import GeneralSettings from './settingandprofile/GeneralSettings'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const ProfileScreen = () => {
  return (
    <View style={{backgroundColor:colors.Screenbackgroundcolor, flex:1}}>
     <Topbar/>

<ScrollView showsVerticalScrollIndicator={false}>
<LoginDetails/>
<GeneralSettings/>

</ScrollView>

<TouchableOpacity style={{height:65, width:65, borderRadius:50, backgroundColor:colors.Screenbackgroundcolor
  , justifyContent:"center", alignItems:"center", position:"absolute", top:650, right:15}}>

    <MaterialIcons name="message" size={26} color={colors.homeiconbackgroundcolor} />

  </TouchableOpacity>

    




    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})