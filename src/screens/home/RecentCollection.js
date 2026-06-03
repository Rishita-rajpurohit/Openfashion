import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View,  } from 'react-native'
import React from 'react'
import colors from '../Colors'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Line from './Line'
import Fonts from '../Fonts'
import data from '../data'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { removefromwishlist, addtowislist} from '../../store/slice/WishlistSlice'

const RecentCollection = () => {

const navigation = useNavigation();

const dispatch = useDispatch();
const wishlist = useSelector(
  state=> state.wishlist.wishlist
)

  return (
    <View  >
 <View style={styles.headingcontainer}>
      <Text style={styles.heading}>RECENT COLLECTION</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('SearchScreen')}>
     <Text style={styles.sidetxt}>See all</Text>
     </TouchableOpacity>
</View>
   



<FlatList
data={data.slice(0,8)}
keyExtractor={(item)=>item.id}
numColumns={2}
showsVerticalScrollIndicator={false}
columnWrapperStyle={{justifyContent:"space-between",marginBottom:40}}
renderItem={({item})=>{

  return(

<TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ProductDetailScreen',{product:item})}>
  <View>
<View style={styles.imageContainer}>
  <Image
    source={item.images[0]}
    style={styles.img}
  />
</View>
<TouchableOpacity style={styles.heartcontainer}
onPress={()=>{
  const whislistitemexist = wishlist.find(
    wishlistitem=> wishlistitem.id === item.id
  )
if(whislistitemexist)
{
  dispatch(removefromwishlist(item.id))
}
else{
  dispatch(addtowislist(item))
}

}}>
   <FontAwesome name={wishlist.find(inwishlist=> inwishlist.id === item.id)? "heart": "heart-o"} size={16} color={wishlist.find(inwishlist=> inwishlist.id === item.id)? colors.activewishlisticoncolor : colors.inactivewhishlist_Iconcolor} />
</TouchableOpacity>
</View>
<View style={styles.textcontainer}>
<Text style={styles.title} numberOfLines={2}>{item.title}</Text>
<Text style={styles.price}>€{item.price}</Text>

</View>
</TouchableOpacity>

  )

}}

/>

    </View>
  )
}

export default RecentCollection

const styles = StyleSheet.create({
heading:{
 ...Fonts.headingfont,
  color:colors.headingtextcolor,
  textAlign:"center",
  fontWeight:"500",
  // marginTop:35,
},
sidetxt:{
  ...Fonts.sidesmallfont,
  color:colors.sidesmalltextcolor,
},
headingcontainer:{
  flexDirection:"row",
  justifyContent:"space-between",
alignItems:"center",
  marginTop:40,
  marginBottom:30,
},

imageContainer:{
  width:176,
  height:185,
  borderRadius:30,
  overflow:"hidden",
},

img:{
  width:"100%",
  height:"100%",
 
},
title:{
  paddingTop:5,
  fontSize:14,
  color:colors.textcolor,
  textAlign:"center",
  ...Fonts.Titlefont,
  
},
price:{
  fontSize:16,
  color:colors.pricetextcolor,
  fontWeight:"500",
  textAlign:"center",
  ...Fonts.pricefont
},
card:{
  width:176,
  
},

heartcontainer:{
  position:"absolute",
  top:12,
  right:12,
  backgroundColor:colors.inactivewhishlist_viewcolor,
  opacity:"40%",
  padding:6,
borderRadius:50,
}

    
})
