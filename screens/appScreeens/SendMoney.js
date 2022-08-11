import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

import * as SQLite from "expo-sqlite";
import ListContacts from "../../helpers/ListContacts";

const db = SQLite.openDatabase('db6.testDb');

export default class SendMoney extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayContacts:null,
            usersId:'',
            phone:'',
            name:'',
            surname:'',
            maxContacts:4,
            fontsLoaded: false,
        }
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT ID_contact, first_name, last_name, phone FROM Contacts',  //'SELECT Email, Password FROM Users WHERE ID=1'
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0) {
                        this.setState({arrayContacts: results});

                        var userPhone = results.rows.item(0).phone;
                        var userName = results.rows.item(0).first_name;
                        var userSurname = results.rows.item(0).last_name;

                        this.setState({name: userName, surname: userSurname, phone: userPhone});

                    }
                },
                (tx, error) => {
                    console.log('Error ', error)
                }
            );
        })

    };

    render() {
            return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                            <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                        </TouchableOpacity>
                        <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Send money</Text>
                    </View>

                    <View style={{flexDirection:'row', backgroundColor:'#F4F6F9', width:'90%', marginLeft:20, marginRight:20, marginTop:40, borderRadius:7, height:45, alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{marginLeft:20, fontSize:16, fontFamily:'SourceSansProRegular'}}>Search</Text>
                        </TouchableOpacity>
                        <MaterialIcons name="search" color={'#858C94'} size={25} style={{marginLeft:245}}/>
                    </View>

                    <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20, justifyContent:'space-between', paddingHorizontal:20}}>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:80, height:80, justifyContent:'center', alignItems:'center', borderRadius:18, borderBottomLeftRadius:10}}>
                                <MaterialIcons name="phone" color={'#6D5FFD'} size={25}/>
                            </View>
                            <Text style={{fontFamily:'SourceSansProSemiBold', marginTop:5}}>Mobile</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#FFB8001A', width:80, height:80, justifyContent:'center', alignItems:'center', borderRadius:18, borderBottomLeftRadius:10}}>
                                <MaterialCommunityIcons name="wifi" color={'#FFB800'} size={25}/>
                            </View>
                            <Text style={{fontFamily:'SourceSansProSemiBold', marginTop:5}}>Wifi</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#1867FF1A', width:80, height:80, justifyContent:'center', alignItems:'center', borderRadius:18, borderBottomLeftRadius:10}}>
                                <MaterialCommunityIcons name="wallet" color={'#1867FF'} size={25}/>
                            </View>
                            <Text style={{fontFamily:'SourceSansProSemiBold', marginTop:5}}>Wallet</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#FF18431A', width:80, height:80, justifyContent:'center', alignItems:'center', borderRadius:18, borderBottomLeftRadius:10}}>
                                <FontAwesome5 name="shopping-cart" color={'#FF1843'} size={25}/>
                            </View>
                            <Text style={{fontFamily:'SourceSansProSemiBold', marginTop:5}}>Shop</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Services")}}>
                        <View style={{alignItems:'center', justifyContent:'center', marginLeft:20, marginTop:20, width:'90%', height:50, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7}}>
                            <Text style={{color: '#6D5FFD',fontFamily:'SourceSansProSemiBold', fontSize: 16,}}>See all services</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity style={{marginLeft:20, marginTop:20, }} onPress={()=>{this.props.navigation.navigate("Contacts")}}>
                    <Text style={{fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Contact</Text>
                    </TouchableOpacity>

                    <ListContacts/>

                    <StatusBar style="auto"/>
                </View>
            );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
