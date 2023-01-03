import {  View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import RestaurentItem from '../components/RestaurentItem'
import BottomTab from '../components/BottomTab'


const HomeScreen = ({navigation}) => {
  return (
    <>
      <View>
        <Header />
        <View>
          <SearchBar style={{ backgroundColor: "white" }} />
        </View>
      </View>
      <RestaurentItem />
      <View>
        <BottomTab navigation = {navigation} />
      </View>
      
    </>
  );
}

export default HomeScreen