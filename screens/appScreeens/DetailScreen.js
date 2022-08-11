import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {currency} from "../../Datas/currency";
import ChartGraph from "../../helpers/chart_activity_graph";

export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false,
            data:1299.60,
            balance_detail:[{expense:389, pending:238, income:584}]

        }
    }

    render() {

        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                        <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Detail balance</Text>
                </View>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("CurrentBalance")}}>
                <View style={{backgroundColor:'#6D5FFD1A', width:'90%', height:150, marginLeft:20, marginTop:20, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                    <Text style={{color: '#6D5FFD', fontSize: 40, fontFamily:'SourceSansProSemiBold',}}>$ {this.state.data}</Text>
                    <Text style={{color: '#2C3A4B', fontSize: 15, fontFamily:'SourceSansProRegular', marginTop:20}}>US Dollar balance</Text>
                </View>
                </TouchableOpacity>
                <Text style={{ fontSize:18, fontFamily:'SourceSansProSemiBold', marginTop:30, marginLeft:20}}>Activity graph</Text>
                <View>
                    <ChartGraph/>
                </View>

                <View style={{marginLeft:20, marginTop:30, flexDirection:'row'}}>
                    <Text style={{ fontSize:18, fontFamily:'SourceSansProSemiBold', }}>Balance detail</Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("BudgetCalculation")}}>
                        <Text style={{fontSize:18, fontFamily:'SourceSansProSemiBold', marginLeft:170, color:'#6D5FFD'}}>See all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true} style={{flexDirection:'row', marginLeft:20, marginTop:20}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Expenses")}}>
                    <View style={{width:140, height:200, backgroundColor:'#6D5FFD', justifyContent:'center', borderRadius:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'SourceSansProRegular', marginLeft:20,marginTop:10}}>Expense</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SourceSansProSemiBold',marginLeft:20}}>$ {this.state.balance_detail[0].expense}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>
                    </TouchableOpacity>
                    <View style={{width:140, height:200, backgroundColor:'#FFB800', justifyContent:'center', borderRadius:10, marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'SourceSansProRegular', marginLeft:20,marginTop:10}}>Pending</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SourceSansProSemiBold',marginLeft:20}}>$ {this.state.balance_detail[0].pending}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>

                    <View style={{width:140, height:200, backgroundColor:'#FF1843', justifyContent:'center', borderRadius:10, marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'SourceSansProRegular', marginLeft:20,marginTop:10}}>Income</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SourceSansProSemiBold',marginLeft:20}}>$ {this.state.balance_detail[0].income}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>
                </ScrollView>

                <StatusBar style="auto"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    block:{
        marginTop:40,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#6D5FFD',
        borderRadius:10,
        height:300,
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
    title:{
        fontSize:30,
        color:'#000000',
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    text:{
        color:'#6D5FFD',
        fontSize:27,
        fontFamily:'SourceSansProSemiBold',
    },
    buttonSignIn:{
        borderColor:'#6D5FFD',
        borderWidth:2,
        borderRadius:5,
        height:40,
        alignItems:"center",
        justifyContent: "center",
        width:100,
        position:'absolute',
        right:20
    },

});
