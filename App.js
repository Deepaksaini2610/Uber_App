import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import NavigationScreen from './Screens/NavigationScreen';
// import BottomTab from './components/BottomTab';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    // justifyContent: 'center',
  },
});
