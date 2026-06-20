

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import {useSelector} from 'react-redux';

import Fonts from '../Fonts';
import colors from '../Colors';

const SHIPPING_PRICE = 24.95;

const ReviewScreen = ({onBack}) => {
  const cart = useSelector(
    state => state.addtocart.addtocart,
  );

  const address = useSelector(
    state => state.Address.Address,
  );

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0,
  );

  const total = subtotal + SHIPPING_PRICE;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      
      {/* SHIPPING ADDRESS */}

      <Text style={styles.sectionTitle}>
        SHIPPING ADDRESS
      </Text>

      <View style={styles.addressCard}>
        <Text style={styles.addressText}>
          {address?.firstName} {address?.lastName}
        </Text>

        <Text style={styles.addressText}>
          {address?.streetName}
        </Text>

        <Text style={styles.addressText}>
          {address?.city}, {address?.state}
        </Text>

        <Text style={styles.addressText}>
          {address?.country}
        </Text>

        <Text style={styles.addressText}>
          {address?.phoneNumber}
        </Text>

        <Text style={styles.addressText}>
          {address?.email}
        </Text>
      </View>

      {/* ORDER DETAILS */}

      <Text style={styles.sectionTitle}>
        ORDER DETAILS
      </Text>

      <FlatList
        data={cart}
        scrollEnabled={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.productRow}>
            <Image
              source={item.images[0]}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.productInfo}>
              <Text style={styles.productTitle}>
                {item.title}
              </Text>

              <Text style={styles.price}>
                € {item.price}
              </Text>

              <View style={styles.row}>
                <Text style={styles.smallText}>
                  Size
                </Text>

                <Text style={styles.smallText}>
                  {item.selectedSize}
                </Text>
              </View>

              <Text style={styles.smallText}>
                Qty : {item.quantity}
              </Text>
            </View>
          </View>
        )}
      />

      {/* PRICE DETAILS */}

      <View style={styles.priceContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.label}>
            SUBTOTAL
          </Text>

          <Text style={styles.label}>
            € {subtotal.toFixed(2)}
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.label}>
            STANDARD SHIPPING
          </Text>

          <Text style={styles.label}>
            € {SHIPPING_PRICE.toFixed(2)}
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>
            TOTAL
          </Text>

          <Text style={styles.totalPrice}>
            € {total.toFixed(2)}
          </Text>
        </View>
      </View>

      {/* NOTE */}

      <Text style={styles.sectionTitle}>
        YOUR NOTE
      </Text>

      <TextInput
        multiline
        placeholder="WRITE YOUR NOTE"
        placeholderTextColor="#BDB6B1"
        style={styles.noteInput}
      />

      {/* BUTTONS */}

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={onBack}>
          <Text style={styles.backText}>
            GO BACK
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.paymentBtn}>
          <Text style={styles.paymentText}>
            CONTINUE TO PAYMENT
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    ...Fonts.headingfont,
    color: colors.headingtextcolor,
    marginBottom: 15,
    marginTop: 15,
  },

  addressCard: {
    backgroundColor: '#ECE5DD',
    borderRadius: 12,
    padding: 15,
  },

  addressText: {
    ...Fonts.Titlefont,
    color: colors.textcolor,
    marginBottom: 5,
  },

  productRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  image: {
    width: 90,
    height: 120,
    borderRadius: 10,
    marginRight: 15,
  },

  productInfo: {
    flex: 1,
  },

  productTitle: {
    ...Fonts.Titlefont,
    color: colors.textcolor,
    fontSize: 18,
  },

  price: {
    ...Fonts.pricefont,
    color: colors.pricetextcolor,
    marginTop: 5,
    fontSize: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  smallText: {
    ...Fonts.Titlefont,
    color: colors.textcolor,
    fontSize: 16,
  },

  priceContainer: {
    marginTop: 20,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  label: {
    ...Fonts.Titlefont,
    color: colors.textcolor,
    fontSize: 18,
  },

  totalLabel: {
    ...Fonts.Titlefont,
    color: colors.textcolor,
    fontSize: 24,
  },

  totalPrice: {
    ...Fonts.pricefont,
    color: colors.pricetextcolor,
    fontSize: 34,
  },

  noteInput: {
    borderWidth: 1,
    borderColor: '#D6D1CC',
    borderRadius: 12,
    height: 120,
    padding: 15,
    marginTop: 10,
    textAlignVertical: 'top',
    color: colors.textcolor,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  backBtn: {
    width: '42%',
    borderWidth: 1,
    borderColor: colors.homeiconbackgroundcolor,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },

  paymentBtn: {
    width: '54%',
    backgroundColor: '#B49B8D',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },

  backText: {
    ...Fonts.buttonfont,
    color: colors.textcolor,
  },

  paymentText: {
    ...Fonts.buttonfont,
    color: 'white',
  },
});