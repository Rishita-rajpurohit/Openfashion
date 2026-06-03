import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Alert } from 'react-native'
import React from 'react'
import data from '../data'
import colors from '../Colors'
import { useNavigation } from '@react-navigation/native'
import Fonts from '../Fonts'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector , useDispatch} from 'react-redux'
import {removefromwishlist} from '../../store/slice/WishlistSlice'
import { addintocart } from '../../store/slice/AddtoCartSlice'


const WishlistCard = () => {
    const navigation =useNavigation();
    const wishlist=useSelector(
        state=> state.wishlist.wishlist
    )
    const cart = useSelector(
        state=> state.addtocart.addtocart
    )
    const dispatch = useDispatch()
   
    if(wishlist.length === 0)
    {
        return(
            <View >
                    <View style={{alignItems:"center", justifyContent:"center", top:"50%" }}>
                        <Image source={require('../../assets/images/emptywishlistimage.png')}></Image>
                        <View style={styles.txtcontent}>
                        <Text style={{...Fonts.headingfont, color:colors.headingtextcolor, textAlign:"center"}}>no favorites yet</Text>
                         <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:16, textAlign:"center"}}>you haven’t searched for items yet. lets’s start now - we’ll help you here!</Text>
                         </View>

<View style={styles.add_searchbtn}>

    <TouchableOpacity style={styles.shopbtn}>
        <Text style={{...Fonts.buttonfont, color:colors.textcolor2, fontSize:16}}>START SHOPPING</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.searchbtn}>
        <Text style={{...Fonts.buttonfont, color:colors.textcolor3, fontSize:16}}>Search for items</Text>
    </TouchableOpacity>
</View>

                    </View>

                  

            </View>
        )
    }


  return (
    
     <FlatList
    //  data={data.slice(0,2)}
    data={wishlist}
     keyExtractor={(item)=>item.id}
     showsVerticalScrollIndicator={false}
     renderItem={({item})=>{

return(

<View style={{flexDirection:"row", gap:17, marginTop:30}}>


<View style={{flexDirection:"row", alignItems:"center", gap:17}}>
<TouchableOpacity style={styles.removebtn} onPress={()=>dispatch(removefromwishlist(item.id))}>
  <Ionicons name="remove-circle-outline" size={26} color={colors.headingtextcolor} />
</TouchableOpacity>

<View style={styles.imgcontainer}>
<Image source={item.images[0]} style={styles.img}></Image>
</View>

</View>

<View style={styles.content}>
    <View>
<Text style={styles.titletxt}>{item.title}</Text>
<Text style={styles.pricetxt}>€ {item.price}</Text>
</View>
<TouchableOpacity style={styles.addcarbtn} onPress={()=>{
    const itemexist = cart.find(
        itemincart=> itemincart.id === item.id
    )
    if(itemexist)
    {
        Alert.alert("item already exist")
        return;
    }
  dispatch(addintocart({
  ...item,
  quantity: 1,
  selectedsize: item.sizes[0]
}))

    Alert.alert("item added")
}}>
    <Text style={{...Fonts.buttonfont, color:colors.textcolor2}}>Add to Cart</Text>
</TouchableOpacity>


</View>



</View>


)


     }}
     
     
     
     
     
     
     
     />
   
  )
}

export default WishlistCard

const styles = StyleSheet.create({

imgcontainer:{
    width:107,
    height:107,
    //backgroundColor:"green",
    //borderRadius:50,

    
},
img:{
    width:"100%",
    height:"100%",
    resizeMode:"cover",
   borderRadius:14
    
},
titletxt:{
    ...Fonts.Titlefont,
    color:colors.textcolor,
    fontSize:16
},
pricetxt:{
    ...Fonts.pricefont,
    color:colors.pricetextcolor,
    fontSize:18
},
addcarbtn:{
    width:130,
    height:38,
    backgroundColor:colors.btncolor1,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    marginTop:14
},
txtcontent:{
    gap:14
},
shopbtn:{
    width:355,
    backgroundColor:colors.btncolor1,
   alignItems:"center",
   justifyContent:"center",
   paddingVertical:12,
   borderRadius:5
},
searchbtn:{
  width:355,
    backgroundColor:colors.btncolor3,
   alignItems:"center",
   justifyContent:"center",
   paddingVertical:12,
   borderRadius:5  
},
add_searchbtn:{
    gap:22,
    marginTop:30
}



})