import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button, TouchableOpacity, Text} from 'react-native';
import Form from './Form';
import Header from './Header';
import Footer from './Footer';
import { gStyles } from '../styles/styles';

export default function MainPage({navigation}) {


const [listOfItems, setListOfItems] = useState([
  {name: 'Google', anons: 'Google!!!', full: 'Google is cool!!!'},
  {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!!!'},
  {name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool!!!'},
  {name: 'Instagram', anons: 'Instagram!!!', full: 'Instagram is cool!!!'}
])

// const addHandler = (text) => {
//   setListOfItems((list) => {
//     return[
//       {text: text, },
//       ... list
//     ]
//   })
// }


  return (
    <View>
      <Header />
      {/* <Form addHandler={addHandler}/> */}
      <FlatList data={listOfItems} renderItem={({item})=>(
        <TouchableOpacity style={gStyles.new} onPress={()=> navigation.navigate('FullInf', item)}>
        <Text style={gStyles.name}>{item.name}</Text>
        <Text style={gStyles.anons}>{item.anons}</Text>
    </TouchableOpacity>
      )}/>
{/* <Button title="fullinf" onPress={loadScene} /> */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
