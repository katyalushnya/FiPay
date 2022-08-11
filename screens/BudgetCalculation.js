import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../helpers/useFonts";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

import TransactionHistory from "../helpers/TransactionHistory";

export default class BudgetCalculation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            data:1299.60,
            accountNumber: '',
            fontsLoaded: false,

            total:948.3,
            subtotal:374.4,
            payments:384.4,
            summery:748.4,
        }
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row', backgroundColor:'#6D5FFD', width:'100%', height:'30%'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("DetailScreen")}}>
                        <Image source={require('../assets/arrow-back-white.png')} style={{marginLeft:20, marginTop:70}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Budget calculation</Text>
                </View>

                <View style={styles.block}>
                    <View style={{marginLeft:20, marginTop:30, flexDirection:'row', alignItems:'center'}}>
                        <Text style={{ fontSize:18, fontFamily:'SourceSansProSemiBold', }}>Balance detail</Text>
                        <TouchableOpacity style={{ marginLeft:100}}>
                            <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row',borderWidth:1, borderColor:'#6D5FFD', borderRadius:7, width:100, height:30}}>
                                <Text style={{fontSize:16, color:'#6D5FFD', fontFamily:'SourceSansProSemiBold'}}>This week</Text>
                                <MaterialIcons name="arrow-drop-down" color={'#6D5FFD'} size={20}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{marginLeft:100, marginTop:40, color: '#6D5FFD', fontSize: 40, fontFamily:'SourceSansProSemiBold',}}>$ {this.state.data}</Text>

                    <View style={{marginLeft:20, borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'87%',marginTop:40}}/>

                    <View style={{flexDirection:'row', marginTop:20, marginLeft:20,}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("TotalSpent")}}>
                        <View style={{backgroundColor:'#6D5FFD1A', width:145, height:75, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:16, color:'#545D69', fontFamily:'SourceSansProRegular'}}>Total</Text>
                            <Text style={{fontSize:25, color:'#6D5FFD', fontFamily:'SourceSansProSemiBold'}}>$ {this.state.total}</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{backgroundColor:'#FFB8001A', width:145, height:75, borderRadius:10, alignItems:'center', justifyContent:'center', marginLeft:20}}>
                            <Text style={{fontSize:16, color:'#545D69', fontFamily:'SourceSansProRegular'}}>Subtotal</Text>
                            <Text style={{fontSize:25, color:'#FFB800', fontFamily:'SourceSansProSemiBold'}}>$ {this.state.subtotal}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', marginTop:20, marginLeft:20,}}>
                        <View style={{backgroundColor:'#1867FF1A', width:145, height:75, borderRadius:10, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:16, color:'#545D69', fontFamily:'SourceSansProRegular'}}>Payments</Text>
                            <Text style={{fontSize:25, color:'#1867FF', fontFamily:'SourceSansProSemiBold'}}>$ {this.state.payments}</Text>
                        </View>
                        <View style={{backgroundColor:'#FF18431A', width:145, height:75, borderRadius:10, alignItems:'center', justifyContent:'center', marginLeft:20}}>
                            <Text style={{fontSize:16, color:'#545D69', fontFamily:'SourceSansProRegular'}}>Summery</Text>
                            <Text style={{fontSize:25, color:'#FF1843', fontFamily:'SourceSansProSemiBold'}}>$ {this.state.summery}</Text>
                        </View>
                    </View>
                </View>

                <View style={{marginLeft:20, marginTop:300, flexDirection:'row'}}>
                    <Text style={{ fontSize:18, fontFamily:'SourceSansProSemiBold', }}>Transaction History</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:18, fontFamily:'SourceSansProSemiBold', marginLeft:140, color:'#6D5FFD'}}>See all</Text>
                    </TouchableOpacity>
                </View>



                <TransactionHistory/>


                <StatusBar style="auto"/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title:{
        fontSize:23,
        color:'#ffffff',
        marginTop:70,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },block:{
        position:'absolute',
        top:120,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#6D5FFD',
        borderRadius:10,
        height:400,
        width:'90%',
        marginLeft:20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,

        elevation: 22,
    },
});
