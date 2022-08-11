import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../helpers/useFonts";
import Svg, { Circle, Rect } from 'react-native-svg';
import * as LocalAuthentication from 'expo-local-authentication';
import DataBaseCreateDatas from "../Datas/DataBaseCreateDatas";
import expoLocalAuthentication from "expo-local-authentication/src/ExpoLocalAuthentication";

export default class FaceAuthentication extends React.Component {
    state = {
        fontsLoaded: false,
    };

    async loadFontsAsync() {
        await useFonts();
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this.loadFontsAsync();
    }

    render() {
        const onFaceId=async()=>{
            try{
                const isCompatible = await LocalAuthentication.hasHardwareAsync();

                if(!isCompatible){
                    throw new Error('your device isnt compatible')
                }
                const isEnrolled= await LocalAuthentication.authenticateAsync();

                Alert.alert('Authenticated', 'Welcome back!')
                this.props.navigation.navigate("Tabs")
            }catch (err){
                Alert.alert('An error ae occured', error?.message);
            }
        };

        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown:false,
        })


        if (!this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <Text>Fonts Loaded</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>

                    <DataBaseCreateDatas/>

                    <Svg height="60%" width="60%" viewBox="0 0 100 100" style={{marginTop:50}}>
                        <Circle cx="50" cy="50" r="15" fill="#FFB80033" />
                        <Circle cx="50" cy="50" r="27" fill="#FFB80033" />
                        <Circle cx="50" cy="50" r="37" fill="#FFB80033" />
                    </Svg>

                    <TouchableOpacity onPress={onFaceId} style={{position: 'absolute', top:'34.3%',}}>
                    <Image source={require('../assets/cameraalt.png')} style={{width:30,height:30 }}/>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Image source={require('../assets/face-icon.png')} style={{width:65,height:65,}}/>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Tabs")}}>
                            <Text style={styles.title}>Face Authentication</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Please point your face on the screen</Text>
                    </View>

                    <StatusBar style="auto"/>

                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6D5FFD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer:{
        marginTop:20,
        backgroundColor: '#ffffff',
        alignItems:"center",
        justifyContent: "center",
        flex:1,
        width: '100%',
        borderRadius:15,
    },
    title:{
        fontSize:20,
        marginTop:20,
        fontFamily:'SourceSansProSemiBold',
    },
    text:{
        fontSize:15.5,
        marginTop:10,
        fontFamily:'SourceSansProRegular',
    },
});
