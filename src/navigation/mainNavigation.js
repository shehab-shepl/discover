import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import discoverPlace from '../screens/discoverPlace';
import main from '../screens/main';
import welcome from '../screens/welcome';
import step2 from '../screens/step2';
import step3 from '../screens/step3';
import login from '../screens/login';
import signup from '../screens/signup';


const discover = createStackNavigator();


export default DiscoverStack = () => {

    return (
        <NavigationContainer  >
            <discover.Navigator screenOptions={{headerShown: false}}>
                <discover.Screen name="welcome" component={welcome} options={{ headerTitle: null }} />
                <discover.Screen name="discoverPlace" component={discoverPlace} options={{ headerTitle: '' }} />
                <discover.Screen name="step2" component={step2} options={{ headerTitle: null }} />
                <discover.Screen name="step3" component={step3} options={{ headerTitle: null }} />
                <discover.Screen name="login" component={login} options={{ headerTitle: null }} />
                <discover.Screen name="signup" component={signup} options={{ headerTitle: null }} />
                <discover.Screen name="main" component={main}  />
            </discover.Navigator>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//     barItem: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         fontSize: 16,
//         color: 'red'
//     },
//     tabs: {
//         backgroundColor: 'grey',
//         color: 'grey'
//     }

// });