import React, {useState} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import Form from './Form';
import ListItem from './ListItem';
import Header from './Header';
import Footer from './Footer';

export default function MainPage({navigation}) {

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

// const loadScene () => {
//     navigation.navigate('FullInf');
// }

  return (
    <View>
      <Header />
      {/* <Button title='Open page' onPress={loadScene}/> */}
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
