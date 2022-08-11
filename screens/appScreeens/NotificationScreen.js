import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {Modalize} from "react-native-modalize";
import NotificationData from "../../helpers/NotificationData";


export default class NotificationScreen extends React.Component {

    render() {
        const {modalVisible, name, amount} = this.props.route.params || false;

            return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <View style={{flexDirection:'row', marginTop:50,}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                            <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20}}/>
                        </TouchableOpacity>
                        <Text style={{marginLeft:20, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Notification</Text>
                        <Ionicons name="search" color={'#000000'} size={20} style={{marginLeft:180}}/>
                    </View>

                    <Text style={styles.text}>Today</Text>
                    <NotificationData day={'today'}/>

                    <Text style={styles.text}>Yesterday</Text>
                    <NotificationData day={'yesterday'}/>

                    <Text style={styles.text}>This weekend</Text>
                    <NotificationData day={'this weekend'}/>

                    {modalVisible ? (
                        <View style={{backgroundColor:'rgba(44,44,44,0.50)', position:'absolute',width:'100%',height:'80%'}}></View>
                    ):null}

                    <Modal animationType="slide" transparent={true} visible={modalVisible}>
                        <View style={{backgroundColor:'white', width:'100%', height:230, alignItems:'center', position:'absolute', top:'70%', borderRadius:12}}>
                            <Image source={require('../../assets/usd-coin.png')} style={{width:45, height:45, marginTop:20}}/>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProRegular', marginTop:20}}>Make a payment to {name} of {amount}</Text>

                            <View style={{flexDirection:'row',marginTop:20}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('NotificationScreen', {modalVisible:false})}}>
                                    <View style={{alignItems:'center', justifyContent:'center', width:170, height:50, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7}}>
                                        <Text style={{color: '#6D5FFD',fontFamily:'SourceSansProSemiBold', fontSize: 16,}}>Cancel</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
                                    <View style={{alignItems:'center', justifyContent:'center', width:170, height:50,backgroundColor:'#6D5FFD', borderRadius:7, marginLeft:15}}>
                                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Pay</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <StatusBar style="auto"/>
                </View>
            );

    }
}

const styles = StyleSheet.create({
    text: {
        marginLeft:20,
        marginTop:30,
        fontSize: 20,
        fontFamily:'SourceSansProSemiBold',
    },
});
