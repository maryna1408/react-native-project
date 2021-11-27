import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import { gStyle } from './styles/style';

export default function App() {

const [listOfItems, setListOfItems] = useState([
  {text: 'Learn React Native', key: 1},
  {text: 'Learn React Native', key: 2},
  {text: 'Learn React Native', key: 3},
  {text: 'Learn React Native', key: 4}
])

const addHandler = (text) => {
  setListOfItems((list) => {
    return[
      {text: text, key: Math.random().toString(36).substring(7)},
      ... list
    ]
  })
}

  return (
    <View>
      <Header />
      <Form addHandler={addHandler}/>
      <FlatList data={listOfItems} renderItem={({item})=>(
        <ListItem item={item}/>
      )}/>
      <Footer />
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
