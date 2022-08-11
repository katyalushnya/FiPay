import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {useState} from "react";
import Checkbox from 'expo-checkbox';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {validate} from "email-validator";

export default class NewPassword extends React.Component {
    state ={
        newPassword: '',
        toggleCheckBox:false,
        showFirst:true,
        showSecond:true,
        disabled:true,
    }

    render() {
        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown:false,
        })

        return (
            <View style={styles.all}>
                <Image source={require('../assets/icon.png')} style={{marginLeft:20, marginTop:50}}/>
                <View style={styles.container}>
                    <Text style={styles.title}>New Password</Text>
                    <Text style={styles.textinput}>New Password<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <View style={{justifyContent: 'center',}}>
                        <TextInput style={styles.input} name='newPassword' secureTextEntry={this.state.showFirst} onChangeText={(text)=>{this.setState({newPassword: text})}}/>
                        <TouchableOpacity onPress={()=> {this.setState({showFirst:(!this.state.showFirst)})}}>
                            {(!this.state.showFirst) ? (
                                <MaterialCommunityIcons name="eye" color={'#858C94'} size={25} style={{position:'absolute', top:-38, left:330}}/>
                            ):(<MaterialCommunityIcons name="eye-off" color={'#858C94'} size={25} style={{position:'absolute', top:-38, left:330}}/>)}
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textinput}>Retype New Password<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <View style={{justifyContent: 'center',}}>
                        <TextInput style={styles.input} name='newPassword' secureTextEntry={this.state.showSecond} onChangeText={(text)=>{(text===this.state.newPassword)? (this.setState({disabled:false})) : (this.setState({disabled:true}))}}/>
                        <TouchableOpacity onPress={()=> {this.setState({showSecond:(!this.state.showSecond)})}}>
                            {(!this.state.showSecond) ? (
                                <MaterialCommunityIcons name="eye" color={'#858C94'} size={25} style={{position:'absolute', top:-38, left:330}}/>
                            ):(<MaterialCommunityIcons name="eye-off" color={'#858C94'} size={25} style={{position:'absolute', top:-38, left:330}}/>)}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.checkbox}>
                        <Checkbox value={this.state.toggleCheckBox} onValueChange={(text)=>this.setState({toggleCheckBox: text})} color={this.state.toggleCheckBox ? '#6D5FFD' : undefined}/>
                        <Text style={{marginLeft:10, fontFamily:'SourceSansProSemiBold', fontSize:14, color:'#2C3A4B'}}>Remember me</Text>
                    </View>

                    <TouchableOpacity disabled={this.state.disabled} style={this.state.disabled ? (styles.buttonSignInDis) : (styles.buttonSignIn)} onPress={()=>{this.props.navigation.navigate("Tabs")}}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18,
                            fontFamily:'SourceSansProSemiBold',}}>Sign in</Text>
                    </TouchableOpacity>


                </View>
                <StatusBar style="auto"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    all:{
        backgroundColor: '#fff',
        flex: 1,
    },
    container: {
        flex:1,
        justifyContent: 'center',
    },
    title:{
        fontSize:25,
        color:'#394452',
        marginTop:20,
        marginLeft:15,
        fontFamily:'SourceSansProSemiBold',
    },
    textinput:{
        fontSize:16,
        color:'gray',
        marginTop:20,
        marginLeft:30,
        marginRight:20,
        fontFamily:'SourceSansProSemiBold',
    },
    input:{
        marginTop:5,
        borderColor:'#a5abb3',
        borderWidth:1,
        marginLeft:20,
        marginRight:20,
        borderRadius:5,
        height:50,
        paddingLeft:15,
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
        marginTop:40,
    },
    buttonSignInDis:{
        backgroundColor:'#6D5FFD80',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
        marginTop:40,
    },
    checkbox:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:20,
    },
});
