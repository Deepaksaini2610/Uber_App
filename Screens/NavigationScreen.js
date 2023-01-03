import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import HomeScreen from './HomeScreen'
// import Login from './Login'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import OrderScreen from './OrderScreen'
import GroceryScreen from './GroceryScreen'
import LoginKr from '../components/LoginKr'
const NavigationScreen = () =>{
const stack = createNativeStackNavigator();
   const HeaderEmpty = {
    headerShown:false
   }
    return (
      <NavigationContainer>
        <stack.Navigator initialRouteName="home" screenOptions={HeaderEmpty}>
          <stack.Screen name="home" component={HomeScreen} />
          <stack.Screen name="Login" component={LoginScreen} />
          <stack.Screen name="orders" component={OrderScreen} />
          <stack.Screen name="groceries" component={GroceryScreen} />
          <stack.Screen name="Loginkr" component={LoginKr} />
        </stack.Navigator>
      </NavigationContainer>
    );
}
export default NavigationScreen;