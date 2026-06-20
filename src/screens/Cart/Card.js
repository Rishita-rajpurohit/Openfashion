// import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
// import React from 'react'
// import colors from '../Colors'
// import Fonts from '../Fonts'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import { useSelector, useDispatch } from 'react-redux'
// import {removeAnItem,increaseqauntity,decreasequantity} from '../../store/slice/AddtoCartSlice'
// import ApplyCoupon from './ApplyCoupon'


// const Card = () => {
//   const cart = useSelector(
//     state=> state.addtocart.addtocart
//   );

//   const dispatch = useDispatch();


// if(cart.length === 0){
//   return(

// <View style={styles.emptytxtcontainer}>
//   <Text style={styles.emptyheadingtxt}>your bag is empty</Text>
//   <Text style={styles.emptytxt}>look like you haven’t added any items to your bag yet, start shopping to fill it up.</Text>
// </View>

//   )
// }


//   return (
//     <View style={{marginTop:40}}>
     
     
// <FlatList
// // data={data.slice(0,2)}
// data={cart}
// keyExtractor={(item)=>item.id}
// showsVerticalScrollIndicator={false}
// renderItem={({item})=>{


// return(
//   <View style={styles.maincard}>
//     <View style={styles.cardcontent}>
//       <View style={styles.imageContainer}>
//         <Image source={item.images[0]} style={styles.productImage} />
//       </View>

//       <View style={styles.productDetails}>
//         <View style={styles.titleRow}>
//           <Text
//             style={styles.productTitle}
//             numberOfLines={1}
//             ellipsizeMode="tail"
//           >
//             {item.title}
//           </Text>

//           <TouchableOpacity
//             hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
//             onPress={() => dispatch(removeAnItem(item.id))}
//           >
//             <AntDesign name="close" size={20} color={colors.homeiconbackgroundcolor} />
//           </TouchableOpacity>
//         </View>


// <Text style={{...Fonts.pricefont, color:colors.pricetextcolor, fontSize:18}} >€ {item.price}</Text>

// <View style={{flexDirection:"row", justifyContent:"space-between"}}>
// <Text style={{...Fonts.Titlefont, fontSize:18, color:colors.textcolor}}>Size</Text>
// <Text style={{...Fonts.Titlefont, fontSize:18, color:colors.textcolor}}>{item.selectedSize}</Text>


// </View>



// <View style={styles.qtynumcontainer}>
//   <TouchableOpacity
//     style={styles.qtybtn}
//     onPress={() => dispatch(decreasequantity(item.id))}
//   >
//     <Text style={styles.qtytxt}>-</Text>
//   </TouchableOpacity>

//   <Text style={styles.qtynum}>{item.quantity ?? 1}</Text>

//   <TouchableOpacity
//     style={styles.qtybtn}
//     onPress={() => dispatch(increaseqauntity(item.id))}
//   >
//     <Text style={styles.qtytxt}>+</Text>
//   </TouchableOpacity>
// </View>


// </View>

// </View>










// </TouchableOpacity>

// )

// }}










// />

// <ApplyCoupon/>

//     </View>
//   )
// }

// export default Card

// const styles = StyleSheet.create({

//     maincard:{
//         width:'100%',
//         backgroundColor:colors.addtocartcard,
//         marginBottom:20,
//         borderRadius:20,
//         padding:15,
//     },
 
// productImage:{
//   width:'100%',
//   height:'100%',
//   borderRadius:12,
// },
// imageContainer:{
//   width:65,
//   height:87,
// },
// productDetails:{
//   flex:1,
// },
// titleRow:{
//   flexDirection:'row',
//   justifyContent:'space-between',
//   alignItems:'center',
//   marginBottom:8,
// },
// productTitle:{
//   flex:1,
//   ...Fonts.Titlefont,
//   fontSize:18,
//   color:colors.textcolor,
//   marginRight:12,
// },
// qtytxt:{
//   fontSize:16,
//   ...Fonts.Titlefont,
//   color:colors.textcolor,
// },
// qtybtn:{
//   width:28,
//   height:28,
//   borderRadius:14,
//   backgroundColor:'#D9CBC2',
//   justifyContent:'center',
//   alignItems:'center',
// },
// qtynum:{
//   ...Fonts.Titlefont,
//   color:colors.textcolor,
//   fontSize:18,
//   marginHorizontal:12,
//   minWidth:24,
//   textAlign:'center',
// },
// qtynumcontainer:{
//   flexDirection:'row',
//   alignItems:'center',
//   justifyContent:'flex-end',
//   marginTop:10,
// },

// cardcontent:{
//     flexDirection:'row',
//     gap:10,
//     paddingRight:5,
// },
// emptyheadingtxt:{
//   ...Fonts.headingfont,
//   color:colors.headingtextcolor,
//   textAlign:"center"
// },
// emptytxt:{
//   ...Fonts.Titlefont,
//   color:colors.textcolor,
//   fontSize:16,
//   textAlign:"center"
// },
// emptytxtcontainer:{
//   gap:20,
//  top:202
  
// }

// })


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';

import colors from '../Colors';
import Fonts from '../Fonts';
import ApplyCoupon from './ApplyCoupon';

import {
  removeAnItem,
  increaseqauntity,
  decreasequantity,
} from '../../store/slice/AddtoCartSlice';

const Card = () => {
  const cart = useSelector(
    state => state.addtocart.addtocart,
  );

  const dispatch = useDispatch();

  if (!cart || cart.length === 0) {
    return (
      <View style={styles.emptytxtcontainer}>
        <Text style={styles.emptyheadingtxt}>Your bag is empty</Text>
        <Text style={styles.emptytxt}>
          Looks like you haven't added any items to your bag yet. Start
          shopping to fill it up.
        </Text>
      </View>
    );
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.maincard}>
        <View style={styles.cardcontent}>
          <View style={styles.imageContainer}>
            <Image
              source={item?.images?.[0]}
              style={styles.productImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.productDetails}>
            {/* Product Name + Remove Button */}
            <View style={styles.titleRow}>
              <Text
                style={styles.productTitle}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.title}
              </Text>

              <TouchableOpacity
                style={styles.removeBtn}
                onPress={() => dispatch(removeAnItem(item.id))}
                hitSlop={{
                  top: 10,
                  bottom: 10,
                  left: 10,
                  right: 10,
                }}>
                <AntDesign
                  name="close"
                  size={22}
                  color={colors.textcolor}
                />
              </TouchableOpacity>
            </View>

            {/* Price */}
            <Text
              style={{
                ...Fonts.pricefont,
                color: colors.pricetextcolor,
                fontSize: 18,
              }}>
              € {item.price}
            </Text>

            {/* Size */}
            <View style={styles.sizeRow}>
              <Text
                style={{
                  ...Fonts.Titlefont,
                  fontSize: 18,
                  color: colors.textcolor,
                }}>
                Size:
              </Text>

              <Text
                style={{
                  ...Fonts.Titlefont,
                  fontSize: 18,
                  color: colors.textcolor,
                }}>
                {item.selectedSize || 'N/A'}
              </Text>
            </View>

            {/* Quantity */}
            <View style={styles.qtynumcontainer}>
              <TouchableOpacity
                style={styles.qtybtn}
                onPress={() =>
                  dispatch(decreasequantity(item.id))
                }>
                <Text style={styles.qtytxt}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qtynum}>
                {item.quantity || 1}
              </Text>

              <TouchableOpacity
                style={styles.qtybtn}
                onPress={() =>
                  dispatch(increaseqauntity(item.id))
                }>
                <Text style={styles.qtytxt}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{marginTop: 40}}>
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      <ApplyCoupon />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  maincard: {
    width: '100%',
    backgroundColor: colors.addtocartcard,
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },

  cardcontent: {
    flexDirection: 'row',
  },

  imageContainer: {
    width: 80,
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
  },

  productImage: {
    width: '100%',
    height: '100%',
  },

  productDetails: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  productTitle: {
    flex: 1,
    ...Fonts.Titlefont,
    fontSize: 18,
    color: colors.textcolor,
  },

  removeBtn: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  sizeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  qtynumcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 12,
  },

  qtybtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#D9CBC2',
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtytxt: {
    ...Fonts.Titlefont,
    fontSize: 18,
    color: colors.textcolor,
  },

  qtynum: {
    ...Fonts.Titlefont,
    fontSize: 18,
    color: colors.textcolor,
    marginHorizontal: 14,
    minWidth: 24,
    textAlign: 'center',
  },

  emptytxtcontainer: {
    top: 202,
    gap: 20,
  },

  emptyheadingtxt: {
    ...Fonts.headingfont,
    color: colors.headingtextcolor,
    textAlign: 'center',
  },

  emptytxt: {
    ...Fonts.Titlefont,
    color: colors.textcolor,
    fontSize: 16,
    textAlign: 'center',
  },
});