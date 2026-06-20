import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import Fonts from '../Fonts';
import colors from '../Colors';

const CheckoutProgress = ({step}) => {
const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <MaterialIcons
            name="keyboard-backspace"
            size={30}
            color="#607176"
          />
        </TouchableOpacity>

        <Text style={styles.heading}>
          CHECKOUT
        </Text>
      </View>

      <View style={styles.tabs}>
        <Text
          style={[
            styles.tab,
            step >= 1 && styles.activeTab,
          ]}>
          ADDRESS
        </Text>

        <Text
          style={[
            styles.tab,
            step >= 2 && styles.activeTab,
          ]}>
          SHIPPING
        </Text>

        <Text
          style={[
            styles.tab,
            step >= 3 && styles.activeTab,
          ]}>
          REVIEW
        </Text>
      </View>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            {
              width:
                step === 1
                  ? '33%'
                  : step === 2
                  ? '66%'
                  : '100%',
            },
          ]}
        />
      </View>
    </>
  );
};

export default CheckoutProgress;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 15,
  },

  heading: {
    ...Fonts.headingfont,
    marginLeft: 30,
    color: colors.headingtextcolor,
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 35,
  },

  tab: {
    ...Fonts.Titlefont,
    color: '#B49B8D',
    fontSize: 18,
  },

  activeTab: {
    color: '#A88976',
  },

  progressBackground: {
    height: 1,
    backgroundColor: '#CBB9AE',
    marginTop: 15,
  },

  progressFill: {
    height: 3,
    backgroundColor: '#AE9485',
  },
});