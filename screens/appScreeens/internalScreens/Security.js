import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Modal, StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export default class Security extends React.Component {
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
        const toggleSwitchRemember = () => this.setState({isEnabledRemember: (!this.state.isEnabledRemember)});
        const toggleSwitchTouch = () => this.setState({isEnabledTouch: (!this.state.isEnabledTouch)});

        return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Settings")}}>
                            <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                        </TouchableOpacity>
                        <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Login and security</Text>
                    </View>

                    <View style={{marginTop:10, marginLeft:20,}}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <MaterialIcons name="person-outline" color={'#6D5FFD'} size={20}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Face ID</Text>
                            <Switch
                                trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchFace}
                                value={this.state.isEnabledFace}
                                style={{marginLeft:180}}
                            />
                        </View>

                        <Text style={{fontSize:14,color:'#858C94', fontFamily:'SourceSansProRegular', marginTop:10}}>(Recommended)</Text>
                        <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'95%',marginTop:20}}/>

                    </View>

                    <View style={{marginTop:10, marginLeft:20,}}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <AntDesign name="checkcircleo" color={'#6D5FFD'} size={20}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Remember me</Text>
                            <Switch
                                trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchRemember}
                                value={this.state.isEnabledRemember}
                                style={{marginLeft:120}}
                            />
                        </View>

                        <Text style={{fontSize:14,color:'#858C94', fontFamily:'SourceSansProRegular', marginTop:10, width:250}}>(Not recommended if you share your device)</Text>
                        <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'95%',marginTop:20}}/>

                    </View>

                    <View style={{marginTop:10, marginLeft:20,}}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <MaterialCommunityIcons name="fingerprint" color={'#6D5FFD'} size={20}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProSemiBold', marginLeft:20}}>Touch ID</Text>
                            <Switch
                                trackColor={{ false: '#9098A1', true: '#6D5FFD' }}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitchTouch}
                                value={this.state.isEnabledTouch}
                                style={{marginLeft:165}}
                            />
                        </View>

                        <Text style={{fontSize:14,color:'#858C94', fontFamily:'SourceSansProRegular', marginTop:10, width:250}}>(Not recommended if you share your device)</Text>
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
