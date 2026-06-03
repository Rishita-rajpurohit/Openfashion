import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView ,Alert} from 'react-native'
import colors from './Colors'
import Fonts from './Fonts'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup'
import  AsyncStorage from '@react-native-async-storage/async-storage'
import {Storage} from '../services/storage/index'

const Signup = () => {

  const navigation = useNavigation();

  const SignupSchema = yup.object().shape({
firstName:yup.string().min(2, 'too short')
.max(50, 'too long')
.required('Required'),

lastName:yup.string().min(2, "too short")     
.max(50, "too long")
.required('Required'),

email:yup.string().email('Invalid email')
.required('Required'),

password:yup.string()
.min(8, "password is too short")
.required('Required')




})
  return (
    <View style={styles.maincontainer}>

<ScrollView showsVerticalScrollIndicator={false}>

<TouchableOpacity onPress={navigation.goBack}>
      <MaterialIcons name="keyboard-backspace" size={26} color="#5F6E6B" />
     </TouchableOpacity>

       <View style={{alignItems:"center"}}>
        <Text style={{ ...Fonts.logofont, color:colors.headingtextcolor }}>
          logo
        </Text>
       </View>


<Formik
initialValues={{
firstName:"",
lastName:"",
email:"",
password:"",

}}

validationSchema={SignupSchema}
// onSubmit={values=>{
//   console.log(values)
//   navigation.navigate('Login1')
// }}

onSubmit={async values=>{

  try{
    // const userdata= JSON.stringify(values)

    // await AsyncStorage.setItem('user', userdata)
    await Storage.setItem('user', values)

    console.log('data saved')
    navigation.navigate('Login1')
  }
  catch(error){
    console.log(error)
  }



}}



>


{({ values, errors, touched, handleChange, handleSubmit, handleBlur}) =>(
<>
       <View style={styles.inputcontainers}>


        <View style={{width:355, borderBottomWidth:1, borderBottomColor:"#AA8E82", paddingVertical:10}}>
                <TextInput
                           style={{...Fonts.Titlefont, fontSize:18}}
                           placeholder="first name"
                           placeholderTextColor={colors.textcolor}
                           value={values.firstName}
                           onChangeText={handleChange('firstName')}
                           onBlur={handleBlur('firstName')}
                            autoCapitalize="words" 
                         />
        </View>

        {touched.firstName && errors.firstName && 
        (<Text style={styles.errortxt}>
          {errors.firstName}
        </Text>)}


        <View style={{width:355, borderBottomWidth:1, borderBottomColor:"#AA8E82",paddingVertical:10}}>
                <TextInput
                           style={{...Fonts.Titlefont, fontSize:18}}
                           placeholder="last name"
                           placeholderTextColor={colors.textcolor}
                             value={values.lastName}
                           onChangeText={handleChange('lastName')}
                           onBlur={handleBlur('lastName')}
                         />
        </View>

  {touched.lastName && errors.lastName && 
        (<Text style={styles.errortxt}>
          {errors.lastName}
        </Text>)}


        <View style={{width:355, borderBottomWidth:1, borderBottomColor:"#AA8E82",paddingVertical:10}}>
                <TextInput
                           style={{...Fonts.Titlefont, fontSize:18}}
                           placeholder="Email"
                           placeholderTextColor={colors.textcolor}
                           value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  autoCapitalize="none"
                  keyboardType="email-address"
                         />
        </View>

        {touched.email && errors.email && (
          <Text style={styles.errortxt}>{errors.email}</Text>
        )}



        <View style={{width:355, borderBottomWidth:1, borderBottomColor:"#AA8E82", flexDirection:"row",  alignItems:"center", justifyContent:"space-between", paddingVertical:10}}>


                <TextInput
                           style={{...Fonts.Titlefont, fontSize:18}}
                           placeholder="password"
                           placeholderTextColor={colors.textcolor}
                           secureTextEntry
                           value={values.password}
                           onChangeText={handleChange('password')}
                           onBlur={handleBlur('password')}
                           autoCapitalize='none'
                         />

                        
                         <MaterialCommunityIcons name="eye-off" size={24} color="#B9B9B9" />
        </View>

         {touched.password && errors.password && (
                          <Text style={styles.errortxt}>{errors.password}</Text>
                         )}

       </View>



<View style={{gap:20, marginTop:40, alignItems:'center', justifyContent:"center"}}>

<View >

<Text   style={{...Fonts.Titlefont, fontSize:16, color:colors.textcolor}}>by signing up , you agree to our </Text>
<TouchableOpacity><Text   style={{...Fonts.Titlefont, fontSize:16,color:colors.textcolor, textDecorationLine:"underline", textAlign:"center"}}>privacy and terms</Text>  </TouchableOpacity>

</View>

{/* button */}

<TouchableOpacity

style={{width:355, backgroundColor:colors.btncolor1, borderRadius:5, paddingVertical:16}}
 onPress={handleSubmit}> 
<Text style={{textAlign:"center", color:colors.textcolor2, ...Fonts.Titlefont}}>create an account</Text></TouchableOpacity>


<View style={{flexDirection:"row"}}> 
  <Text style={{...Fonts.Titlefont, fontSize:16, color:colors.textcolor}}>Already have an account?</Text>
  <TouchableOpacity onPress={()=> navigation.navigate('Login1')} ><Text style={{...Fonts.Titlefont, fontSize:16, color:colors.logocolor}}> LOGIN</Text></TouchableOpacity>
</View>






</View>
</>
)}
</Formik>





</ScrollView>

    </View>
  )
}

export default Signup

const styles = StyleSheet.create({

maincontainer:{
 paddingHorizontal:15,
 paddingTop:40,
 backgroundColor:colors.Screenbackgroundcolor,
 flex:1,
 paddingBottom:30

},
inputcontainers:{
  marginTop:40,
  gap:15
},

errortxt:{
  ...Fonts.Titlefont,
  color:colors.discountcolor,
  fontSize:12,

}


})