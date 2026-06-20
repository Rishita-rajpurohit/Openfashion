import { StyleSheet, Text, View } from 'react-native'
import React,{useState, useEffect} from 'react'
import AddressScreen from './checkout/AddressScreen'
import ReviewScreen from './checkout/ReviewScreen'
import ShippingScreen from './checkout/ShippingScreen'
import CheckoutProgress from './checkout/CheckoutProgress'
import { useDispatch } from 'react-redux'
import { SaveAddress } from '../store/slice/AddressSlice';
import { AddressStorage } from '../services/storage/AddressStorage';

import colors from './Colors';

const CkeckoutScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  loadAddress();
}, []);

const loadAddress = async () => {
  const address =
    await AddressStorage.getaddress();

  if (address) {
    dispatch(SaveAddress(address));
  }
};
 const [step, setStep] = useState(1);

  return (
    <View style={styles.container}>
      <CheckoutProgress step={step} />

      {step === 1 && (
        <AddressScreen
          onContinue={address => setStep(2)}
        />
      )}

      {step === 2 && (
        <ShippingScreen
          onBack={() => setStep(1)}
          onContinue={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <ReviewScreen
          onBack={() => setStep(2)}
        />
      )}
    </View>
  );

}

export default CkeckoutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Screenbackgroundcolor,
  },
})