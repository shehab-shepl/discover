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
  BackHandler,
  Image
} from 'react-native';
import React, { Component } from 'react';
import { scale, verticalScale, moderateScale } from '../util/scaling';


export default class discoverPlace extends React.Component {

  backAction = () => {
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backAction);
  }
  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.skipView} onPress={() => this.props.navigation.navigate('step2')}>
          <Text style={styles.txtSkip}>Skip</Text>
          <Text style={styles.txtSkip}>	 </Text>

        </TouchableOpacity>
        <View style={styles.viewImg}>
          <Image style={styles.img} source={require('../assets/pics/Group15050.png')} resizeMode='center' />
        </View>
        <Text style={styles.txtDiscover}>Discover place near you</Text>
        {/* <View style={styles.viewText}> */}
          <Text style={styles.txtSmall}>We make it simple to find the food youCrave.Enter your address and let us do the rest.</Text>
        {/* </View> */}

        {/* <View style={styles.btn}>
          <Button
            // onPress={onPressLearnMore}
            title="Get Started"
            titleStyle={styles.txtSmall}
            color="#FB6A43"
          // accessibilityLabel="Learn more about this purple button"
          />
        </View> */}

<TouchableOpacity style={styles.Touchableopacity}
            onPress={() => this.props.navigation.navigate('login')}
            >
            <Text style={{ fontSize:moderateScale(17) }}>Get Started</Text>
          </TouchableOpacity>

        <View style={styles.loading}>
          <View style={styles.loaded}>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "white"
  },
  skipView: {
    width: scale(43),
    marginTop: verticalScale(65),
    marginLeft: scale(316),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'yellow',
    justifyContent: 'flex-start'
  },
  viewImg: {
    width: scale(342.22),
    height: verticalScale(255.2),
    marginTop: verticalScale(48.45),
    alignSelf: 'center',
    // backgroundColor:'yellow',
  },
  img: {
    width: scale(342.22),
    height: verticalScale(255.2),
    // marginTop: verticalScale(48.45),
    alignSelf: 'center'
  },
  txtSkip: {
    color: '#73A049',
    fontSize: moderateScale(16),

    // alignSelf: 'center'
  },
  txtDiscover: {
    color: '#444444',
    fontSize: moderateScale(24),
    alignSelf: 'center',
    marginTop: verticalScale(87.35),
  },
  viewText: {
    width: scale(276),
    height: verticalScale(66),
    marginTop: verticalScale(21),
    // alignSelf: 'center',
    backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  txtSmall: {
    color: '#95A0B6',
    fontSize: moderateScale(16),
    marginTop: verticalScale(21),
    marginLeft: scale(50),
    marginRight: scale(49),
    alignSelf: 'center',
  },

  btn: {
    width: scale(200),
    height: verticalScale(50),
    marginTop: verticalScale(58),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  Touchableopacity:{
    width: scale(200),
    height: verticalScale(50),
    marginTop: verticalScale(58),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FB6A43',
    borderRadius: 10,
  },

  loading: {
    width: scale(90),
    height: verticalScale(6),
    marginTop: verticalScale(25),
    // marginBottom: verticalScale(34),
    alignSelf: 'center',
    backgroundColor: '#EFEFF4',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  loaded: {
    width: scale(30),
    height: verticalScale(6),
    // alignSelf: 'right',
    backgroundColor: '#FB6A43',

  },

});
