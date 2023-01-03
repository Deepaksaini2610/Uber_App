import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
// import SearchBar from "../components/SearchBar";
const Header = () => {
  const [txt, settext] = useState("Delivery");
  const [bcolor,setbcolor] = useState('white');
    return (
      <View style={styles.container}>
        <DeliveryPickup
          text="Pickup"
          btncolor="black"
          textcolor="white"
          txt={txt}
          settext={settext}
        />
        <DeliveryPickup
          text="Delivery"
          btncolor="white"
          textcolor="black"
          txt={txt}
          settext={settext}
        />
       
      </View>
    );
};
const DeliveryPickup = (props) => (
  <View
    style={{ flexDirection: "row", justifyContent: "center" }}
  >
    <TouchableOpacity
    onPress={()=>{
       props.settext(props.text)
        
    }}
      style={{
        backgroundColor:props.txt === props.text?'black':'white' ,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        width:100,
        height:25
      }}
    >
      <Text
        style={{
          fontSize: 17,
          color:props.txt === props.text?'white':'black',
           fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
    
  </View>
);
const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
    // marginBottom:5,
    ,width:'100%',
    height:50
  }
});

export default Header;
