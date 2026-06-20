// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import colors from '../Colors'
// import Fonts from '../Fonts'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// const AddressScreen = () => {
//   return (
//     <View style={styles.maincontainer}>
      
// <View style={styles.headingcontainer}>
//     <TouchableOpacity>
//   <MaterialIcons name="keyboard-backspace" size={26} color="#5F6E6B" />
//     </TouchableOpacity>

//     <Text style={styles.headingtxt}>Checkout</Text>
// </View>





//     </View>
//   )
// }

// export default AddressScreen

// const styles = StyleSheet.create({

// headingtxt:{
//     ...Fonts.headingfont,
//     color:colors.headingtextcolor,
    
// },
// headingcontainer:{
//     marginTop:40,
//     flexDirection:"row",
//     alignItems:"center",
//     gap:20,
    
// },
// maincontainer:{
//     backgroundColor:colors.Screenbackgroundcolor,
//     paddingHorizontal:15,
    
// }

// })


import React, {useMemo} from 'react';
import {
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';
import {Dropdown} from 'react-native-element-dropdown';
import {Country, State, City} from 'country-state-city';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import Octicons from 'react-native-vector-icons/Octicons';


import Fonts from '../Fonts';
import colors from '../Colors';
import { useDispatch, useSelector } from 'react-redux';
import { SaveAddress } from '../../store/slice/AddressSlice';
import {AddressStorage} from '../../services/storage/AddressStorage'

const AddressScreenSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('First name is required'),

  lastName: yup
    .string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Last name is required'),

  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),

  phoneNumber: yup
    .string()
    .matches(/^[6-9]\d{9}$/, 'Enter a valid phone number')
    .required('Phone number is required'),

  country: yup.string().required('Country is required'),

  state: yup.string().required('State is required'),

  city: yup.string().required('City is required'),

  streetName: yup
    .string()
    .min(3, 'Too short')
    .required('Street name is required'),

  zipCode: yup
    .string()
    .min(3, 'Invalid ZIP code')
    .max(10, 'Invalid ZIP code')
    .required('ZIP code is required'),
});

const AddressScreen = ({onContinue}) => {
  const dispatch = useDispatch();
const SAveAddress= async values =>{
  try{
  dispatch(SaveAddress(values))
  await AddressStorage.saveaddress(values)
  Alert.alert('Address Saved')
  }
  catch(error)
  {
    console.log('error in saving address', error)
  }
}

const savedAddress = useSelector(
  state=>state.Address.Address
)

  const countries = useMemo(
    () =>
      Country.getAllCountries().map(country => ({
        label: country.name,
        value: country.isoCode,
      })),
    [],
  );

  return (
    <Formik
    enableReinitialize={true}
      initialValues={{
  firstName: savedAddress?.firstName || '',
  lastName: savedAddress?.lastName || '',
  email: savedAddress?.email || '',
  phoneNumber: savedAddress?.phoneNumber || '',
  country: savedAddress?.country || '',
  state: savedAddress?.state || '',
  city: savedAddress?.city || '',
  streetName: savedAddress?.streetName || '',
  zipCode: savedAddress?.zipCode || '',
      }}
      validationSchema={AddressScreenSchema}
      onSubmit={ async values => {
        await SAveAddress(values)
        console.log('Address:', values);

        if (onContinue) {
          onContinue(values);
        }
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => {
        const states = values.country
          ? State.getStatesOfCountry(values.country).map(state => ({
              label: state.name,
              value: state.isoCode,
            }))
          : [];

        const cities =
          values.country && values.state
            ? City.getCitiesOfState(
                values.country,
                values.state,
              ).map(city => ({
                label: city.name,
                value: city.name,
              }))
            : [];

        return (
          <ScrollView contentContainerStyle={styles.container}>
            <TextInput
              placeholder="FIRST NAME"
              style={styles.input}
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
            />
            {touched.firstName && errors.firstName && (
              <Text style={styles.error}>{errors.firstName}</Text>
            )}

            <TextInput
              placeholder="LAST NAME"
              style={styles.input}
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
            />
            {touched.lastName && errors.lastName && (
              <Text style={styles.error}>{errors.lastName}</Text>
            )}

            <TextInput
              placeholder="PHONE NUMBER"
              keyboardType="phone-pad"
              style={styles.input}
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
            />
            {touched.phoneNumber && errors.phoneNumber && (
              <Text style={styles.error}>{errors.phoneNumber}</Text>
            )}

            <TextInput
              placeholder="EMAIL"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            {/* COUNTRY */}

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholder}
              selectedTextStyle={styles.selectedText}
              data={countries}
              labelField="label"
              valueField="value"
              placeholder="SELECT COUNTRY"
              value={values.country}
              onChange={item => {
                setFieldValue('country', item.value);
                setFieldValue('state', '');
                setFieldValue('city', '');
              }}
            />

            {touched.country && errors.country && (
              <Text style={styles.error}>{errors.country}</Text>
            )}

            {/* STATE */}

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholder}
              selectedTextStyle={styles.selectedText}
              data={states}
              labelField="label"
              valueField="value"
              placeholder="SELECT STATE"
              value={values.state}
              disable={!values.country}
              onChange={item => {
                setFieldValue('state', item.value);
                setFieldValue('city', '');
              }}
            />

            {touched.state && errors.state && (
              <Text style={styles.error}>{errors.state}</Text>
            )}

            {/* CITY */}

            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholder}
              selectedTextStyle={styles.selectedText}
              data={cities}
              labelField="label"
              valueField="value"
              placeholder="SELECT CITY"
              value={values.city}
              disable={!values.state}
              onChange={item => {
                setFieldValue('city', item.value);
              }}
            />

            {touched.city && errors.city && (
              <Text style={styles.error}>{errors.city}</Text>
            )}

            <TextInput
              placeholder="STREET NAME"
              style={styles.input}
              value={values.streetName}
              onChangeText={handleChange('streetName')}
              onBlur={handleBlur('streetName')}
            />
            {touched.streetName && errors.streetName && (
              <Text style={styles.error}>{errors.streetName}</Text>
            )}

            <TextInput
              placeholder="ZIP CODE"
              keyboardType="number-pad"
              style={styles.input}
              value={values.zipCode}
              onChangeText={handleChange('zipCode')}
              onBlur={handleBlur('zipCode')}
            />
            {touched.zipCode && errors.zipCode && (
              <Text style={styles.error}>{errors.zipCode}</Text>
            )}

            <View style={styles.buttons}>
              <TouchableOpacity style={styles.saveBtn} onPress={()=>SAveAddress(values)}>
                <Octicons name="diff-added" size={18} color={colors.homeiconbackgroundcolor} />
                <Text style={styles.saveTxt}>
                  SAVE ADDRESS
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.continueBtn}
                onPress={handleSubmit}>
                  <MaterialCommunityIcons name="truck" size={24} color="white" />
                <Text style={styles.continueTxt}  numberOfLines={2}>
                  CONTINUE TO SHIPPING
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#C8B6AA',
    marginTop: 25,
    paddingBottom: 10,
     fontSize: 14,
     ...Fonts.Titlefont,
    color:colors.textcolor,
  },

  dropdown: {
    borderBottomWidth: 1,
    borderBottomColor: '#C8B6AA',
    marginTop: 25,
    paddingBottom: 10,
    height: 50,
   
  },

  placeholder: {
    fontSize: 14,
     ...Fonts.Titlefont,
    color:colors.textcolor,
  },

  selectedText: {
    fontSize: 14,
  },

  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },

  buttons: {
    flexDirection: 'row',
  justifyContent:"space-between",
    marginTop: 50,
  },

  saveBtn: {
    width:'45%',
    borderWidth: 1,
    borderColor: '#C8B6AA',
    paddingVertical: 10,
    borderRadius: 8,
    paddingHorizontal:15,
   flexDirection:"row",
   gap:7,
   alignItems:"center"

  },

  continueBtn: {
    width: '50%',
    backgroundColor: '#B49B8D',
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection:"row",
    gap:21,
    paddingHorizontal:15,
    alignItems:"center"
  },

  saveTxt: {
    textAlign: 'center',
      ...Fonts.buttonfont,
      color:colors.btncolor1
  },

  continueTxt: {
  ...Fonts.buttonfont,
    color: 'white',
  },
});