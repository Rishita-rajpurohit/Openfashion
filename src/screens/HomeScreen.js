import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Topbar from './home/Topbar';
import colors from './Colors';
import Banner from './home/Banner';
import RecentCollection from './home/RecentCollection';
import Reviewcord from './home/Reviewcard'

const HomeScreen = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Topbar />
        <Banner />

        <View style={styles.maincontainer}>
          <RecentCollection />
          <Reviewcord/>    
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor:colors.Screenbackgroundcolor,
  },
});
