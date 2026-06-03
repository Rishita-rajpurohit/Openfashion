import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import colors from './Colors';
import Fonts from './Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Authstorage } from '../services/storage/authStorage';

const Login1 = () => {
  const navigation = useNavigation();

  const LoginSchema = yup.object().shape({
    email: yup.string().email('invalid email').required('Required'),

    password: yup.string().min(8, 'password i stoo short').required('Required'),
  });

  return (
    <View style={styles.maincontainer}>
      <TouchableOpacity onPress={navigation.goBack}>
        <MaterialIcons name="keyboard-backspace" size={26} color="#5F6E6B" />
      </TouchableOpacity>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ ...Fonts.logofont, color: colors.headingtextcolor }}>
          logo
        </Text>
      </View>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        // onSubmit={values=>{
        //   console.log(values)
        //   navigation.navigate('HomeScreen')
        // }}
        onSubmit={async values => {
          try {
            const saveddata = await AsyncStorage.getItem('user');

            if (saveddata) {
              const parseddata = JSON.parse(saveddata);

              if (
                values.email === parseddata.email &&
                values.password === parseddata.password
              ) {
                await Authstorage.setToken('user_logged_in');

                console.log('login successful');
                navigation.navigate('HomeScreen');
              } else {
                Alert.alert('wrong credentials or user not found');
              }
            }
            // else{
            //   Alert.alert('user not found')
            // }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <>
            <View style={styles.inputcontainers}>
              <View
                style={{
                  width: 355,
                  borderBottomWidth: 1,
                  borderBottomColor: '#AA8E82',
                  paddingVertical: 10,
                }}
              >
                <TextInput
                  style={{ ...Fonts.Titlefont, fontSize: 18 }}
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

              <View
                style={{
                  width: 355,
                  borderBottomWidth: 1,
                  borderBottomColor: '#AA8E82',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingVertical: 10,
                }}
              >
                <TextInput
                  style={{ ...Fonts.Titlefont, fontSize: 18 }}
                  placeholder="password"
                  placeholderTextColor={colors.textcolor}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  autoCapitalize="none"
                />
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="eye-off"
                    size={24}
                    color="#B9B9B9"
                  />
                </TouchableOpacity>
              </View>

              {touched.password && errors.password && (
                <Text style={styles.errortxt}>{errors.password}</Text>
              )}
            </View>

            <View
              style={{
                gap: 20,
                marginTop: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View>
                <TouchableOpacity>
                  <Text
                    style={{
                      ...Fonts.Titlefont,
                      fontSize: 16,
                      color: colors.textcolor,
                      textDecorationLine: 'underline',
                      textAlign: 'center',
                    }}
                  >
                    reset password
                  </Text>{' '}
                </TouchableOpacity>
              </View>

              {/* login button */}

              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  width: 340,
                  backgroundColor: colors.btncolor1,
                  borderRadius: 30,
                  paddingVertical: 18,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: colors.textcolor2,
                    ...Fonts.Titlefont,
                  }}
                >
                  sign in
                </Text>
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text
                  style={{
                    ...Fonts.Titlefont,
                    fontSize: 16,
                    color: colors.textcolor,
                  }}
                >
                  Dont have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                  <Text
                    style={{
                      ...Fonts.Titlefont,
                      fontSize: 16,
                      color: colors.logocolor,
                    }}
                  >
                    {' '}
                    sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login1;

const styles = StyleSheet.create({
  maincontainer: {
    paddingHorizontal: 15,
    paddingTop: 40,
    backgroundColor: colors.Screenbackgroundcolor,
    flex: 1,
  },
  inputcontainers: {
    marginTop: 40,
    gap: 15,
  },
  errortxt: {
    ...Fonts.Titlefont,
    color: colors.discountcolor,
    fontSize: 12,
  },
});
