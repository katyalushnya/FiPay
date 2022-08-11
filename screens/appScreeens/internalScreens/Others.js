import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Modal, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export default class Others extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            isEnabledFace:true,
            isEnabledRemember:false,
            isEnabledTouch:false,
        }

    }
    render() {
        const toggleSwitchFace = () => this.setState({isEnabledFace: (!this.state.isEnabledFace)});

        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Settings")}}>
                        <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Others</Text>
                </View>

                    <View style={{marginTop:30, marginLeft:20,flexDirection:'row', width:'100%', alignItems:'center'}}>
                        <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                            <MaterialCommunityIcons name="bell" color={'#6D5FFD'} size={20}/>
                        </View>
                        <Text style={{fontSize:17, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Notification</Text>
                        <Switch
                            trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchFace}
                            value={this.state.isEnabledFace}
                            style={{marginLeft:145}}
                        />
                    </View>
                <View style={{ marginLeft:20, borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%',marginTop:20}}/>

                <View style={{marginTop:30, marginLeft:20,flexDirection:'row', width:'100%', alignItems:'center'}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="fingerprint" color={'#6D5FFD'} size={20}/>
                    </View>
                    <Text style={{fontSize:17, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Fingerprint</Text>
                    <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:175}}/>
                </View>
                <View style={{ marginLeft:20, borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%',marginTop:20}}/>

                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Security")}}>
                <View style={{marginTop:30, marginLeft:20,flexDirection:'row', width:'100%', alignItems:'center'}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="google-translate" color={'#6D5FFD'} size={20}/>
                    </View>
                    <Text style={{fontSize:17, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Language</Text>
                    <Text style={{ color:'#2C3A4B', fontSize:17, fontFamily:'SourceSansProRegular', marginLeft:115}}>English</Text>
                    <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:20}}/>
                </View>
                </TouchableOpacity>
                <View style={{ marginLeft:20, borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%',marginTop:20}}/>

                <View style={{marginTop:30, marginLeft:20,flexDirection:'row', width:'100%', alignItems:'center'}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                        <Image source={require('../../../assets/usd-coin.png')}/>
                    </View>
                    <Text style={{fontSize:17, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Fast Payment</Text>
                    <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:160}}/>
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
