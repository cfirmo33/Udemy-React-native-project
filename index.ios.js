//Import librays to hekp creat a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albuns'} />
    <AlbumList />
  </View>
  );

//Render it to the device
AppRegistry.registerComponent('teste', () => App);
