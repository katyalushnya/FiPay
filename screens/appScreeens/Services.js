import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export default class Services extends React.Component {
    state = {
        fontsLoaded: false,
        modalVisible:false,
    };

    async loadFontsAsync() {
        await useFonts();
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this.loadFontsAsync();
    }

    render() {
        if (!this.state.fontsLoaded) {
            return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <Text>Fonts Loaded</Text>
                </View>
            );
        } else {
            return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SendMoney")}}>
                            <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                        </TouchableOpacity>
                        <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Services</Text>
                    </View>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("RecieveMoney")}}>
                        <View style={{backgroundColor:'#6D5FFD1A', marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:'#6D5FFD1A', width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialCommunityIcons name="account-supervisor-circle" color={'#6D5FFD'} size={25}/>
                                </View>
                                <View>
                                    <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Add or Manage</Text>
                                    <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Authorized Users</Text>
                                </View>
                                <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:100}}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ManageMoney")}}>
                        <View style={{backgroundColor:'#FFB8001A', marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:'#FFB8001A', width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialCommunityIcons name="credit-card-outline" color={'#FFB800'} size={25}/>
                                </View>
                                <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Manage Cards & Devices</Text>
                                <AntDesign name="right" color={'#FFB800'} size={18} style={{marginLeft:53}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                        <View style={{backgroundColor:'#1867FF1A', marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:'#1867FF1A', width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialCommunityIcons name="crop" color={'#1867FF'} size={20}/>
                                </View>
                                <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Balance Transfer</Text>
                                <AntDesign name="right" color={'#1867FF'} size={18} style={{marginLeft:100}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                        <View style={{backgroundColor:'#FF18431A', marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:'#FF18431A', width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialIcons name="monetization-on" color={'#FF1843'} size={25}/>
                                </View>
                                <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Create or Change Cash Pin</Text>
                                <AntDesign name="right" color={'#FF1843'} size={18} style={{marginLeft:35}}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("TopupMoney")}}>
                        <View style={{backgroundColor:'#6D5FFD1A', marginTop:20, marginLeft:20, width:'90%', height:80, justifyContent:'center',borderRadius:10}}>
                            <View style={{flexDirection:'row', width:'100%', alignItems:'center'}}>
                                <View style={{backgroundColor:'#6D5FFD1A', width:80, height:80, justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                                    <MaterialIcons name="money" color={'#6D5FFD'} size={25}/>
                                </View>
                                <View>
                                    <Text style={{fontSize:15, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Credit Line Increase</Text>
                                </View>
                                <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:75}}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <StatusBar style="auto"/>

                </View>
            );
        }
    }
}
