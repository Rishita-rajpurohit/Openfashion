import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert } from 'react-native'
import React from 'react'
import Fonts from './Fonts'
import colors from './Colors'
import data from './data'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { removefromwishlist, addtowislist} from '../store/slice/WishlistSlice'
import {addintocart,removeAnItem} from '../store/slice/AddtoCartSlice'

const RealatedProductslist = ({currentproducts}) => {

    const relatedproducts = data.filter((item)=>
        item.id !== currentproducts.id
    ).slice(0,6);

const navigation = useNavigation();
const wishlist = useSelector(
  state=> state.wishlist.wishlist
)

const cart = useSelector(
  state=> state.addtocart.addtocart
)

const dispatch = useDispatch();

    
  return (
    <View style={styles.maincontainer}>
      <Text style={{...Fonts.headingfont, color:colors.headingtextcolor, fontSize:22}}>You Might Also Like</Text>





<FlatList
 data={relatedproducts}
 keyExtractor={(item)=>item.id}
 horizontal
 showsHorizontalScrollIndicator={false}
 renderItem={({item})=>{

const discount = item.oldPrice ? Math.round(
  ((item.oldPrice - item.price)/ item.oldPrice)*100):null;

  return(

<TouchableOpacity style={styles.maincard} onPress={()=>navigation.navigate('ProductDetailScreen', {product:item})}>


<View style={styles.imgcontainer}> 
<Image source={item.images[0]} ></Image>


{discount && (
  <View style={styles.discountcontainer}>
    <Text style={{...Fonts.Titlefont, color:colors.textcolor2, fontSize:12, textAlign:"right"}}>{discount} % </Text>
     </View>
)}

<TouchableOpacity style={styles.heartcontainer} onPress={
()=>{
  const itemexist = wishlist.find(
    wishlistitem=> wishlistitem.id === item.id
  )
  if(itemexist)
  {
    dispatch(removefromwishlist(item.id))
  }
  else{
    dispatch(addtowislist(item))
  }
}

} >
  <FontAwesome name={wishlist.find(inwishlist=>inwishlist.id === item.id)? "heart": "heart-o"} size={16} color={wishlist.find(inwishlist=> inwishlist.id === item.id )? colors.activewishlisticoncolor : colors.inactivewhishlist_Iconcolor} />
</TouchableOpacity>

{/* add to cart button */}
<TouchableOpacity style={styles.addcarticon} onPress={
  ()=>{
   const itemexist = cart.find(i => i.id === item.id)

if(itemexist){
  Alert.alert("item already in cart")
  return;
}

dispatch(
  addintocart({
    ...item,
    quantity:1,
    selectedSize:item.sizes[0],
  })
)

Alert.alert("item added to cart")
  }
}>
<Image source={require('../assets/images/addtocarticon.png')}></Image>
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

export default RealatedProductslist

const styles = StyleSheet.create({


  maincontainer:{
    marginTop:24,
  },
  maincard:{
    width:145,
    height:254,
    backgroundColor:colors.cardcolor1,
    borderRadius:20,
    marginRight:14,
    marginTop:24
  },
  imgcontainer:{
    width:"100%",
    height:177,
    overflow:"hidden",
    borderRadius:20
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