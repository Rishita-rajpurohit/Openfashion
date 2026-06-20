import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import i18n from '../../i18n'
import colors from '../Colors';
import Fonts from '../Fonts';

const Language_Modal = ({
  visible,
  onClose,
}) => {
  const changeLanguage = language => {
    i18n.changeLanguage(language);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>

          <Text style={styles.heading}>
            Select Language
          </Text>

          <TouchableOpacity
            style={styles.languageBtn}
            onPress={() =>
              changeLanguage('en')
            }
          >
            <Text style={styles.languageTxt}>
              English
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.languageBtn}
            onPress={() =>
              changeLanguage('fr')
            }
          >
            <Text style={styles.languageTxt}>
              Français
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={onClose}
          >
            <Text style={styles.cancelTxt}>
              Cancel
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default Language_Modal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:
      'rgba(0,0,0,0.4)',
    paddingHorizontal: 20,
  },

  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
  },

  heading: {
    ...Fonts.headingfont,
    color: colors.headingtextcolor,
    marginBottom: 20,
    textAlign: 'center',
  },

  languageBtn: {
    paddingVertical: 15,
  },

  languageTxt: {
    ...Fonts.Titlefont,
    color: colors.textcolor,
    fontSize: 18,
  },

  cancelBtn: {
    marginTop: 20,
  },

  cancelTxt: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});