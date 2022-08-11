import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import Svg, {Circle} from "react-native-svg";
import {Entypo} from '@expo/vector-icons';

export default class Scan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false,
        }
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
                <View style={styles.container}>
                        <View style={{justifyContent:'flex-start', height:'100%'}}>
                            <Image source={require('../../../assets/scan/Wave-1.png')} style={{position:'absolute',top:100}}/>
                            <View style={{flexDirection:'row', marginTop:120}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                                    <Image source={require('../../../assets/arrow-back-white.png')} style={{marginLeft:20, marginTop:50}}/>
                                </TouchableOpacity>
                                <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold', color:'white'}}>Scan QR Code</Text>
                            </View>

                            <View style={{backgroundColor:'white', justifyContent:'center', alignItems:'center', width:'85%', height:400, marginLeft:30, borderRadius:15, marginTop:130}}>

                                <Text style={{ fontSize:20, fontFamily:'SourceSansProSemiBold', }}>QR Code</Text>
                                <Text style={{ fontSize:14, color:'#858C94', fontFamily:'SourceSansProRegular', marginTop:20}}>Scan this for receiving transaction</Text>
                                <Image source={require('../../../assets/scan/QRcode.png')} style={{marginTop:20}}/>
                            </View>

                            <Image source={require('../../../assets/scan/Wave.png')} style={{position:'absolute',bottom:0}}/>
                        </View>

                    <View style={{backgroundColor:'white', justifyContent:'flex-start', height:220}}>
                    </View>
                    <StatusBar style="auto"/>
                </View>
            );
        }
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
    image:{

    },
    title:{
        fontSize:20,
        marginTop:20,
        fontFamily:'SourceSansProSemiBold',
    },
    text:{
        fontSize:15.5,
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProRegular',
    },
    textdata:{
        fontSize:15.5,
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },

});
