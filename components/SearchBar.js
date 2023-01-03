import { View,StyleSheet , ScrollView} from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'

import Catagories from './Catagories'
const SearchBar = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View>
          <Searchbar
            style={{ borderRadius: 20, backgroundColor: "#E8E8E8" }}
            placeholder="Search"
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          backgroundColor: "white",
          marginLeft: 10,
          marginRight: 20,
          marginTop: 10,
        }}
      >
        <ScrollView>
          <Catagories />
        </ScrollView>
      </View>

      
    </View>
  );
}
const styles = StyleSheet.create({
  marginTop: 10,
  container: {
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: "white"
  },
});
export default SearchBar