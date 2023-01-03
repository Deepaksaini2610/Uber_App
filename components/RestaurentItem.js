import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const RestaurentItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assests/images/bg3.jpg")}
          style={{ width: "100%", height: 400 }}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assests/images/bg1.jpg")}
          style={{ width: "100%", height: 400 }}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assests/images/bg3.jpg")}
          style={{ width: "100%", height: 400 }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor:'white'
  },
  imageContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
   
  },
});

export default RestaurentItem;
