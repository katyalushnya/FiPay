import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import Svg, {Circle} from "react-native-svg";
import {Entypo} from '@expo/vector-icons';
import {contact} from "../../../Datas/contact";
import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from "react";
import {cards} from "../../../Datas/cards";


export default class Transfer_more_recipient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled:true,

            open:false,
            value:'VISA **** ****'+ cards[0].card_number.substring(14, 19),
            items:[
                {label: 'VISA **** ****'+ cards[0].card_number.substring(14, 19), value: 'VISA **** ****'+ cards[0].card_number.substring(14, 19)},
                {label: 'VISA **** ****'+cards[1].card_number.substring(14, 19), value: 'VISA **** ****'+ cards[1].card_number.substring(14, 19)}
            ],
        }

    };

    render() {
        const renderItem=({item})=>{
            return (
                <View style={{alignItems:'center', marginLeft:15}}>
                    <ImageBackground source={item.photo}>
                        <View style={{backgroundColor:'#6D5FFD1A', width:60, height:60, justifyContent:'center', alignItems:'center', borderRadius:10}}></View>
                    </ImageBackground>
                    <Text style={{fontSize:14,  color:'#2C3A4B', marginTop:3, fontFamily:'SourceSansProRegular',}}>{item.name.substring(0, 5)}</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/Waves.png')} style={styles.image}>
                    <View style={{justifyContent:'flex-start', height:550}}>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                                <Image source={require('../../../assets/arrow-back-white.png')} style={{marginLeft:20, marginTop:70}}/>
                            </TouchableOpacity>
                            <Text style={{marginLeft:20, marginTop:70, fontSize:20, fontFamily:'SourceSansProSemiBold', color:'white'}}>Transfer money</Text>
                        </View>

                        <View style={{flex: 1, justifyContent: 'center', alignItems:'center', position:'absolute', top:150, left:120}}>
                            <Text style={{color:'white', fontSize:35, fontFamily:'SourceSansProSemiBold',}}>${cards[0].balance}</Text>
                            <Text style={{color:'white', fontSize:15, marginTop:10, fontFamily:'SourceSansProRegular',}}>US Dollar balance</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={{backgroundColor:'white', justifyContent:'flex-start', height:220}}>
                </View>

                <View style={{position:'absolute', backgroundColor:'white', height:400, width:'100%', top:300, borderRadius:15}}>
                    <View style={{borderBottomColor: '#d3d5d5', borderBottomWidth: 3, width: 30, marginLeft: '47%', marginTop: 20,}}></View>
                    <Text style={{fontSize:20, marginTop:20, marginLeft:20, fontFamily:'SourceSansProSemiBold',}}>Select recipient</Text>

                    <View style={{flexDirection:'row', marginLeft:20, marginTop:20}}>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:60, height:60, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <Text style={{color:'#6D5FFD', fontSize:25}}>+</Text>
                            </View>
                            <Text style={{fontSize:14,  color:'#2C3A4B', marginTop:3, fontFamily:'SourceSansProRegular',}}>Add</Text>
                        </TouchableOpacity>

                        <FlatList data={contact} horizontal renderItem={renderItem}/>

                    </View>
                    <Text style={styles.textinput}>Select card / account<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <DropDownPicker
                        style={{marginLeft:20, width: '90%', marginTop:10, fontFamily:'SourceSansProSemiBold', fontSize:16, paddingLeft:20}}
                        open={this.state.open}
                        value={this.state.value}
                        items={this.state.items}
                        setOpen={(text)=>{this.setState({open:text})}}
                        setValue={(text)=>{this.setState({value:text})}}
                        setItems={(text)=>{this.setState({item:text})}}
                    />

                    <Text style={styles.textinput}>Message</Text>
                    <TextInput
                        style={{marginLeft:20, marginTop:10, paddingLeft:20, paddingRight:20, paddingTop:20,fontSize: 16, fontFamily:'SourceSansProSemiBold', textAlignVertical: 'top', borderColor:'black', borderWidth:1, borderRadius:10, width:'90%', height:80}}
                        numberOfLines={5}
                        multiline
                        value={this.state.message}
                        onChangeText={text=>{this.setState({message:text})}}
                    />

                    <TouchableOpacity style={this.state.disabled ? (styles.buttonSignInDis) : (styles.buttonSignIn)} disabled={this.state.disabled}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Pay now</Text>
                    </TouchableOpacity>

                </View>
                <StatusBar style="auto"/>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D5FFD',
        justifyContent: 'center',
    },
    footer:{
        marginTop:20,
        backgroundColor: '#ffffff',
        alignItems:"center",
        justifyContent: "center",
        width: '100%',
        borderRadius:15,
    },
    textinput:{
        fontSize:16,
        color:'#2C3A4B',
        marginTop:30,
        marginLeft:40,
        marginRight:20,
        fontFamily:'SourceSansProSemiBold',
    },
    title:{
        fontSize:20,
        marginTop:20,
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
        marginTop:20
    },
    buttonSignInDis:{
        marginLeft:20,
        backgroundColor:'#6D5FFD80',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginRight:20,
        marginTop:20
    },

});
