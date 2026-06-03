import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import colors from '../Colors'
import Fonts from '../Fonts'

const Reviewcard = () => {
const data=[

{
    id:"1",
    reviewtxt:"LLorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum has been the industry's",
    image:require('../../assets/images/User_profile_img.png'),
    UserName:"JOHN ALETHEAN",
    type:"Customer",
    Review:"4.5"
},
{
    id:"2",
    reviewtxt:"LLorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum has been the industry's",
    image:require('../../assets/images/User_profile_img.png'),
    UserName:"JOHN ALETHEAN",
    type:"Customer",
    Review:"4.5"
},
{
    id:"3",
    reviewtxt:"LLorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum has been the industry's",
    image:require('../../assets/images/User_profile_img.png'),
    UserName:"JOHN ALETHEAN",
    type:"Customer",
    Review:"4.5"
},
{
    id:"4",
    reviewtxt:"LLorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum has been the industry's",
    image:require('../../assets/images/User_profile_img.png'),
    UserName:"JOHN ALETHEAN",
    type:"Customer",
    Review:"4.5"
}


]

  return (
    <View>
     <FlatList  
    data={data}
    keyExtractor={(item)=>item.id}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({item})=>{
return(
<View style={styles.cardcontainer}>
<View style={styles.upperCard}>
<Text style={styles.reviewtxt}  numberOfLines={4}>{item.reviewtxt}</Text>

</View>

<View style={styles.profileimgcontainer}>
<Image source={item.image} style={styles.profileimg} />
    </View>


<View style={styles.bottomCard}>

<Text style={styles.userName}>{item.UserName}</Text>
<Text style={styles.userType}>{item.type}</Text>


</View>

</View>
)


  }}

    
    

    
    />

  
    </View>
  )
}

export default Reviewcard

const styles = StyleSheet.create({


    cardcontainer:{

        marginTop:40,
width:304,
height:265,
borderWidth:1,
borderRadius:40,
borderColor:colors.reviewcardBorderColor,
overflow:"hidden",
marginRight:30,
marginBottom:90,

    },
    upperCard:{
        
        backgroundColor:colors.reviewcardcolor1,
        height:170,
      
    },
    reviewtxt:{
     fontSize:14,
     color:colors.textcolor2,
     ...Fonts.Titlefont,
     textAlign:"center",
     lineHeight:20,
     marginTop:16
    },

profileimg:{
     width:93,
    height:93,
   borderRadius:90,
   
   

    
},

profileimgcontainer:{
position:"absolute",
   top:104,
   zIndex:1,
   left:106
},



    bottomCard:{
        flex:1,
        backgroundColor:colors.reviewcardcolor2,
    },
    userName:{
        ...Fonts.Titlefont,
        color:colors.textcolor,
        textAlign:"center",
        marginTop:30,
        fontWeight:"600"
    },
    userType:{
          ...Fonts.Titlefont,
        color:colors.textcolor,
        textAlign:"center",
        fontSize:10,
        marginTop:5,
        
    }

})