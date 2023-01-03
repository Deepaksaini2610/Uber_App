import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import Items from "./CatagoriesData";
const Catagories = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Items.map((ele, index) => (
        <view
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Image
              source={{ uri: ele.name }}
              style={{ height: 35, width: 30 }}
            />
            <View>
              <Text style={{ fontSize: 25,fontWeight:'bold' }}>
                {ele.title}
              </Text>
            </View>
          </TouchableOpacity>
        </view>
      ))}
    </ScrollView>
    //   </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 15,
    flexDirection: "row",
  },
});

export default Catagories;
