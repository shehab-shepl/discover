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
    Image, FlatList
} from 'react-native';
import React, { Component } from 'react';
import { scale, verticalScale, moderateScale } from '../util/scaling';

const Item = ({ title, img, backgroundColor }) => (
    <TouchableOpacity style={styles.meal}>
        <View style={{ backgroundColor: backgroundColor, width: scale(74), height: verticalScale(74), alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
            <Image style={styles.mealimg} source={img} resizeMode='center' />
        </View>
        <Text style={{ fontSize: 13 }}>{title}</Text>
    </TouchableOpacity>
);

const New = ({ img }) => (
    <TouchableOpacity style={{ height: verticalScale(147), alignItems: 'flex-start', justifyContent: 'flex-start', borderRadius: 5 }}>
        <Image style={{ width: scale(261) }} source={img} resizeMode='center' />
    </TouchableOpacity>

);

const Restaurant = ({ img,heart,star }) => (
    <TouchableOpacity style={styles.restaurantView}>
        <View style={{height:verticalScale(21 ),width:'100%',backgroundColor:'',flexDirection:'row',justifyContent:'space-between'}}>
            <View  style= {{width:scale(61),justifyContent:'center',alignContent:'center',backgroundColor:'#e0ffff' ,borderRadius:5}}><Text style={{color:'#11C4A1', fontSize:moderateScale(8)}}>35-45 min</Text></View>
            <View style={{mergeLeft:scale(27.46),width:scale(16),height:verticalScale(16), justifyContent:'center',alignContent:'center',backgroundColor:''}}><Image style={{}} source={heart} resizeMode='center' /></View>
        </View>
        
        <Image style={{}} source={img} resizeMode='center' />
        <View style={{height:verticalScale(21 ),mergeHorzintal:scale(7),flexDirection:'row',width:scale(91), alignContent:'space-between'}}>
        <Image style={{}} source={star} resizeMode='center' />
        <Image style={{}} source={star} resizeMode='center' />
        <Image style={{}} source={star} resizeMode='center' />
        <Image style={{}} source={star} resizeMode='center' />
        <Image style={{}} source={star} resizeMode='center' />
        <Text style={{fontSize:moderateScale(6)}}>123 Reviews</Text>
        </View>

    </TouchableOpacity>

);

export default class main extends React.Component {
    constructor() {
        super();
        this.state = {
            meals: [
                {
                    id: '1',
                    title: 'Pizza',
                    img: require('../assets/pics/pizza.png'),
                    backgroundColor: '#FFDED8'
                },
                {
                    id: '2',
                    title: 'Drink',
                    img: require('../assets/pics/pepsi.png'),
                    backgroundColor: '#D8F3FF'
                },
                {
                    id: '3',
                    title: 'Chicken',
                    img: require('../assets/pics/chicken.png'),
                    backgroundColor: '#FFF2B3'
                },
                {
                    id: '4',
                    title: 'Burger',
                    img: require('../assets/pics/burger.png'),
                    backgroundColor: '#C6F5DA'
                },
                {
                    id: '5',
                    title: 'Pizza',
                    img: require('../assets/pics/pizza.png'),
                    backgroundColor: '#FFDED8'
                },
                {
                    id: '6',
                    title: 'Drink',
                    img: require('../assets/pics/pepsi.png'),
                    backgroundColor: '#D8F3FF'
                },
                {
                    id: '7',
                    title: 'Chicken',
                    img: require('../assets/pics/chicken.png'),
                    backgroundColor: '#FFF2B3'
                },
                {
                    id: '8',
                    title: 'Burger',
                    img: require('../assets/pics/burger.png'),
                    backgroundColor: '#C6F5DA'
                },
            ],
            restaurants: [
                {
                    id: '1',
                    title: 'Pizza',
                    img: require('../assets/pics/res1.png'),
                    heart: require('../assets/pics/heart1.png'),
                    star: require('../assets/pics/star-24px.png')
                },
                {
                    id: '2',
                    title: 'Drink',
                    img: require('../assets/pics/res2.png'),
                    heart: require('../assets/pics/heart.png'),
                    star: require('../assets/pics/star-24px.png')
                },
                {
                    id: '3',
                    title: 'Chicken',
                    img: require('../assets/pics/res3.png'),
                    heart: require('../assets/pics/heart1.png'),
                    star: require('../assets/pics/star-24px.png')
                },
                {
                    id: '4',
                    title: 'Pizza',
                    img: require('../assets/pics/res1.png'),
                    heart: require('../assets/pics/heart1.png'),
                    star: require('../assets/pics/star-24px.png')
                },
                {
                    id: '5',
                    title: 'Drink',
                    img: require('../assets/pics/res2.png'),
                    heart: require('../assets/pics/heart.png'),
                    star: require('../assets/pics/star-24px.png')
                },
                {
                    id: '6',
                    title: 'Chicken',
                    img: require('../assets/pics/res3.png'),
                    heart: require('../assets/pics/heart1.png'),
                    star: require('../assets/pics/star-24px.png')
                },

            ],
            new: [
                {
                    id: '1',
                    img: require('../assets/pics/new1.png'),
                },
                {
                    id: '2',
                    img: require('../assets/pics/new2.png'),
                },
                {
                    id: '1',
                    img: require('../assets/pics/new1.png'),
                },
                {
                    id: '2',
                    img: require('../assets/pics/new2.png'),
                },
            ]

        };
    }

    renderItem = ({ item }) => {
        return (
            <Item title={item.title} img={item.img} backgroundColor={item.backgroundColor} />
        )
    }
    renderNew = ({ item }) => {
        return (
            <New img={item.img} />
        )
    }

    renderRestaurant = ({ item }) => {
        return (
            <Restaurant img={item.img } heart={item.heart} star={item.star} />
        )
    }

    render() {

        return (
            <ScrollView style={styles.container}>

                <View style={styles.viewDiscover}>
                    <Text style={{ fontSize: moderateScale(16), color: '#FFFFFF', }}>Discover</Text>
                    <Text style={{ fontSize: moderateScale(16), color: '#FFFFFF', marginTop: verticalScale(10) }}>H 39, Rd 4, Merul Badda, Dhaka-1212</Text>
                    <View style={styles.topBar}>
                        <View style={styles.searchBar}>
                            <View><Image source={require('../assets/pics/search-24px.png')} resizeMode='center' /></View>
                            <TextInput
                                style={{ alignSelf: 'flex-start' }}
                                placeholder={'Search any product here'}
                                // placeholderTextColor="black"
                                // keyboardType="numeric"
                                returnKeyLabel="Done"
                                returnKeyType="done"
                            // onChangeText={(text) => this.onChangedminuteswork(text)}
                            // value={this.state.minutesOfWork}
                            />
                        </View>
                        <View style={{ width: scale(11) }}></View>
                        <TouchableOpacity style={{ backgroundColor: '#FFFFFF4D', width: scale(41), height: verticalScale(40), alignItems: 'center', justifyContent: 'center', borderRadius: 3 }}>
                            <Image source={require('../assets/pics/filter_list-24px.png')} resizeMode='stretch' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <FlatList
                        horizontal={true}
                        contentContainerStyle={styles.meals}
                        data={this.state.meals}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}

                    />
                </View>
                <Text style={{ fontSize: moderateScale(15), marginTop: verticalScale(31), marginLeft: scale(16) }}>What's New?</Text>
                <FlatList
                    horizontal={true}
                    contentContainerStyle={styles.new}
                    data={this.state.new}
                    renderItem={this.renderNew}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}

                />

                

                <View style={styles.restaurantsView}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{fontSize:moderateScale(15)}}>Popular restaurants</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}><Text style={{ color: '#FB6A43', alignSelf: 'flex-end' }}>View all</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal={true}
                        contentContainerStyle={styles.restaurantsFlatList}
                        data={this.state.restaurants}
                        renderItem={this.renderRestaurant}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}

                    />

                </View>

                <View style={styles.restaurantsView}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{fontSize:moderateScale(15)}}>Popular Items</Text>
                        <TouchableOpacity style={{ flexDirection: 'row' }}><Text style={{ color: '#FB6A43', alignSelf: 'flex-end' }}>View all</Text></TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal={true}
                        contentContainerStyle={styles.PopularItemsFlatList}
                        data={this.state.restaurants}
                        renderItem={this.renderRestaurant}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}

                    />

                </View>

            </ScrollView>
        );
    }
}
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: "white"
    },
    skipView: {
        width: scale(43),
        height: verticalScale(21),
        marginTop: verticalScale(65),
        marginLeft: scale(316),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor:'yellow',
        justifyContent: 'flex-start'
    },
    restaurantView: {
        width: scale(106),
        height: verticalScale(128),
        // marginTop: verticalScale(20),
        marginRight: scale(9),
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius:8
    },
    meals: {
        // width: scale(300),
        height: verticalScale(98.4),
        marginTop: verticalScale(19.96),
        marginLeft: scale(16),
        flexDirection: 'row',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        // backgroundColor: 'yellow',
    },

    meal: {
        width: scale(74),
        height: verticalScale(100),
        // marginTop: verticalScale(19.96),
        marginRight: scale(24),
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        // justifyContent: 'flex-start'
    },
    new: {
        // width: scale(300),
        height: verticalScale(147),
        marginTop: verticalScale(20),
        marginLeft: scale(16),
        flexDirection: 'row',
        // alignItems: 'flex-start',
        // justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    viewDiscover: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FB6A43",
        width: scale(375),
        height: verticalScale(168),
        // marginTop: verticalScale(48.45),
        alignSelf: 'center',
        // backgroundColor:'yellow',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    restaurantsView: {
        // alignItems: 'center',
        // justifyContent: 'center',
        width: scale(339),
        height: verticalScale(164),
        marginTop: verticalScale(47),
        alignSelf: 'center',
        // flexDirection:'row'
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,
    },
    restaurantsFlatList: {
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        // width: '100%',
        height: verticalScale(128),
        marginTop: verticalScale(20),
        // alignSelf: 'center',
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,

    },
    PopularItemsFlatList:{
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        // width: '100%',
        height: verticalScale(131),
        marginTop: verticalScale(17),
        // alignSelf: 'center',
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,
    },
    img: {
        width: "100%",
        height: "100%",
        // marginTop: verticalScale(48.45),
        alignSelf: 'center'
    },
    // mealimg:{
    //     width: "100%",
    //     height: "100%",
    //     // marginTop: verticalScale(48.45),
    //     alignSelf: 'center'
    // },
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
    topBar: {
        // width: "100%",
        flexDirection: 'row',
        height: verticalScale(40),
        marginTop: verticalScale(12),
        // alignSelf: 'center',
        backgroundColor: "#FB6A43",
        borderRadius: 3,
        // borderTopStartRadius: 26,
        alignItems: 'center',
        // justifyContent: 'flex-start',
    },
    searchBar: {
        width: scale(290),
        flexDirection: 'row',
        height: verticalScale(42),
        // marginTop: verticalScale(12),
        // alignSelf: 'center',
        backgroundColor: "white",
        borderRadius: 3,
        // borderTopStartRadius: 26,
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
        width: scale(290),
        height: verticalScale(42),
        backgroundColor: '#FFFFFF',
        marginTop: verticalScale(12),
        borderRadius: 3


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
