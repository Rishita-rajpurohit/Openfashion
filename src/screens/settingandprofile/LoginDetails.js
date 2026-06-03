import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../Colors';
import Fonts from '../Fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Authstorage } from '../../services/storage/authStorage';

const LoginDetails = () => {
  const navigation = useNavigation();
  const [userdata, setuserdata] = useState(null);

  useEffect(() => {
    getuserdata();
  }, []);

  const getuserdata = async () => {
    try {
      const storeduser = await AsyncStorage.getItem('user');
      if (storeduser) {
        const parseduser = JSON.parse(storeduser);
        setuserdata(parseduser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.logindetails}>
        <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
          <TouchableOpacity style={styles.userprofile}>
            <Text style={{ color: 'white', ...Fonts.headingfont }}>
              {userdata?.firstName?.charAt(0)}
            </Text>
          </TouchableOpacity>

          <View>
            <Text
              style={{
                color: colors.textcolor,
                ...Fonts.Titlefont,
                fontSize: 16,
              }}
            >
              {userdata?.firstName}
            </Text>
            <Text
              style={{
                color: colors.textcolor,
                ...Fonts.Titlefont,
                fontSize: 16,
              }}
            >
              {userdata?.email}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="pencil"
            size={24}
            color={colors.homeiconbackgroundcolor}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutbtnconatiner}
        onPress={() => navigation.navigate('Login1')}
      >
        <View style={{ flexDirection: 'row', gap: 23, alignItems: 'center' }}>
          <Image source={require('../../assets/images/log_outicon.png')} />
          <Text
            style={{
              ...Fonts.Titlefont,
              color: colors.textcolor,
              fontSize: 18,
            }}
          >
            LOGOUT{' '}
          </Text>
        </View>

        <FontAwesome
          name="angle-right"
          size={24}
          color={colors.homeiconbackgroundcolor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LoginDetails;

const styles = StyleSheet.create({
  maincontainer: {
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 30,
    marginTop: 20,
  },
  logindetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userprofile: {
    width: 47,
    height: 47,
    backgroundColor: colors.userprofilecolor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutbtnconatiner: {
    width: 356,
    height: 60,
    //backgroundColor:colors.addtocartcard,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 19,
    paddingBottom: 19,
  },
});
