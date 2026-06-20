import { StyleSheet, Text, View, TouchableOpacity,  ScrollView, FlatList, Image, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import colors from './Colors'
import Fonts from './Fonts'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RelatedProductslist from './RelatedProductslist'
import { useSelector, useDispatch } from 'react-redux'
import { removefromwishlist, addtowislist} from '../store/slice/WishlistSlice'
import AllProductsScreen from './AllProductsScreen'
import {addintocart,removeAnItem,increaseqauntity,decreasequantity} from '../store/slice/AddtoCartSlice'



const productDetailScreen = () => {

  const navigation = useNavigation();

const cart = useSelector(
  state=> state.addtocart.addtocart
)


 const wishlist = useSelector(
        state=> state.wishlist.wishlist
    )

    const dispatch = useDispatch();


  const route = useRoute();
  const {product}= route.params;

const [quantity, setquantity]=useState(1)

const quantity_increase=()=>{
  if(product.availability !== 'Out of Stock' && quantity < product.stockunit)
  {
  setquantity(quantity+1)
  }
};

const quantity_decrease=()=>{
  if(quantity>1){
    setquantity(quantity-1)
  }
};

const [selectedsize, setselectedsize]=useState(product.sizes[0]);

useEffect(()=>{
  setquantity(1)
  setselectedsize(product.sizes[0])
},[product])

const discountPrice = product.oldPrice ? Math.round(
((product.oldPrice - product.price)/product.oldPrice)*100

):null;


const [opensection, setopensection]=useState(null)

const toggelSection = (section)=>{
  setopensection(
    opensection === section ? null : section
  )
}


  return (
    <View style={{ backgroundColor:colors.Screenbackgroundcolor, }}>



{/* <View style={{width:"100%", height:80, backgroundColor:"green", justifyContent:"center", alignItems:"center", position:"absolute", padding:16,}}> */}
      
  <View style={styles.mainIcon_container}>

   <TouchableOpacity style={styles.closeicon_container} onPress={()=>navigation.goBack()}>
 <AntDesign name="close" size={24} color={colors.homeiconbackgroundcolor} />
   </TouchableOpacity>


<View style={styles.wish_option_container}>
  <TouchableOpacity style={styles.heartcontainer} onPress={()=>
    {
      const itemexist = wishlist.find(
        whislistitem=> whislistitem.id === product.id
      )

      if(itemexist)
      {
        dispatch(removefromwishlist(product.id))
      }
      else{
        dispatch(addtowislist(product))
      }
    }
  }>
  <FontAwesome name={wishlist.find (inwishlist=>inwishlist.id === product.id)? "heart": "heart-o"} size={16} color={wishlist.find( inwishlist => inwishlist.id === product.id)? colors.activewishlisticoncolor : colors.inactivewhishlist_Iconcolor} />
</TouchableOpacity>

<TouchableOpacity style={styles.option}>
<SimpleLineIcons name="options-vertical" size={15} color={colors.homeiconbackgroundcolor} />
</TouchableOpacity>


</View>


  </View>

  {/* </View> */}

      
   <ScrollView showsVerticalScrollIndicator={false}>

<FlatList
data={product.images.slice(1)}
keyExtractor={(item)=>{item.id}}
horizontal
showsHorizontalScrollIndicator={false}
renderItem={({item})=>{
  return(

<View>

  <Image source={item} style={styles.img}></Image>


{/* 
  <View style={styles.mainIcon_container}>

   <TouchableOpacity style={styles.closeicon_container} onPress={()=>navigation.goBack()}>
 <AntDesign name="close" size={24} color={colors.homeiconbackgroundcolor} />
   </TouchableOpacity>


<View style={styles.wish_option_container}>
  <TouchableOpacity style={styles.heartcontainer}>
  <FontAwesome name="heart-o" size={16} color={colors.inactivewhishlist_Iconcolor} />
</TouchableOpacity>

<TouchableOpacity style={styles.option}>
<SimpleLineIcons name="options-vertical" size={15} color={colors.homeiconbackgroundcolor} />
</TouchableOpacity>


</View>


  </View> */}



</View>

  )
}}


/>



<View style={styles.maindetailed_container}>

<View style={styles.pricecontainer}>
<Text style={styles.titletxt}>{product.title}</Text>

{discountPrice && (
<View style={styles.discountcontainer}>
  <Text style={styles.discounttxt}>{discountPrice}% off</Text>
</View>)
}

</View>



<Text style={styles.product_price}>€{product.price}</Text>

{product.oldPrice && (
 <Text style={styles.oldpricetxt}>€{product.oldPrice}</Text>
)}

<View style={styles.availabilitycontainer}>

  <Text style={styles.availabletxt}>Availability: </Text>

<Text style={[styles.availabilitytxt,{color: 


product.availability === "In Stock" ? colors.instock :product.availability === "Available on Backorder" ? colors.stock_backdoor :colors.outofstock, 
}]}>{product.availability}</Text>

</View>

<Text style={styles.sizetext}>Size</Text>
<View style={styles.sizecontainer}>

  {product.sizes.map((size)=>{
    const isSlected= selectedsize === size;

    return(
      <TouchableOpacity
      key={size}
      style={[styles.sizebtn,
         isSlected && styles.activesizebtn
      ]
       
      }
      onPress={()=>setselectedsize(size)}
      >
          <Text style={[styles.sizetxt, isSlected && styles.activesizetxt]}>{size}</Text>
      </TouchableOpacity>
    )
  })}

</View>



<View style={styles.qauntitycontainer}>
<Text style={styles.quantitytxt}>Select Quantity:</Text>

<View style={styles.qtynumcontainer}>

<TouchableOpacity style={styles.qtybtn} onPress={quantity_decrease}> 
  <Text style={styles.qtytxt}>-</Text>
</TouchableOpacity>

<Text style={styles.qtynum}>{quantity}</Text>
<TouchableOpacity   style={styles.qtybtn} onPress={quantity_increase}>
  <Text style={styles.qtytxt}>+</Text>
</TouchableOpacity>



</View>


</View>


<View style={{flexDirection:"row", justifyContent:"space-between", marginTop:14}}>

<TouchableOpacity style={styles.buynowbtn}>
  <Text style={{color:colors.textcolor2, ...Fonts.Titlefont, fontSize:18}}>Buy Now</Text>
</TouchableOpacity>



{/* add to cart button */}
<TouchableOpacity style={styles.Addcartbtn} onPress={()=>{
  const itemexist = cart.find(
    item=> item.id === product.id
  );

  if(itemexist && itemexist.quantity >= product.stockunit){
    Alert.alert('Maximum stock reached');
    return;
  }

  dispatch(addintocart({
    ...product,
    quantity: quantity,
    selectedsize: selectedsize,
  }));

  Alert.alert(itemexist ? 'Cart quantity updated' : 'Item added to cart');

}}>
  <Text style={{color:colors.textcolor, ...Fonts.Titlefont, fontSize:18}}>Add to Cart</Text>
</TouchableOpacity>


</View>





<TouchableOpacity style={styles.dropdown} onPress={()=>toggelSection("description")}>

<Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:16}}>Description</Text>
<MaterialIcons name="chevron-right" size={24} color={colors.homeiconbackgroundcolor} style={{
  transform:[{rotate:
    opensection === 'description' ? "90deg" : "0deg"
  }]
}} />


</TouchableOpacity>

{opensection === 'description' && (
  <View style={styles.descriptioncontent}>
    <Text style={{...Fonts.Titlefont, fontSize:14, color:colors.textcolor, lineHeight:20, textAlign:"justify"}}>{product.description}</Text>

    <Text style={{...Fonts.Titlefont, fontSize:18, color:colors.textcolor,marginTop:14}}>Material</Text>
    {product.material.map((item,index)=>(

      <Text key={index} style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:14}}> • {item}</Text>
    ))}
    

       <Text style={{...Fonts.Titlefont, fontSize:18, color:colors.textcolor,marginTop:14}}>Care</Text>
    
    {product.care.map((item,index)=>(

      <Text key={index} style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:14}}> • {item}</Text>
    ))}
     </View>
)}




<RelatedProductslist  currentproducts={product}/>







</View>


   </ScrollView>
    </View>
  )
}

export default productDetailScreen

const styles = StyleSheet.create({


closeicon_container:{
width:46,
height:48,
alignItems:"center",
justifyContent:"center",
backgroundColor:colors.detailedPage_viewiconcolor,
borderRadius:50,
},

heartcontainer:{
 width:30,
 height:30,
  backgroundColor:colors.inactivewhishlist_viewcolor,
  opacity:"40%",
  padding:6,
borderRadius:50,
alignItems:"center",
justifyContent:"center"
},
option:{
width:30,
height:30,
alignItems:"center",
justifyContent:"center",
backgroundColor:colors.detailedPage_viewiconcolor,
borderRadius:50,
},
wish_option_container:{
  flexDirection:"row",

  gap:20
},
mainIcon_container:{
   flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
 position:"absolute",
  top:0,
  
  zIndex:1,
  //backgroundColor:"white",
  width:"100%",
  padding:16,

 

 
},
maindetailed_container:{
  marginLeft:15,
  marginRight:15,
  marginTop:30,
  marginBottom:30,
 
},
titletxt:{
  color:colors.headingtextcolor,
  ...Fonts.headingfont,
 
},
discountcontainer:{
  width:80,
  height:25,
  backgroundColor:colors.discountcolor,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:5,
},
discounttxt:{
  color:colors.textcolor2,
  ...Fonts.Titlefont
},
pricecontainer:{
  flexDirection:"row",
  justifyContent:"space-between"
},
oldpricetxt:{
  ...Fonts.pricefont2,
  color:colors.textcolor,
  fontSize:16,
  textDecorationLine:"line-through"
},
product_price:{
  ...Fonts.pricefont,
  color:colors.textcolor,
  fontSize:26,
  marginTop:14,
},
availabilitytxt:{
  ...Fonts.Titlefont,
  fontSize:15,
},
availabletxt:{
  ...Fonts.Titlefont,
  color:colors.textcolor,
  fontSize:15,
},
availabilitycontainer:{
  flexDirection:"row",
  marginTop:14
},
sizetext:{
  ...Fonts.Titlefont,
  color:colors.textcolor,
  marginTop:14,
  fontSize:20,
},
sizecontainer:{
  flexDirection:"row",
  gap:13
},
sizebtn:{
  width:44,
  height:40,
  borderRadius:5,
  borderColor:colors.btncolor1,
  borderWidth:1,
justifyContent:"center",
alignItems:"center",
marginTop:14,
},
activesizebtn:{
  backgroundColor:colors.btncolor1
},
sizetxt:{
  ...Fonts.Titlefont,
  color:colors.textcolor,
  fontSize:20,
},
activesizetxt:{
   color:colors.textcolor2,
},
quantitytxt:{
  ...Fonts.Titlefont,
  color:colors.textcolor,
  fontSize:18,
},
qauntitycontainer:{
  marginTop:27,
  flexDirection:"row",
  justifyContent:"space-between"
},
qtytxt:{
  fontSize:22,
  ...Fonts.Titlefont,
  color:colors.textcolor

},
qtybtn:{
  width:27,
  height:27,
  borderRadius:5,
  backgroundColor:colors.btncolor2,
  justifyContent:"center",
  alignItems:"center"
},
qtynum:{
  ...Fonts.Titlefont,
  color:colors.textcolor,
  fontSize:18
},
qtynumcontainer:{
  flexDirection:"row",
  gap:45
},
buynowbtn:{
  width:168,
  height:49,
  backgroundColor:colors.btncolor1,
  borderRadius:5,
  justifyContent:"center",
  alignItems:"center"
},
Addcartbtn:{
  width:168,
  height:49,
  //borderWidth:1,
  backgroundColor:colors.btncolor2,
 borderRadius:5,
  justifyContent:"center",
  alignItems:"center"
},
dropdown:{
  width:355,
  height:48,
  backgroundColor:colors.btncolor2,
  marginTop:14,
 flexDirection:"row",
 justifyContent:"space-between",
 alignItems:"center",
 paddingHorizontal:15,
 paddingVertical:14,
 borderRadius:5
},
descriptioncontent:{
  marginVertical:14
}



})