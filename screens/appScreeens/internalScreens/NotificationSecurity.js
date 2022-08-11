import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Modal, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('db5.testDb');

export default class NotificationSecurity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            isEnabledBuy:true,
            isEnabledReceive:true,
            isEnabledSend:true,
            isEnabledRequest:true,
            isEnabledPromo:false,
            isEnabledService:false,
        }

    }
    render() {

        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Settings")}}>
                        <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Notification Settings</Text>
                </View>

                <Text style={{fontSize:15, fontFamily:'SourceSansProRegular', marginLeft:20, marginTop:30}}>Notify me when</Text>

                <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%',marginTop:20, marginLeft:20}}/>

                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold'}}>Buy something</Text>
                        <Switch
                            trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({isEnabledBuy: (!this.state.isEnabledBuy)})}
                            value={this.state.isEnabledBuy}
                            style={{marginLeft:200}}
                        />
                    </View>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'95%',marginTop:20}}/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold'}}>Receive money</Text>
                        <Switch
                            trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({isEnabledReceive: (!this.state.isEnabledReceive)})}
                            value={this.state.isEnabledReceive}
                            style={{marginLeft:200}}
                        />
                    </View>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'95%',marginTop:20}}/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold'}}>Send payments</Text>
                        <Switch
                            trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({isEnabledSend: (!this.state.isEnabledSend)})}
                            value={this.state.isEnabledSend}
                            style={{marginLeft:195}}
                        />
                    </View>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'95%',marginTop:20}}/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold'}}>Receive a money request</Text>
                        <Switch
                            trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({isEnabledRequest: (!this.state.isEnabledRequest)})}
                            value={this.state.isEnabledRequest}
                            style={{marginLeft:135}}
                        />
                    </View>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'95%',marginTop:20}}/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold'}}>New promo availables</Text>
                        <Switch
                            trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({isEnabledPromo: (!this.state.isEnabledPromo)})}
                            value={this.state.isEnabledPromo}
                            style={{marginLeft:150}}
                        />
                    </View>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'95%',marginTop:20}}/>
                </View>
                <View style={{marginTop:20, marginLeft:20,}}>
                    <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold'}}>New service availables</Text>
                        <Switch
                            trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({isEnabledService: (!this.state.isEnabledService)})}
                            value={this.state.isEnabledService}
                            style={{marginLeft:145}}
                        />
                    </View>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'95%',marginTop:20}}/>
                </View>

                <StatusBar style="auto"/>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    block:{
        marginTop:20,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#6D5FFD',
        borderRadius:10,
        height:140,
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
    buttonSignIn:{
        backgroundColor:'#6D5FFD',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
        marginTop:180,
    },
});
