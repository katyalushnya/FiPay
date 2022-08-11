import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useRef, useState} from 'react';
import {Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../helpers/useFonts";
import Varification from "../screens/Varification";
import CountDownComponent from "./CountDownComponent";
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

let OTP_code = 4900; //но нужно сделать отправку на имейл

let newInputIndex=0;

const isObjValid = (obj)=>{
    return Object.values(obj).every(val => val.trim());
}

const CodeInputField = ({ navigation }) =>{
    const [disabled, setDisabled]=useState(true);
    const input = useRef();
    const inputs = Array(4).fill('');
    const [OTP, setOTP]=useState({0:'', 1:'', 2:'', 3:''});
    const [nextInputIndex, setNewInputIndex] = useState(0);

    //--------------
    const [timeLeft, setTimeLeft] = useState(null);
    const [targetTime, setTargetTime] = useState(null);
    const [activeResend, setActiveResend] = useState(false);

    const [resendingEmail, setResendingEmail]= useState(false);
    const [resendStatus, setResendStatus] = useState('Resend');

    let resendTimerInterval;

    const handleChangeText = (text, index)=>{
        const newOTP={...OTP};
        newOTP[index] = text;
        setOTP(newOTP);

        const lastInputIndex = inputs.length-1;
        if(!text) newInputIndex = index === 0 ? 0 : index - 1;
        else newInputIndex = index===lastInputIndex ?(lastInputIndex): index+1;
        setNewInputIndex(newInputIndex);

        if(newInputIndex===lastInputIndex)
            setDisabled(false);
    };

    const triggerTime=(targetTimeSeconds = 60)=>{
        setTargetTime(targetTimeSeconds);
        setActiveResend(false);
        const finalTime = +new Date()+targetTimeSeconds *1000;
        resendTimerInterval=setInterval(()=> calculateTimeLeft(finalTime), 1000);
    };

    const calculateTimeLeft = (finalTime)=>{
        const difference = finalTime - +new Date();
        if(difference>=0){
            setTimeLeft(Math.round(difference/1000));
        } else{
            clearInterval(resendTimerInterval);
            setActiveResend(true);
            setTimeLeft(null);
        }
    };

    const resendEmail=async()=>{
        let message = 'Your code is '+OTP_code.toString();
        showMessage({
            message: message,
            type: "info",
        });
        triggerTime();
    }

    const submitOTPVarification = async ()=>{
        Keyboard.dismiss();

        if(isObjValid(OTP)){
            let val='';

            Object.values(OTP).forEach(v=>{val+=v});
            if(val.toString() === OTP_code.toString()){
                setDisabled(false);
                navigation.navigate('CreateAnAccountLastPart');
            }
            else
                alert('OTP isn`t correct');
        }
    }

    useEffect(()=>{
        input.current.focus();
        resendEmail();
        triggerTime();

        return()=>{
            clearInterval(resendTimerInterval);
        }
    }, [nextInputIndex]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{navigation.navigate("CreateAnAccount")}}>
                <Image source={require('../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50 }}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.title}>Verification Code</Text>

                <View style={{flexDirection:'row', marginTop:50, marginLeft:15}}>
                    {inputs.map((inp, index)=>{
                        return (
                            <View key={index.toString()} style={{justifyContent:'space-between', paddingHorizontal:10}}>
                                <TextInput ref={nextInputIndex===index? input : null} value={OTP[index]} onChangeText={(text)=>handleChangeText(text, index)} keyboardType={"numeric"} maxLength={1} style={styles.input}/>
                            </View>
                        );
                    })}
                </View>

            <TouchableOpacity disabled={disabled} style={disabled ? (styles.buttonSignInDis) : (styles.buttonSignIn)} onPress={submitOTPVarification}>
                <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Next</Text>
            </TouchableOpacity>

            <CountDownComponent activeResend={activeResend} resendingEmail={resendingEmail} resendStatus={resendStatus} timeLeft={timeLeft} targetTime={targetTime} resendEmail={resendEmail}/>

            </View>
            <FlashMessage position="top" />
            <StatusBar style="auto"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title:{
        fontSize:27,
        color:'#394452',
        fontFamily:'SourceSansProSemiBold',
        marginLeft:20,
    },
    input:{
        width:50,
        height:50,
        backgroundColor:'rgba(109,95,253,0.1)',
        borderRadius:15,
        textAlign:'center',
        justifyContent:'center',
    },
    buttonSignIn:{
        backgroundColor:'#6D5FFD',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginRight:20,
        marginTop:200,
        marginLeft:20,
    },
    buttonSignInDis:{
        backgroundColor:'#6D5FFD80',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginRight:20,
        marginTop:200,
        marginLeft:20,
    },
});

export default CodeInputField;
