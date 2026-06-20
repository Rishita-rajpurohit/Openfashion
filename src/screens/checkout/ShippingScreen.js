import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Fonts from '../Fonts'
import colors from '../Colors';
import {RadioButton} from 'react-native-paper'

const ShippingScreen = ({
  onBack,
  onContinue,
}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        SHIPPING METHOD
      </Text>

      <View style={styles.card}>
<RadioButton
value='selected'
status='checked'
color={colors.homeiconbackgroundcolor}

/>
<View>
        <Text style={{...Fonts.Titlefont, color:colors.textcolor, fontSize:18}}>STANDARD SHIPPING</Text>
        <Text style={{...Fonts.Titlefont, color:"#9CA6A8", fontSize:18  }}>€ 24.95</Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={onBack}>
          <Text style={{color:colors.textcolor}}>GO BACK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.continueBtn}
          onPress={onContinue}>
          <Text style={{color: 'white'}}>
            CONTINUE TO REVIEW
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShippingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 28,
    marginBottom: 30,
    ...Fonts.Titlefont,
    color:colors.textcolor
  },

  card: {
    padding: 25,
    backgroundColor: '#ECE5DD',
    flexDirection:"row",
    gap:14,
    alignItems:"center"
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 30,
  },

  backBtn: {
    width: '42%',
    borderWidth: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius:10,
    borderColor:colors.homeiconbackgroundcolor,

  },

  continueBtn: {
    width: '52%',
    backgroundColor: '#B49B8D',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius:10,
        borderColor:colors.homeiconbackgroundcolor,
  },
});