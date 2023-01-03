import { View, Text,StyleSheet } from "react-native";
import React, { useState } from "react";
import BottomItems from "./BottomItem";
import { ActivityIndicator, TouchableOpacity } from "react-native-web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHome, faPager, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
const BottomTab = ({navigation}) => {
  const [currentcolor,setcolor] = useState("black");
  const [Active,setActive] = useState(faHome)
  const User = faUser;
  const Grocery = faBagShopping;
  const Search = faSearch;
  const Orders = faPager;
  return (
    <View style={styles.iconsstyle}>
      {BottomItems.map((elements, index) => (
        <View key={index}>
            
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => {
              setActive(elements.icons)
              if(elements.icons == User){
              navigation.navigate('Login')}
              else if(elements.icons == faHome){
              navigation.navigate("home"); 
              }
              else if(elements.icons == Orders){
                navigation.navigate('orders');
              }
              else if (elements.icons == Grocery){
                navigation.navigate("groceries");
              }
              else{
                navigation.navigate('home');
              }
            }
            }
          >
              <FontAwesomeIcon
                icon={elements.icons}
                style={{
                  width: 30,
                  height: 30,
                  color: Active === elements.icons ? "black" : "grey",
                }}
              />

              <Text>{elements.name}</Text>
            </TouchableOpacity>
         
        </View>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
    iconsstyle:{
         position:'absolute',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        marginTop:20,
        marginBottom:10,
        left:20,
        right:20,
        // marginRight:20,
        // marginLeft:20,
        height:50,
        alignItems:'center',
       
    },
   
})

export default BottomTab;
