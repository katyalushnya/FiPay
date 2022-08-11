import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard} from 'react-native';
import useFonts from "../helpers/useFonts";
import CodeInputField from "../helpers/CodeInputField";
import CountDownComponent from "../helpers/CountDownComponent";

export default class  Varification extends React.Component {
    state = {
        fontsLoaded: false,
        modalVisible:false,
        disabled:true, //доделать таймер и сделать кнопку неактивной до конца
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
                <View style={styles.container}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("CreateAnAccount")}}>
                        <Image source={require('../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50 }}/>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.title}>Verification Code</Text>
                        <CodeInputField/>
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
        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    title:{
        fontSize:27,
        color:'#394452',
        fontFamily:'SourceSansProSemiBold',
        marginLeft:20,
    },
});
