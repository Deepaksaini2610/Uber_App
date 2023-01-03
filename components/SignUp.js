import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faG } from "@fortawesome/free-solid-svg-icons";
// import { Button,  } from "react-native-web";

const SignUp = ({navigation}) => {

const uploadSchema = Yup.object().shape({

  email: Yup.string().email().required("an email is required "),
  password: Yup.string().required().min(8, "min 8 character should be require"),
});



  return (
    <View style={styles.mainContainer}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 20,
            marginRight: 20,
            color: "white",
          }}
        >
          Sign Up
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 20,
            marginRight: 20,
            color: "white",
            marginTop: 20,
          }}
        >
          {" "}
          Please choose one !{" "}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            style={{
              marginRight: 20,
              borderWidth: 1,
              borderColor: "grey",
              width: 150,
              height: 50,
              borderRadius: 20,
              alignItems: "center",

              backgroundColor: "black",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faAppleAlt}
              style={{ width: 30, height: 30, color: "white" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "grey",
              width: 150,
              height: 50,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
            }}
          >
            <FontAwesomeIcon
              icon={faG}
              style={{ width: 20, height: 20, color: "white" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={uploadSchema}
          validateOnMount={true}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  color: "white",
                  marginLeft: 25,
                  marginTop: 10,
                  fontWeight: 600,
                }}
              >
                {" "}
                Name:{" "}
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "white",
                  marginLeft: 20,
                  marginRight: 20,
                  borderRadius: 18,
                  marginTop: 20,
                }}
              >
                <TextInput
                  placeholder="full name"
                  autoCapitalize="none"
                  placeholderTextColor="white"
                  style={{ color: "white", height: 50, marginLeft: 20 }}
                />
              </View>
              <Text
                style={{
                  color: "white",
                  marginLeft: 25,
                  marginTop: 10,
                  fontWeight: 600,
                }}
              >
                {" "}
                Email:{" "}
              </Text>
              <View style={styles.textstyle}>
                <TextInput
                  placeholder="email"
                  autoCapitalize="none"
                  placeholderTextColor="white"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoFocus={true}
                  style={{ color: "white", height: 50, marginLeft: 20 }}
                  onchangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              <Text
                style={{
                  color: "white",
                  marginLeft: 25,
                  marginTop: 10,
                  fontWeight: 600,
                }}
              >
                {" "}
                Password:{" "}
              </Text>
              <View style={styles.textstyle}>
                <TextInput
                  placeholder="password"
                  autoCapitalize="none"
                  placeholderTextColor="white"
                  style={{ color: "white", height: 50, marginLeft: 20 }}
                  textContentType="password"
                  onchangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </View>

              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: "pink",
                  backgroundColor: "rgb(220, 48, 203)",
                  fontWeight: 900,
                  fontSize: 25,
                  height: 35,
                  marginLeft: 20,
                  marginRight: 20,
                  borderRadius: 20,
                }}
                onPress={() => {
                  navigation.navigate("home");
                }}
              >
                <Text style={{ color: "white" }}>CreateAccount</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ color: "white" }}>
                  {" "}
                  Already have an Account?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Loginkr");
                  }}
                >
                  <Text style={{ color: "blue" }}> Login </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    // flex:1,
    // backgroundColor:"blue"
  },
  textstyle: {
    borderWidth: 1,
    borderColor: "white",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 18,
    marginTop: 20,
  },
});
export default SignUp;
