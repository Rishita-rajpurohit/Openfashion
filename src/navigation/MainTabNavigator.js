// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import HomeStack from './stack/HomeStack'
// import ProfileStack from './stack/ProfileStack'
// import SearchStack from './stack/SearchStack'
// import CartStack from './stack/CartStack'
// import WishlistStack from './stack/WishlistStack'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import colors from '../screens/Colors'

// const MainTabNavigator = () => {
// const Tab = createBottomTabNavigator();


//   return (

//     <Tab.Navigator
//     screenOptions={({route})=>({
//         headerShown:false,
//         tabBarShowLabel: false,
//         tabBarIcon:({focused,color,size})=>{
//             let iconName
//             if(route.name ==='ProfileStack'){
//                 iconName='user-circle-o'
//             }
//             else if(route.name === 'SearchStack'){
//                 iconName='search'
//             }
//             else if(route.name === 'HomeStack'){
//                 iconName='home'
//             }
//             else if(route.name === 'WishlistStack'){
//                 iconName='heart-o'
//             }
//             else if(route.name === 'CartStack'){
//                 iconName='shopping-cart'
//             }
// if(route.name === 'HomeStack'){
//         return (
//             <View style={{
//                   width:50,
//     height:50,
//     // backgroundColor:'#734E42',
//     backgroundColor:colors.homeiconbackgroundcolor,
//     color:colors.Screenbackgroundcolor,

//     alignItems:'center',
//     justifyContent:'center',

//     borderRadius:25,
//     top:-15,
//     // elevation:15
//             }}>
//                 <FontAwesome
//                     name={iconName}
//                     size={20}
//                     color="white"
//                 />
//             </View>
//         )
//     }

//                 return <FontAwesome name={iconName} size={24} color={color}/>

//         },
//     //      tabBarActiveTintColor: '#734E42',
//     //   tabBarInactiveTintColor: "#AB8E82",
//          tabBarActiveTintColor: colors.iconactiveclor,
//       tabBarInactiveTintColor: colors.iconInactivecolor,

//     })}>
//        <Tab.Screen name='ProfileStack' component={ProfileStack}/>
//        <Tab.Screen name='SearchStack' component={SearchStack}/>
//        <Tab.Screen name='HomeStack' component={HomeStack}/>
//        <Tab.Screen name='WishlistStack' component={WishlistStack}/>
//        <Tab.Screen name='CartStack' component={CartStack}/>


//     </Tab.Navigator>
    
    
    

    
  
//   )
// }

// export default MainTabNavigator

// const styles = StyleSheet.create({})



import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useSelector } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Svg, { Path } from 'react-native-svg';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeStack from './stack/HomeStack';
import ProfileStack from './stack/ProfileStack';
import SearchStack from './stack/SearchStack';
import CartStack from './stack/CartStack';
import WishlistStack from './stack/WishlistStack';

import colors from '../screens/Colors';

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('window');





/* ================= CUSTOM TAB BAR ================= */

function CustomTabBar({ state, navigation }) {
  const cart = useSelector(state => state.addtocart.addtocart);
  const totalCartQuantity = cart.reduce(
    (sum, item) => sum + (item.quantity ?? 0),
    0,
  );

  const center = width / 2;

  /* BEZIER CURVE PATH */
  const path = `
    M0 0
    
    H${center - 34}
    
    C${center - 28} 0,
     ${center - 30} 32,
     ${center} 32
    
    C${center + 30} 32,
     ${center + 28} 0,
     ${center + 34} 0
    
    H${width}
    V58
    H0
    Z
  `;

  return (
    <View style={styles.container}>

      {/* ================= BACK WHITE BAR ================= */}

      <View style={styles.backBar} />



      {/* ================= FRONT BAR WITH CURVE SHADOW ================= */}

      <View style={styles.frontBar}>
        <Svg width={width} height={58} style={StyleSheet.absoluteFill}>
          
          {/* SHADOW LAYER 1 - behind the curve */}
          <Path
            d={path}
            fill="rgba(0,0,0,0.15)"
            transform={[{ translateY: 5 }]}
          />
          
          {/* SHADOW LAYER 2 - softer blur effect */}
          <Path
            d={path}
            fill="rgba(0,0,0,0.08)"
            transform={[{ translateY: 3 }]}
          />
          
          {/* MAIN CURVE - on top */}
          <Path
            d={path}
            fill={colors.Screenbackgroundcolor}
          />
          
        </Svg>
      </View>



      {/* ================= ICONS ================= */}

      <View style={styles.iconRow}>

        {state.routes.map((route, index) => {

          const focused = state.index === index;

          let iconName = '';

          if (route.name === 'ProfileStack') {
            iconName = 'user-circle-o';
          }
          else if (route.name === 'SearchStack') {
            iconName = 'search';
          }
          else if (route.name === 'HomeStack') {
            iconName = 'home';
          }
          else if (route.name === 'WishlistStack') {
            iconName = 'heart-o';
          }
          else if (route.name === 'CartStack') {
            iconName = 'shopping-cart';
          }

          const onPress = () => {
            navigation.navigate(route.name);
          };



          /* ================= HOME BUTTON WITH SHADOW ================= */

          if (route.name === 'HomeStack') {

            return (

              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                activeOpacity={0.9}
                style={styles.homeButton}
              >

                <FontAwesome
                  name={iconName}
                  size={24}
                  color="white"
                />

              </TouchableOpacity>
            );
          }



          /* ================= NORMAL TABS ================= */

          return (
            <View style={styles.iconWrapper} key={route.key}>
              <TouchableOpacity
                onPress={onPress}
                style={styles.iconButton}
                activeOpacity={0.7}
              >
                <FontAwesome
                  name={iconName}
                  size={24}
                  color={
                    focused
                      ? colors.iconactiveclor
                      : colors.iconInactivecolor
                  }
                />
              </TouchableOpacity>
              {route.name === 'CartStack' && totalCartQuantity > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {totalCartQuantity}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}





/* ================= MAIN NAVIGATOR ================= */

const MainTabNavigator = () => {

  return (

    <Tab.Navigator

      tabBar={(props) => (
        <CustomTabBar {...props} />
      )}

      screenOptions={{
        headerShown: false,
      }}
    >

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
      />

      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
      />

      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
      />

      <Tab.Screen
        name="WishlistStack"
        component={WishlistStack}
      />

      <Tab.Screen
        name="CartStack"
        component={CartStack}
      />

    </Tab.Navigator>
  );
};

export default MainTabNavigator;





/* ================= STYLES ================= */

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 58,
  },

  /* BACK WHITE LAYER */
  backBar: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 58,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
  },

  /* FRONT SCREEN COLOR LAYER */
  frontBar: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: 58,
  },

  /* ICON ROW */
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 58,
  },

  /* NORMAL ICONS */
  normalTab: {
    flex: 1,
    alignItems: 'center',
  },

  iconWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  badge: {
    position: 'absolute',
    top: 6,
    right: 24,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },

  /* CENTER HOME BUTTON WITH SHADOW */
  homeButton: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: colors.homeiconbackgroundcolor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
    
    // DROP SHADOW
    shadowColor: '#000',
    shadowOffset: { width: 45, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius:45,
    elevation: 3,
  },
});