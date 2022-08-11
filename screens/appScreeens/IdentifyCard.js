import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import {currency} from "../../Datas/currency";
import DatePicker from "react-native-datepicker";

export default class IdentifyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount:199,
            fontsLoaded: false,
            date:'12-09-2022',
            disabled:true,
            cardNumber:'',
            country:'',
        }
    }

    render() {

        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Currency")}}>
                        <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Identity Card</Text>
                </View>

                <View style={{marginLeft:20, marginRight:20, marginTop:30, backgroundColor:'#6D5FFD1A', height:230, borderRadius:15, alignItems:'center', justifyContent:'center'}}>
                    <MaterialCommunityIcons name="camera" color={'#6d5ffd'} size={25} style={{}}/>
                    <Text style={{color: '#2C3A4B', fontSize: 15, fontFamily:'SourceSansProRegular', marginTop:20}}>Scan Identity Card</Text>
                </View>

                <View style={{marginLeft:20}}>
                    <Text style={styles.textinput}>ID Card Number<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <TextInput style={styles.input} maxLength={16} value={this.state.cardNumber} onChangeText={text=>{this.setState({cardNumber:text})}}/>
                    <Text style={styles.textinput}>Country / Region<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <TextInput style={styles.input} value={this.state.country} onChangeText={text=>{this.setState({country:text})}}/>
                        <View style={{width:'90%'}}>
                            <Text style={styles.textinput}>Expired Date<Text style={{color:'#DA1414'}}>*</Text></Text>
                            <View>
                                <DatePicker
                                    style={{borderRadius:7, borderWidth:1, borderColor:'#a5abb3', width:350, height:50, marginTop:5, justifyContent:'center'}}
                                    date={this.state.date} //initial date from state
                                    mode="date" //The enum of date, datetime and time
                                    format="MMMM DD, YYYY"
                                    maxDate="01-01-2023"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    iconComponent={<MaterialCommunityIcons name="calendar-text" color={'grey'} size={20}/>}
                                    onDateChange={(date) => {
                                        this.setState({date: date});
                                        if(this.state.cardNumber==='' || this.state.country===''){
                                            this.setState({disabled:true})
                                        }
                                        else{
                                            this.setState({disabled:false})
                                        }
                                    }}/>
                            </View>
                        </View>
                </View>

                <TouchableOpacity style={this.state.disabled ? (styles.buttonSignInDis) : (styles.buttonSignIn)} disabled={this.state.disabled}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Save</Text>
                </TouchableOpacity>

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
        backgroundColor:'#6D5FFD',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
        marginTop:130,
    },
    buttonSignInDis:{
        marginLeft:20,
        backgroundColor:'#6D5FFD80',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginRight:20,
        marginTop:130,
    },
    textinput:{
        fontSize:16,
        color:'gray',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        fontFamily:'SourceSansProSemiBold',
    },
    input:{
        marginTop:5,
        borderColor:'#a5abb3',
        borderWidth:1,
        marginRight:20,
        borderRadius:5,
        width:'95%',
        height:50,
        paddingLeft:15,
        fontFamily:'SourceSansProSemiBold',
        justifyContent:'center'
    },
});
