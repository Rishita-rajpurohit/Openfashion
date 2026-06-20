import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import Fonts from '../Fonts'
import colors from '../Colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
const Filter = ({onOpenFilter}) => {
  return (
    <View style={styles.maincontainer}>
      
   <TouchableOpacity style={styles.datecontainer}>
    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:14}}>Date</Text>
    <FontAwesome5 name="sort-amount-down" size={15} color={colors.headingtextcolor} />
   </TouchableOpacity>


   <TouchableOpacity style={styles.filetrcontainer} onPress={onOpenFilter}>
    <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:14}}>Filter</Text>

    <Entypo name="chevron-right"  size={15} color={colors.headingtextcolor} />
   </TouchableOpacity>

    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
datecontainer:{
    flexDirection:"row",
    width:75,
    justifyContent:"space-between",
    alignItems:"center",
    padding:6,
    borderColor:colors.btncolor1,
    backgroundColor:colors.btncolor2,
    borderWidth:1,
    borderRadius:5
},
filetrcontainer:{
     flexDirection:"row",
    width:75,
    justifyContent:"space-between",
    alignItems:"center",
    padding:6,
    borderLeftWidth:1,
    borderLeftColor:colors.btncolor1,
    
},
maincontainer:{
    flexDirection:"row",
    marginTop:22,
    marginLeft:15,
    marginRight:15,
    justifyContent:"space-between",
    marginBottom:24,
}


})