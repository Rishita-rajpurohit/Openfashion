import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState}from 'react'
import Fonts from './Fonts'
import colors from './Colors'
import Searchbar from './Search/Searchbar'
import Filter from './Search/Filter'
import SearchResult from './Search/SearchResult'
import Filter_Modal from './modals/Filter_Modal'

const SearchScreen = () => {
const [Search, setSearch] = useState('')
const [sorttype, setSorttype] = useState('')
const [filtermodalvisible, setFilterModalVisible]= useState(false)

  return (
    <View style={{backgroundColor:colors.Screenbackgroundcolor, flex:1}}>
     <Searchbar
     Search={Search}
     setSearch={setSearch}
   
     />
     <Filter
  onOpenFilter={() =>
    setFilterModalVisible(true)
    
  }
/>

<ScrollView showsVerticalScrollIndicator={false}>
  <SearchResult  Search={Search} sorttype={sorttype} />

</ScrollView>
<Filter_Modal
 visible={filtermodalvisible}
 onClose={() => setFilterModalVisible(false)}
setSorttype={setSorttype}
      />
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})