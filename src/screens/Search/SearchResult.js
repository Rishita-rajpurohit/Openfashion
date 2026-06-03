import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Fonts from '../Fonts'
import colors from '../Colors'
import data from '../data'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
const Results = () => {

    const navigation = useNavigation();
  return (
    <View style={{backgroundColor:"white", flex:1, paddingLeft:15, paddingRight:15 }}>
<View style={{flexDirection:"row", justifyContent:"space-between",marginTop:24, marginBottom:24}}>
      <Text style={{...Fonts.headingfont, color:colors.headingtextcolor}}>Results</Text>
      <Text style={{...Fonts.Titlefont, fontSize:14, color:colors.sidesmalltextcolor2}}>8 Items</Text>
      </View>

<FlatList
data={data.slice(0,8)}
keyExtractor={(item)=>item.id}
numColumns={2}
showsVerticalScrollIndicator={false}
columnWrapperStyle={{justifyContent:"space-between",marginBottom:40}}
renderItem={({item})=>{



const discount = item.oldPrice ? Math.round(
  ((item.oldPrice - item.price)/ item.oldPrice)*100):null;

  return(

<TouchableOpacity style={styles.maincard} onPress={()=>navigation.navigate('ProductDetailScreen', {product:item})}>


<View style={styles.imgcontainer}> 
<Image source={item.images[0]   } style={{height:"100%", borderRadius:20, width:"100%"}}></Image>


{discount && (
  <View style={styles.discountcontainer}>
    <Text style={{...Fonts.Titlefont, color:colors.textcolor2, fontSize:12, textAlign:"right"}}>{discount} % </Text>
     </View>
)}

<TouchableOpacity style={styles.heartcontainer}>
  <FontAwesome name="heart-o" size={16} color={colors.inactivewhishlist_Iconcolor} />
</TouchableOpacity>

<TouchableOpacity style={styles.addcarticon}>
<Image source={require('../../assets/images/addtocarticon.png')}></Image>
</TouchableOpacity>

</View>



<View style={styles.productinfo}>

<Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:14}}>{item.title}</Text>

<View style={styles.pricecontainer}>
<Text style={{...Fonts.pricefont, color:colors.pricetextcolor, fontSize:16}}>€ {item.price}</Text>

{ item.oldPrice && (
<Text style={{...Fonts.pricefont2, color:colors.pricetextcolor, fontSize:12, textDecorationLine:"line-through"}}>€ {item.oldPrice}</Text>
   ) }


</View>

</View>

</TouchableOpacity>
  )



}}

/>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({



maincard:{
    width:170,
    height:300,
    backgroundColor:colors.cardcolor1,
    borderRadius:20,
    marginRight:14,
    marginTop:24,
    overflow:"hidden"
  },
  imgcontainer:{
    width:"100%",
    height:220,
  },
  heartcontainer:{
  position:"absolute",
  top:12,
  right:12,
  backgroundColor:colors.inactivewhishlist_viewcolor,
  opacity:"40%",
  padding:6,
borderRadius:50,
},
addcarticon:{
  position:'absolute',
  bottom:8,
  right:8
},
productinfo:{
  paddingTop:14,
  paddingLeft:9

},
pricecontainer:{
  flexDirection:"row",
  gap:14
,
alignItems:"center"},

discountcontainer:{
width:59,
height:27,
backgroundColor:colors.discountcolor,
justifyContent:"center",
position:"absolute",
borderRadius:10,
left:-10,
top:-3,
paddingRight:3,

}

})