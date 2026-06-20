import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import colors from '../Colors';
import Fonts from '../Fonts';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Totalprice = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.addtocart.addtocart);

  const handlecheckout = () => {
    if (cart.length === 0) {
      Alert.alert('cart is empty');
      navigation.navigate('HomeScreen');
      return;
    }
    navigation.navigate('CheckoutScreen');
  };

  const totalquantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  return (
    <View style={styles.maincontainer}>
      <View style={styles.productcontainer}>
        <Text style={styles.product}>products</Text>
        //total number of products and also total number of quantity
        <Text style={styles.totalproductnum}>X{totalquantity}</Text>
      </View>

      <View style={styles.pricecontainer}>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Text style={styles.totalpricetxt}>€ {totalPrice}</Text>
          <TouchableOpacity>
            <FontAwesome6
              name="angle-up"
              size={20}
              color={colors.pricetextcolor}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.checkoutbtn} onPress={handlecheckout}>
          <MaterialIcons name="logout" size={16} color={colors.textcolor2} />
          <Text style={styles.checkoutbtntxt}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Totalprice;

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    backgroundColor: colors.addtocartcard,
    height: 180,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  product: {
    ...Fonts.Titlefont,
    fontSize: 16,
    color: colors.textcolor,
  },
  totalproductnum: {
    ...Fonts.Titlefont,
    fontSize: 16,
    color: colors.textcolor,
  },
  productcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalpricetxt: {
    ...Fonts.pricefont,
    color: colors.pricetextcolor,
    fontSize: 30,
  },

  checkoutbtntxt: {
    ...Fonts.buttonfont,
    color: colors.textcolor2,
    fontSize: 12,
  },
  checkoutbtn: {
    backgroundColor: colors.btncolor1,
    width: 127,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  pricecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
