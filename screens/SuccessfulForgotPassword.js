import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../helpers/useFonts";
import CodeInputField from "../helpers/CodeInputField";
import { validate } from 'email-validator';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default class SuccessfulForgotPassword extends React.Component {
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

        if (!this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <Text>Fonts Loaded</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.all}>

                    <TouchableOpacity onPress={()=> {this.props.navigation.navigate("NewPassword")}}>
                        <MaterialCommunityIcons name="check-circle" color={'#6D5FFD'} size={120}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>Successful!</Text>

                    <Text style={styles.text}>Please check your email to confirm</Text>

                    <StatusBar style="auto"/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:25,
        color:'#6D5FFD',
        fontFamily:'SourceSansProSemiBold',
        marginTop:30,
    },
    text:{
        marginTop:50,
        color:'#A5ABB3',
        fontSize: 15.5,
        fontFamily:'SourceSansProRegular',
    },
});


