import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../Colors'
import Fonts from '../Fonts'


const Topbar = () => {
  return (
    <View style={styles.topbar}>
     
<TouchableOpacity>
    <Ionicons name="menu-outline" size={26} color={colors.homeiconbackgroundcolor} />
</TouchableOpacity>

<View>
   <Text style={styles.logo}>Open Fashion</Text>
</View>

<TouchableOpacity>
    <Ionicons name="search-sharp" size={26} color={colors.homeiconbackgroundcolor} />
</TouchableOpacity>
        
     
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({
    topbar:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:15,
        //paddingBottom:20,
        paddingLeft:15,
        paddingRight:15,
        // backgroundColor:colors.primary,

    },
    logo:{
        ...Fonts.logofont,
       color:colors.logocolor,
    }
})