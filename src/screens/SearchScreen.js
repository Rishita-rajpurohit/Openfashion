import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Fonts from './Fonts'
import colors from './Colors'
import Searchbar from './Search/Searchbar'
import Filter from './Search/Filter'
import SearchResult from './Search/SearchResult'

const SearchScreen = () => {
  return (
    <View style={{backgroundColor:colors.Screenbackgroundcolor, flex:1}}>
     <Searchbar/>
     <Filter/>

<ScrollView showsVerticalScrollIndicator={false}>
  <SearchResult/>

</ScrollView>

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})