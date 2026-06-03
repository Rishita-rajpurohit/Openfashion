import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
  return (
    <View>
     <View>
        <ImageBackground source={{uri:"https://i.pinimg.com/1200x/59/91/64/599164f80a1dd86f6509ebb88c945921.jpg"}} style={styles.img}/>
     </View>
 <View>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.subHeading}>Login to your account</Text>
      </View>

     <View>
        <TextInput placeholder=''></TextInput>
     </View>


 <View style={styles.inputBox}>
        <View style={styles.inputBox1}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="email-outline"
            size={22}
            color="#323232"
          />

          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#323232"
          />
        </View>
        <View style={styles.inputBox1}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="lock-outline"
            size={24}
            color="#323232"
          />
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#323232"
            secureTextEntry
          />
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    img:{
        width:"100%",
        height:304,
         borderBottomRightRadius: 250,
    overflow: 'hidden',
    },
     heading: {
    marginTop: 20,
    color: '#323232',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
  subHeading: {
    paddingTop: 5,
    color: '#323232',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  inputBox: {
    alignItems: 'center',
    gap: 10,
  },
  inputBox1: {
    backgroundColor: '#EFECEC',
    height: 50,
    width: 363,
    borderRadius: 9,
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 16,
  },
  inputText: {
    flex: 1,
    
    fontSize: 16,
    color: '#323232',
    fontWeight: '500',
    marginLeft: 12,
  },
  icon: {
    paddingTop: 10,
  },
})