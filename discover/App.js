import {
  View,
  Button,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, { Component } from 'react';
import axios from 'axios';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
     
    };
  }

  

  render() {
    return (
     <View style={styles.container}>
         <Text style={styles.text}>
             discover
         </Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  },
  text:{
      fontSize:25,
      color:'red'
  }
});
