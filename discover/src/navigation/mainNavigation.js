import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import discoverPlace from '../screens/discoverPlace';
import welcome from '../screens/welcome';


const discover = createStackNavigator();


export default DiscoverStack = () => {

    


    return (
        <NavigationContainer  >
            <discover.Navigator screenOptions={{headerShown: false}}>
                <discover.Screen name="welcome" component={welcome} options={{ headerTitle: null }} />
                <discover.Screen name="discoverPlace" component={discoverPlace} options={{ headerTitle: '' }} />
            </discover.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    barItem: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: 'red'
    },
    tabs: {
        backgroundColor: 'grey',
        color: 'grey'
    }

});