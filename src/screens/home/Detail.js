import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import colors from '../Colors'
import Line from './Line'
const Detail = () => {

    data=[
        {id:"1",
            Image:require('../../assets/images/fastshipping.png'),
            description:"Fast shipping. Free on orders over $25."
        },
        {id:"2",
            Image:require('../../assets/images/sustainableprocess.png'),
            description:"Sustainable process. Made with eco-friendly materials."
        },
        {id:"3",
            Image:require('../../assets/images/uniquedesign.png'),
            description:"Unique designs and high-quality materials."
        },
        {id:"4",
            Image:require('../../assets/images/fastshipping2.png'),
            description:"Fast shipping. Free on orders over $25."
        },
    ]


  return (
    <View>
        <View  style={styles.imagecontainer}>
     <Image source={require('../../assets/images/Logo2.png')} />
     </View>
     <Text style={styles.description}>
       Making a luxurious lifestyle accessible for a generous group of women is our daily drive.
     </Text>

     <Line/>



<FlatList
data={data}
keyExtractor={(item)=>item.id}
numColumns={2}
showsVerticalScrollIndicator={false}
columnWrapperStyle={{justifyContent:"space-around",marginBottom:20}}
renderItem={({item})=>{
    return(
        <View style={{width:129,alignItems:"center"}}>
<Image source={item.Image} />
<Text numberOfLines={4} style={styles.txt}>{item.description}</Text>
            </View>
    )
}}


/>

    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
imagecontainer:{
    marginTop:30,
    alignItems:"center",

},

description:{
    textAlign:"center",
    fontSize:16,
    lineHeight:20,
    marginTop:20,
    paddingHorizontal:44,
    color:colors.othertitle,
},
txt:{
    textAlign:"center",
     color:colors.othertitle,
}

})