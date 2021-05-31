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
  Image
} from 'react-native';
import React, { Component } from 'react';
import { scale, verticalScale, moderateScale } from '../util/scaling';


export default class welcome extends React.Component {
  render() {
    setTimeout(() => this.props.navigation.navigate("discoverPlace"), 3000)

    return (
      <View style={styles.container}>
        <View style={styles.imgView}>
          <Image style={styles.img} source={require('../assets/pics/Group1304.png')} resizeMode='contain' />
          <Text style={styles.txt}>Welcome</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:"white"
  },
  imgView: {
    width: scale(124),
    height: verticalScale(121.5),
    //backgroundColor:'yellow',
    justifyContent: 'space-between'
  },
  img: {
    width: scale(50),
    height: verticalScale(50),
    alignSelf: 'center'
  },
  txt: {
    color: '#FB6A43',
    fontSize: moderateScale(26),
    alignSelf: 'center'
  }

});
