import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import colors from '../Colors'
import Line from './Line'

const Collection = () => {
  return (
    <View style={styles.collectioncontainer}>

        <Text style={styles.txt}>COLLECTION</Text>
      <TouchableOpacity style={styles.imgcontainer}>
       <Image source={require('../../assets/images/collection1.png')} style={styles.img}></Image>
      </TouchableOpacity>

      <TouchableOpacity style={styles.imgcontainer}>
       <Image source={require('../../assets/images/collection2.png')} style={styles.img}></Image>
      </TouchableOpacity>

<Line/>
    </View>
  )
}

export default Collection

const styles = StyleSheet.create({
    collectioncontainer:{
        justifyContent:"center",
        marginTop:20,
       

    },
    txt:{
        fontSize:20,
  color:colors.title,
  textAlign:"center",
  fontWeight:"500",
  paddingBottom:16,
 
    },
    img:{
        overflow:"hidden",
    },
    imgcontainer:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:40,
    }
})
