// import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native'
// import React, { useState } from 'react'
// import colors from '../Colors'
// import Line from './Line'

// const Justfotyou = () => {

//     const [index, setIndex]=useState(0)
//  const data =[
//     {
//       id: '1',
//       image: require('../../assets/images/productimg1.png'),
//       title: 'Harris Tweed Three button Jacket',
//       price: '$120',
//     },

//     {
//       id: '2',
//       image: require('../../assets/images/productimg2.png'),
//       title: 'Cashmere Blend Jacket',
//       price: '$120',
//     },

//     {
//       id: '3',
//       image: require('../../assets/images/productimg3.png'),
//       title: 'Boucle Knit Cardigan',
//       price: '$120',
//     },

//     {
//       id: '4',
//       image: require('../../assets/images/productimg4.png'),
//       title: 'Oblong bag',
//       price: '$120',
//     },
//  ]





//   return (
//     <View>
//       <Text style={styles.txt}>JUST FOR YOU</Text>


// <FlatList
// data={data}
// horizontal
// showsHorizontalScrollIndicator={false}
//  snapToInterval={315}
// keyExtractor={(item)=>item.id}

// onMomentumScrollEnd={(event) => {

//           const activeIndex = Math.round(
//             event.nativeEvent.contentOffset.x / 315
//           )

//           setIndex(activeIndex)

//         }}

//          renderItem={({ item }) => (

            
//           <TouchableOpacity style={styles.card}>

//             <Image
//               source={item.image}
//               style={styles.image}
//             />

//             <Text
//               style={styles.title}
//               numberOfLines={2}
//             >
//               {item.title}
//             </Text>

//             <Text style={styles.price}>
//               {item.price}
//             </Text>


//           </TouchableOpacity>

//         )}
      

// />
//  <View style={styles.dotContainer}>

//         {data.map((_, i) => (

//           <View
//             key={i}
//             style={[
//               styles.dot,
//               index === i && styles.activeDot
//             ]}
//           />

//         ))}

//       </View>

//      <Line/>
//     </View>
//   )
// }

// export default Justfotyou

// const styles = StyleSheet.create({
//       txt:{
//         fontSize:20,
//   color:colors.title,
//   textAlign:"center",
//   fontWeight:"500",
//   paddingBottom:16,},

//    card: {
//     width: 300,
//     marginRight: 15,
//     alignItems: 'center',
//   },

//   image: {
//     width: '100%',
//     height: 400,
//     resizeMode: 'cover',
//   },

//   title: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 12,
//     lineHeight: 28,
//     width: '90%',
//   },

//   price: {
//     fontSize: 18,
//     color: colors.price,
//     marginTop: 8,
//   },

//   dotContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop:14,
//     marginBottom:40,
//   },

//   dot: {
//     width: 8,
//     height: 8,
//     borderWidth: 1,
//     borderColor: '#999',
//     transform: [{ rotate: '45deg' }],
//     marginHorizontal: 6,
//   },

//   activeDot: {
//     backgroundColor: "#888888",
//     borderColor: '#888888',
//   },


// })