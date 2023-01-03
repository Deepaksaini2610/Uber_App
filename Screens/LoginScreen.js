import { View, Text,safeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareArrowUpRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import SignUp from '../components/SignUp';
const LoginScreen = ({navigation}) => {
  return (
    <safeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ width: 20, height: 30, fontWeight: 900, color: "white" }}
          />
        </TouchableOpacity>
      </View>

      {/* Login */}
      <SignUp navigation={navigation}  style ={{position:"absolute"}}/>
    </safeAreaView>
  );
}

export default LoginScreen