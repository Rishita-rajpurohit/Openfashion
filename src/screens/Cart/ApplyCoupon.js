import { StyleSheet, Text, View , TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import colors from '../Colors'
import Fonts from '../Fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ApplyCoupon = () => {
  return (
    <View style={styles.mainContainer}>
     
<View style={styles.container1}>
  <View style={styles.inputcontainer}>
<TextInput 
placeholder='Apply Coupon'
 placeholderTextColor={colors.textcolor}
 style={{...Fonts.Titlefont, fontSize:20, color:colors.textcolor, textAlign:"left"}}
></TextInput>
  </View>


  {/* Apply button */}
  
    <TouchableOpacity style={styles.couponApplybtn}>
<MaterialCommunityIcons name="check-decagram" size={22} color={colors.homeiconbackgroundcolor} />

<Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}>Apply</Text>
</TouchableOpacity>
  
</View>

    </View>
  )
}

export default ApplyCoupon

const styles = StyleSheet.create({
inputcontainer:{
  ...Fonts.Titlefont,
  color:colors.textcolor,
  fontSize:20,
  width:216,
  paddingBottom:15,
  borderBottomWidth:1,
  borderBottomColor:colors.bottombordercolor,

},
couponApplybtn:{
  flexDirection:"row",
  gap:7,
  alignItems:"center"
},
container1:{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
},
mainContainer:{
   width:355,
        backgroundColor:colors.addtocartcard,
        marginBottom:70,
        borderRadius:5,
        paddingHorizontal:24,
        paddingVertical:20
}


})