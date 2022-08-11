import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import ChartStatics from "../../helpers/chart_statics";

export default class ManageMoney extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            income:'14.700',
            expense:'11.300',

            transportation:'3000',
            food:'4000',
            shopping:'3100',
            flight:'1200'
        }
    }
    render() {

        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Services")}}>
                        <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Manage Money</Text>
                </View>

                <View style={{flexDirection:'row', alignItems:'center', marginTop:40, marginLeft:135}}>
                    <AntDesign name="left" color={'#545D69'} size={16}/>
                    <Text style={{marginLeft:20, marginRight:20, fontSize:16, color:'#545D69', fontFamily:'SourceSansProSemiBold'}}>January</Text>
                    <AntDesign name="right" color={'#545D69'} size={16}/>
                </View>

                <View style={{flexDirection:'row', alignItems:'center', marginTop:20, marginLeft:20, backgroundColor:'#6D5FFD1A', height:100, justifyContent:'center', borderRadius:10, marginRight:20}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={{
                            backgroundColor: '#6D5FFD1A',
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                                <MaterialIcons name="arrow-downward" color={'#6D5FFD'} size={23}/>
                        </View>
                        <View>
                            <Text style={{fontSize:14, color:'#545D69', fontFamily:'SourceSansProRegular', marginLeft: 5}}>Income</Text>
                            <Text style={{fontSize: 23, fontFamily: 'SourceSansProSemiBold', marginLeft: 5, color: '#6D5FFD'}}>${this.state.income}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', marginLeft:40}}>
                        <View style={{
                            backgroundColor: '#FF18431A',
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <MaterialIcons name="arrow-upward" color={'#FF1843'} size={23}/>
                        </View>
                        <View>
                            <Text style={{fontSize:14, color:'#545D69', fontFamily:'SourceSansProRegular', marginLeft: 5}}>Expense</Text>
                            <Text style={{fontSize: 23, fontFamily: 'SourceSansProSemiBold', marginLeft: 5, color: '#FF1843'}}>${this.state.expense}</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={styles.block}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("Branches")}}>
                            <View style={{alignItems:'center'}}>
                            <Ionicons name="car" color={'#6D5FFD'} size={50}/>
                            <Text style={{fontSize:14, color:'#545D69', fontFamily:'SourceSansProRegular', marginTop:10}}>Transportation</Text>
                            <Text style={{fontSize: 23, fontFamily: 'SourceSansProSemiBold', marginTop:10}}>${this.state.transportation}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.block}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("Branches")}}>
                            <View style={{alignItems:'center'}}>
                                <MaterialCommunityIcons name="food" color={'#6D5FFD'} size={50}/>
                                <Text style={{fontSize:14, color:'#545D69', fontFamily:'SourceSansProRegular', marginTop:10}}>Food</Text>
                                <Text style={{fontSize: 23, fontFamily: 'SourceSansProSemiBold', marginTop:10}}>${this.state.food}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={styles.block}>
                        <TouchableOpacity>
                            <View style={{alignItems:'center'}}>
                                <MaterialIcons name="shopping-cart" color={'#6D5FFD'} size={50}/>
                                <Text style={{fontSize:14, color:'#545D69', fontFamily:'SourceSansProRegular', marginTop:10}}>Shopping</Text>
                                <Text style={{fontSize: 23, fontFamily: 'SourceSansProSemiBold', marginTop:10}}>${this.state.shopping}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.block}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("FlightTicket")}}>
                            <View style={{alignItems:'center'}}>
                                <MaterialIcons name="airplanemode-active" color={'#6D5FFD'} size={50}/>
                                <Text style={{fontSize:14, color:'#545D69', fontFamily:'SourceSansProRegular', marginTop:10}}>Flight</Text>
                                <Text style={{fontSize: 23, fontFamily: 'SourceSansProSemiBold', marginTop:10}}>${this.state.flight}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <StatusBar style="auto"/>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:17,
        color:'#394452',
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    text:{
        fontSize:15.5,
        marginTop:15,
        marginLeft:20,
        fontFamily:'SourceSansProRegular',
    },
    block: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6D5FFD',
        borderRadius: 10,
        height: 200,
        width: 165,
        marginLeft: 20,
        marginTop: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,

        elevation: 22,
    },
});
