//import a library to helpt to create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a component
const App = () => (
    <Header headerText={'Albums'} />
); 

//render a component
AppRegistry.registerComponent('albums', () => App);
