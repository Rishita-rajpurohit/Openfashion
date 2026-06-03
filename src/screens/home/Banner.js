import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import colors from '../Colors'

const Banner = () => {
  return (
    <View style={styles.banner}>
     {/* <ImageBackground source={require('../../assets/images/bannerimg.png')} style={styles.img} 
      ></ImageBackground>
<View style={styles.bannerTextContainer}>
      <Text style={styles.bannerText}>LUXURY</Text>
      <Text style={styles.bannerText2}>FASHION</Text>
      <Text style={styles.bannerText3}>& ACCESSORIES</Text>
      </View> */}

      <ImageBackground source={require('../../assets/images/video.png')} style={styles.img}>
      </ImageBackground>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    img:{
        width:"100%",
        height:738,
        overflow: 'hidden',
         
        
    },
  
     
  bannerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.iconcolor1,
    //  color:colors.TitleText,
    
  
  },
  bannerText2:{
 fontSize: 40,
    fontWeight: 'bold',
    color: colors.iconcolor1,
    paddingLeft:20
  },

   bannerText3:{
 fontSize: 40,
    fontWeight: 'bold',
    color: colors.iconcolor1,
    paddingLeft:25
  },
  bannerTextContainer:{
  position:'absolute',
  top:200,
  marginLeft:50,
  }
})