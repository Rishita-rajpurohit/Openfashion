import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React from 'react'
import colors from '../Colors'
import Fonts from '../Fonts'



const RateApp_Modal = ({visible, onClose}) => {
  return (

    <Modal visible={visible}
    transparent={true}
    >
    <View style={styles.backgroundOverlay}>
   
<View style={styles.modal_card}>

<Text style={{...Fonts.headingfont, color:colors.headingtextcolor, fontSize:20, marginBottom:15}}>Rate The App </Text>
<Text style={styles.paragraph}>
If you like this app, please take a moment to review it! It really helps us and should not take more than a minute
</Text>


<View style={styles.btncontainer}>

<Pressable onPress={onClose}>
    <Text style={styles.btntxt}>
        RATE
    </Text>
</Pressable >
<Pressable>
    <Text style={styles.btntxt}>
        MAYBE LATER
    </Text>
</Pressable>
<Pressable onPress={onClose}>
    <Text style={styles.btntxt}>
        NO THANKS
    </Text>
</Pressable>

</View>

</View>


    </View>

    </Modal>
  )
}

export default RateApp_Modal

const styles = StyleSheet.create({
backgroundOverlay:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:"center",
    alignItems:"center"
},
modal_card:{
    width:300,
    //backgroundColor:colors.Screenbackgroundcolor,
    backgroundColor:"white",
    borderRadius:15,
    padding:20,

},
paragraph:{
    ...Fonts.Titlefont,
    color:colors.textcolor,
    fontSize:14,
    textAlign:"justify",
    marginBottom:30,
},
btntxt:{
     ...Fonts.Titlefont,
    color:colors.textcolor,
    fontSize:12
},
btncontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

}


})