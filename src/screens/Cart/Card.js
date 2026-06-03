import { StyleSheet, Text, View, TouchableOpacity, FlatList,Image } from 'react-native'
import React, { useState } from 'react'
import colors from '../Colors'
import Fonts from '../Fonts'
import data from '../data'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector, useDispatch } from 'react-redux'
import {removeAnItem,increaseqauntity,decreasequantity} from '../../store/slice/AddtoCartSlice'
import ApplyCoupon from './ApplyCoupon'


const Card = () => {



// const [quantity, setquantity]=useState({});
    
const cart = useSelector(
  state=> state.addtocart.addtocart
)

    const dispatch = useDispatch()



if(cart.length === 0){
  return(

<View style={styles.emptytxtcontainer}>
  <Text style={styles.emptyheadingtxt}>your bag is empty</Text>
  <Text style={styles.emptytxt}>look like you haven’t added any items to your bag yet, start shopping to fill it up.</Text>
</View>

  )
}


  return (
    <View style={{marginTop:40}}>
     
     
<FlatList
// data={data.slice(0,2)}
data={cart}
keyExtractor={(item)=>item.id}
showsVerticalScrollIndicator={false}
renderItem={({item})=>{

// const quantity_increase=()=>{
//     const currentQty = quantity[item.id] || 1;
//   if(item.availability !== 'Out of Stock' && currentQty < item.stockunit)
//   {
//  setquantity({
//       ...quantity,
//       [item.id]: currentQty + 1,
//     });
//   }
// };

// const quantity_decrease=()=>{
//     const currentQty = quantity[item.id] || 1;
//   if(currentQty>1){
//   setquantity({
//       ...quantity,
//       [item.id]: currentQty - 1,
//     });
//   }
// };

const quantity_increase = () => {
  const currentQty = quantity[item.id] || 1;

  if (
    item.availability !== "Out of Stock" &&
    currentQty < item.stockunit
  ) {
    setquantity({
      ...quantity,
      [item.id]: currentQty + 1,
    });
  }
};

const quantity_decrease = () => {
  const currentQty = quantity[item.id] || 1;

  if (currentQty > 1) {
    setquantity({
      ...quantity,
      [item.id]: currentQty - 1,
    });
  }
};

return(

<TouchableOpacity style={styles.maincard}>

<View style={styles.cardcontent}>


<View style={{width:65, height:87}}>
    <Image source={item.images[0]} style={{width:"100%", height:"100%"}}></Image>
</View>

<View >


    <View style={{flexDirection:"row", gap:130}}>
<Text style={{...Fonts.Titlefont, fontSize:18, color:colors.textcolor}}>{item.title}</Text>

{/* remove an item from cart */}
<TouchableOpacity onPress={()=>{
  dispatch(removeAnItem(item.id))
}}>
<AntDesign name="close" size={20} color={colors.homeiconbackgroundcolor} />
</TouchableOpacity>
</View>


<Text style={{...Fonts.pricefont, color:colors.pricetextcolor, fontSize:18}} >€ {item.price}</Text>

<View style={{flexDirection:"row", justifyContent:"space-between"}}>
<Text style={{...Fonts.Titlefont, fontSize:18, color:colors.textcolor}}>Size</Text>
<Text style={{...Fonts.Titlefont, fontSize:18, color:colors.textcolor}}>{item.selectedSize}</Text>


</View>



<View style={styles.qtynumcontainer}>

{/* <TouchableOpacity style={styles.qtybtn} onPress={quantity_decrease}>  */}
<TouchableOpacity style={styles.qtybtn} onPress={()=>{
  dispatch(decreasequantity(item.id))
}}> 
  <Text style={styles.qtytxt}>-</Text>
</TouchableOpacity>

{/* <Text style={styles.qtynum}>{quantity}</Text> */}
<Text style={styles.qtynum}>
  {/* {quantity[item.id] || 1} */}
  {item.quantity}
</Text>
{/* <TouchableOpacity   style={styles.qtybtn} onPress={quantity_increase}  > */}
<TouchableOpacity   style={styles.qtybtn} onPress={()=>{
  dispatch(increaseqauntity(item.id))
}}  >
  <Text style={styles.qtytxt}>+</Text>
</TouchableOpacity>



</View>


</View>

</View>










</TouchableOpacity>

)

}}










/>

<ApplyCoupon/>

    </View>
  )
}

export default Card

const styles = StyleSheet.create({

    maincard:{
        width:355,
        backgroundColor:colors.addtocartcard,
        marginBottom:20,
        borderRadius:20
    },
 

qtytxt:{
  fontSize:16,
  ...Fonts.Titlefont,
  color:colors.textcolor

},
qtybtn:{
  width:20,
  height:20,
  borderRadius:50,
  backgroundColor:'#D9CBC2',
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
  gap:20,
  justifyContent:"flex-end",
  marginTop:10
},

cardcontent:{
    flexDirection:"row",
    gap:10,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10
},
emptyheadingtxt:{
  ...Fonts.headingfont,
  color:colors.headingtextcolor,
  textAlign:"center"
},
emptytxt:{
  ...Fonts.Titlefont,
  color:colors.textcolor,
  fontSize:16,
  textAlign:"center"
},
emptytxtcontainer:{
  gap:20,
 top:202
  
}

})