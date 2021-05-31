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


export default class login extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {

        return (
            <ScrollView style={styles.container}>

                <View style={styles.viewImg}>
                    <Image style={styles.img} source={require('../assets/pics/MaskGroup20.png')} resizeMode='cover' />
                </View>
                <View style={styles.viewForm}>
                    <Text style={styles.txtLogin}>Login</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'yourmail@domain.com'}
                        // placeholderTextColor="black"
                        // keyboardType="numeric"
                        returnKeyLabel="Done"
                        returnKeyType="done"
                    // onChangeText={(text) => this.onChangedminuteswork(text)}
                    // value={this.state.minutesOfWork}
                    />
                    <TextInput
                        style={[styles.textInput, { marginTop: verticalScale(15.38) }]}
                        placeholder={'************'}
                        // placeholderTextColor="black"
                        // keyboardType="numeric"
                        returnKeyLabel="Done"
                        returnKeyType="done"
                    // onChangeText={(text) => this.onChangedminuteswork(text)}
                    // value={this.state.minutesOfWork}
                    />
                    <TouchableOpacity style={styles.forgotPassword}
                    // onPress={() => this.props.navigation.navigate('welcome')}
                    >
                        <Text style={{ fontSize: moderateScale(13) }}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Touchableopacity}
                    // onPress={() => this.props.navigation.navigate('welcome')}
                    >
                        <Text style={{ fontSize: moderateScale(17),color:'white' }}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signUp}
                    onPress={() => this.props.navigation.navigate('signup')}
                    >
                        <Text style={{ fontSize: moderateScale(14), color: '#263A5B' }}>Don't have an account?</Text>
                        <Text style={{ fontSize: moderateScale(14), color: '#FE4040', marginLeft: scale(10), }}>Sign up</Text>

                    </TouchableOpacity>
                    <View style={styles.or} >
                        <View style={{
                            width: scale(137.53),
                            height: verticalScale(0.93),
                            // marginTop: verticalScale(24.69),
                            // alignSelf: 'flex-start',
                            backgroundColor: "black",
                            borderRadius: 14,

                        }}></View>

                        < Text >  OR  </Text>

                        <View style={{
                            width: scale(137.53),
                            height: verticalScale(0.93),
                            // marginTop: verticalScale(24.69),
                            // alignSelf: 'flex-end',
                            backgroundColor: "black",
                            borderRadius: 14,

                        }}></View>
                    </View>
                    <View style={styles.accounts}>
                        <TouchableOpacity style={styles.account}>
                            <View><Image source={require('../assets/pics/google.png')} resizeMode='cover' /></View>
                            <Text style={{ fontSize: moderateScale(14), color: '#004445', marginLeft: scale(10), }}>Google</Text>

                        </TouchableOpacity>
                        <View style={{ width: scale(14.84) }}></View>
                        <TouchableOpacity style={styles.account}>
                            <View><Image source={require('../assets/pics/Path821.png')} resizeMode='cover' /></View>
                            <Text style={{ fontSize: moderateScale(14), color: '#004445', marginLeft: scale(10), }}>Facebook</Text>

                        </TouchableOpacity>

                    </View>
                </View>





                <></>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: "#FB6A43"
    },
    skipView: {
        width: scale(43),
        height: verticalScale(21),
        marginTop: verticalScale(65),
        marginLeft: scale(316),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'yellow',
        justifyContent: 'flex-start'
    },
    viewImg: {
        backgroundColor: "#FB6A43",
        width: "100%",
        height: verticalScale(301),
        // marginTop: verticalScale(48.45),
        alignSelf: 'center',
        // backgroundColor:'yellow',
    },
    img: {
        width: "100%",
        height: "100%",
        // marginTop: verticalScale(48.45),
        alignSelf: 'center'
    },
    txtSkip: {
        color: '#73A049',
        fontSize: moderateScale(16),
        // alignSelf: 'center'
    },
    txtLogin: {
        color: '#004445',
        fontSize: moderateScale(26),
        alignSelf: 'center',
        marginTop: verticalScale(27.75),
    },
    viewForm: {
        width: "100%",
        // height: verticalScale(493.75),
        // marginTop: verticalScale(17),
        // alignSelf: 'center',
        backgroundColor: "white",
        borderTopEndRadius: 26,
        borderTopStartRadius: 26,
        alignItems: 'center',
        // justifyContent: 'flex-start',
    },
    or: {
        flexDirection: 'row',
        width: scale(328.96),
        height: verticalScale(20),
        marginTop: verticalScale(24.69),
        // alignSelf: 'center',
        // backgroundColor: "yellow",
        // borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtSmall: {
        color: '#95A0B6',
        fontSize: moderateScale(16),
        marginTop: verticalScale(21),
        //   marginLeft: scale(50),
        //   marginRight: scale(49),
        marginHorizontal: scale(77),
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
    Touchableopacity: {
        width: scale(328),
        height: verticalScale(50),
        marginTop: verticalScale(31),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FB6A43',
        borderRadius: 8,
    },
    forgotPassword: {
        width: scale(118),
        height: verticalScale(20),
        marginTop: verticalScale(14.97),
        marginLeft: scale(232),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#FB6A43',
        borderRadius: 10,
    },
    signUp: {
        width: scale(226),
        height: verticalScale(23),
        marginTop: verticalScale(24),
        // marginLeft:scale(232),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: '#FB6A43',
        borderRadius: 10,
        flexDirection: 'row',
    },

    loading: {
        width: scale(90),
        height: verticalScale(6),
        marginTop: verticalScale(25),
        // marginBottom: verticalScale(34),
        alignSelf: 'center',
        backgroundColor: '#EFEFF4',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loaded: {
        width: scale(30),
        height: verticalScale(6),
        // alignSelf: 'right',
        backgroundColor: '#FB6A43',

    },
    textInput: {
        width: scale(329),
        height: verticalScale(50),
        backgroundColor: '#F1F4F8',
        marginTop: verticalScale(31.64),
        borderRadius: 5


    },
    accounts: {
        flexDirection: 'row',
        // width: scale(90),
        height: verticalScale(50),
        marginTop: verticalScale(18.89),
        marginBottom: verticalScale(32.42),
        // marginHorizontal:scale(53),
        // marginLeft:scale(23),
        alignSelf: 'center',
        // backgroundColor: '#EFEFF4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    account: {
        flexDirection: 'row',
        width: scale(157),
        height: '100%',
        // marginTop: verticalScale(25),
        // marginBottom: verticalScale(34),
        // marginHorizontal:scale(20),
        alignSelf: 'center',
        backgroundColor: '#EFEFF4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: "#00444533",
        borderWidth: 2.5
    }

});
