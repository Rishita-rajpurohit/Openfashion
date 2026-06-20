import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../Colors'
import Fonts from '../Fonts'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import RateApp_Modal from '../modals/RateApp_Modal'
import { useNavigation } from '@react-navigation/native'
import {useTranslation} from 'react-i18next';
import i18n from '../../i18n'
import Language_Modal from '../modals/Language_Modal';

const GeneralSettings = () => {

    const {t}= useTranslation();

    const navigation = useNavigation();
    const [openLanguageModal,setOpenLanguageModal] =useState(false);

    const [openRateModal, setopenRateModal] = useState(false);
  return (
    <View style={styles.maincontainer}>
     
     <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:22, marginBottom:15}}>{t('generalSettings')}</Text>
     

     <View style={styles.btns}>

        {/* Wishlist */}

<TouchableOpacity style={styles.btnconatiner} onPress={()=> navigation.navigate('WishListScreen')}>

<View style={{flexDirection:"row", gap:23, alignItems:"center"}}>
    {/* <Image  source={require('../../assets/images/log_outicon.png')}/> */}
    <FontAwesome name="heart-o" size={20} color={colors.homeiconbackgroundcolor} />
    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}> WishList </Text>
</View>

<View style={{flexDirection:"row", gap:16, alignItems:"center"}}>
    <Text  style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:14}}>2 Items</Text>
<FontAwesome name="angle-right" size={24} color={colors.homeiconbackgroundcolor} />
</View>

</TouchableOpacity>



{/* Get Notification */}

<TouchableOpacity style={styles.btnconatiner}>

<View style={{flexDirection:"row", gap:23, alignItems:"center"}}>
    {/* <Image  source={require('../../assets/images/log_outicon.png')}/> */}
   <FontAwesome name="bell" size={20} color={colors.homeiconbackgroundcolor} />
    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}> Get Notifications </Text>
</View>

<FontAwesome name="angle-right" size={24} color={colors.homeiconbackgroundcolor} />

</TouchableOpacity>


{/* Languages */}

<TouchableOpacity
  style={styles.btnconatiner}
  onPress={() =>
    setOpenLanguageModal(true)
  }
>

<View style={{flexDirection:"row", gap:23, alignItems:"center"}}>
    {/* <Image  source={require('../../assets/images/log_outicon.png')}/> */}
    
<FontAwesome5 name="globe" size={20} color={colors.homeiconbackgroundcolor}/>

    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}> Languages </Text>
</View>

<View style={{flexDirection:"row", gap:16, alignItems:"center"}}>
    <Text  style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:14}}> {i18n.language === 'fr'
    ? 'Français'
    : 'English'}</Text>
<FontAwesome name="angle-right" size={24} color={colors.homeiconbackgroundcolor} />

</View>

</TouchableOpacity>


{/* Currencies */}

<TouchableOpacity style={styles.btnconatiner}>

<View style={{flexDirection:"row", gap:23, alignItems:"center"}}>
    {/* <Image  source={require('../../assets/images/log_outicon.png')}/> */}
    

{/* <AntDesign name="dollar" size={20} color={colors.homeiconbackgroundcolor} /> */}

<MaterialCommunityIcons name="currency-usd" size={20} color={colors.homeiconbackgroundcolor}  />


    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}> Currencies </Text>
</View>

<View style={{flexDirection:"row", gap:16, alignItems:"center"}}>
    <Text  style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:14}}>EUR</Text>
<FontAwesome name="angle-right" size={24} color={colors.homeiconbackgroundcolor} />

</View>

</TouchableOpacity>



{/* Order histort */}

<TouchableOpacity style={styles.btnconatiner}>

<View style={{flexDirection:"row", gap:23, alignItems:"center"}}>
    {/* <Image  source={require('../../assets/images/log_outicon.png')}/> */}
   {/* <FontAwesome name="bell" size={20} color={colors.homeiconbackgroundcolor} /> */}
   <Feather name="clock" size={20} color={colors.homeiconbackgroundcolor} />
    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}> Order History </Text>
</View>

<FontAwesome name="angle-right" size={24} color={colors.homeiconbackgroundcolor} />

</TouchableOpacity>



{/* Rate the app */}

<TouchableOpacity style={styles.btnconatiner}  onPress={() => setopenRateModal(true)}>

<View style={{flexDirection:"row", gap:23, alignItems:"center"}}>
    {/* <Image  source={require('../../assets/images/log_outicon.png')}/> */}
 
   <Feather name="star" size={20} color={colors.homeiconbackgroundcolor} />

    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}> Rate The App </Text>
</View>

<FontAwesome name="angle-right" size={24} color={colors.homeiconbackgroundcolor} />

</TouchableOpacity>



{/* Privacy and Terms */}

<TouchableOpacity style={styles.btnconatiner}>

<View style={{flexDirection:"row", gap:23, alignItems:"center"}}>
    {/* <Image  source={require('../../assets/images/log_outicon.png')}/> */}
 
   {/* <Feather name="star" size={20} color={colors.homeiconbackgroundcolor} /> */}
   <FontAwesome name="file-text-o" size={20} color={colors.homeiconbackgroundcolor} />

    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}> Privacy and Terms </Text>
</View>

<FontAwesome name="angle-right" size={24} color={colors.homeiconbackgroundcolor} />

</TouchableOpacity>



{/* About us */}

<TouchableOpacity style={styles.btnconatiner}>

<View style={{flexDirection:"row", gap:23, alignItems:"center"}}>
    {/* <Image  source={require('../../assets/images/log_outicon.png')}/> */}
 
   {/* <Feather name="star" size={20} color={colors.homeiconbackgroundcolor} /> */}
   <FontAwesome6 name="circle-info" size={20} color={colors.homeiconbackgroundcolor} />

    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}> About Us </Text>
</View>

<FontAwesome name="angle-right" size={24} color={colors.homeiconbackgroundcolor} />

</TouchableOpacity>




{/* delete*/}

<TouchableOpacity style={styles.btnconatiner}>

<View style={{flexDirection:"row", gap:23, alignItems:"center"}}>
    {/* <Image  source={require('../../assets/images/log_outicon.png')}/> */}
 
   {/* <Feather name="star" size={20} color={colors.homeiconbackgroundcolor} /> */}
   <FontAwesome6 name="trash-alt" size={20} color={colors.discountcolor} />

    <Text style={{...Fonts.Titlefont, color:colors.discountcolor, fontSize:18}}> Delete Account </Text>
</View>

{/* <FontAwesome name="angle-right" size={24} color={colors.homeiconbackgroundcolor} /> */}

</TouchableOpacity>


</View>





<RateApp_Modal
  visible={openRateModal}
  onClose={() => setopenRateModal(false)}
/>
<Language_Modal
  visible={openLanguageModal}
  onClose={() =>
    setOpenLanguageModal(false)
  }
/>



  {/* <TouchableOpacity style={{height:65, width:65, borderRadius:50, backgroundColor:"#D7D3CE"
  , justifyContent:"center", alignItems:"center", position:"absolute", top:680, right:15}}>

    <MaterialIcons name="message" size={26} color={colors.homeiconbackgroundcolor} />

  </TouchableOpacity> */}

    </View>
  )
}

export default GeneralSettings

const styles = StyleSheet.create({

maincontainer:{
    marginLeft:14,
    marginRight:14,
},
btnconatiner:{
     width:356,
    height:60,
    backgroundColor:colors.addtocartcard,
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    paddingRight:16,
    paddingLeft:16,
    paddingTop:19,
    paddingBottom:19,
    borderRadius:5
},
btns:{
    gap:7,
    marginBottom:70
}


})