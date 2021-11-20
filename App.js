import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainBlock from './Components/MainBlock';

export default function App() {


  

  return (
    <View>
<Header/>

<MainBlock/>
<Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 22,
    fontFamily: 'italic',
    letterSpacing: 1,
}
});
