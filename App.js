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
import  DiscoverStack  from './src/navigation/mainNavigation';
import { Provider } from 'react-redux';
import { store } from './src/Redux/configration';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }



  render() {
    return (
      <Provider store={store}>
        <DiscoverStack/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});


// import {
//   View,
//   Button,
//   Text,
//   TextInput,
//   ScrollView,
//   StyleSheet,
//   Switch,
//   Image,
//   TouchableOpacity,
//   KeyboardAvoidingView,
// } from 'react-native';
// import React, { Component } from 'react';


// export default class settingScreen extends React.Component {
//   constructor() {
//     super();
//     this.state = {

//     };
//   }



//   render() {
//     return (
//       <View style={styles.container}>
//         <view style={styles.outer}>
//           <Image
//             style={styles.img}
//             source={require('./src/pics/.png')}
//           />
//           <text>Welcome</text>
//         </view>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   outer: {
//     fontSize: 25,
//     color: 'red'
//   }
// });
