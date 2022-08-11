import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import useFonts from "../helpers/useFonts";

const CountDownComponent = ({activeResend, resendEmail, resendingEmail, resendStatus, timeLeft, targetTime}) =>{
    return (
        <View>
            <View style={{marginTop:10}}>
                <Text style={{ color: '#858C94', fontSize: 16, fontFamily:'SourceSansProSemiBold', alignSelf:'center', marginTop:20}}>Resend code
                    {!activeResend &&(
                    <Text> in {timeLeft || targetTime} s</Text>
                )
                }</Text>


                {activeResend &&(
                    <View>
                    <Text style={{ color: '#858C94', fontSize: 16, fontFamily:'SourceSansProSemiBold', alignSelf:'center', marginTop:40}}>Didn't recieve the email?</Text>
                    <TouchableOpacity onPress={()=>{resendEmail}} disabled={!activeResend}>
                        <Text style={{ color: 'rgb(109,95,253)', fontSize: 16, fontFamily:'SourceSansProSemiBold', alignSelf:'center', marginTop:10}}>{resendStatus}</Text>
                    </TouchableOpacity>
                    </View>
                )}

            </View>
            <StatusBar style="auto"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        width:50,
        height:50,
        backgroundColor:'rgba(109,95,253,0.1)',
        borderRadius:15,
        textAlign:'center',
        justifyContent:'center',
    },
});

export default CountDownComponent;
