import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React from 'react'
import Fonts from '../Fonts'
import colors from '../Colors'

const Filter_Modal = ({visible, onClose, setSorttype}) => {
  return (
   <Modal
   visible={visible}
   transparent
   animationType='slide'>

<View style={styles.overlaycontainer}>

<View style={styles.maincontainer}>

<View style={styles.headingtxt}>
    <Text style={{...Fonts.headingfont, color:colors.textcolor, fontSize:20, marginBottom:20}}>
        Sort By
    </Text>


    <TouchableOpacity onPress={onClose}>
        <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:14}}>close</Text>
    </TouchableOpacity>
</View>

<View style={styles.pricecontainer}>

    <TouchableOpacity style={styles.btncontainer} onPress={()=>{
        setSorttype("lowtohigh")
        onClose();
    }}>
        <Text style = {styles.btntxt}>
            Price: low to high
        </Text>
    </TouchableOpacity>

      <TouchableOpacity style={styles.btncontainer} onPress={()=>{
        setSorttype("hightolow")
        onClose();
      }}>
        <Text style = {styles.btntxt}>
            Price: high to low
        </Text>
    </TouchableOpacity>

</View>



<View style={styles.pricecontainer}>

    <TouchableOpacity style={styles.btncontainer} onPress={()=>{
        setSorttype("atoz")
        onClose();
    }}>
        <Text style = {styles.btntxt}>
            Title: A to z
        </Text>
    </TouchableOpacity>

       <TouchableOpacity style={styles.btncontainer} onPress={()=>{
           setSorttype("ztoa")
           onClose();
       }}>
       <Text style = {styles.btntxt}>
             Title: Z to A
        </Text>
    </TouchableOpacity>

</View>


</View>


</View>


   </Modal>
  )
}

export default Filter_Modal

const styles = StyleSheet.create({

    overlaycontainer:{
        flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.2)',
    },
maincontainer:{
    backgroundColor:colors.Screenbackgroundcolor,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    padding:15,

},
btncontainer:{
    width:180,
    paddingVertical:10,
    paddingHorizontal:2,
    borderRadius:10,
    backgroundColor:colors.btncolor2,
    alignItems:"center",
    justifyContent:"center"
},
btntxt:{
    ...Fonts.buttonfont,
    color:colors.textcolor,
    fontSize:14
},
pricecontainer:{
    flexDirection:"row",
    gap:10,
    marginBottom:10
},
headingtxt:{
    flexDirection:"row",
    justifyContent:"space-between"
}
})