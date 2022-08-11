import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import {currency} from "../../Datas/currency";

export default class ExchangeMoney extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount:199,
            fontsLoaded: false,
        }
    }

    render() {

        const {id} = this.props.route.params || false;

            return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Currency")}}>
                            <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                        </TouchableOpacity>
                        <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Exchange Money</Text>
                    </View>

                    <View style={styles.block}>

                        <View style={{borderColor:'#EBEEF2', borderWidth:1, width:'90%', marginLeft:15, marginTop:15, height:90, borderRadius:10}}>
                            <Text style={{fontSize:15.5, marginTop:15, marginLeft:20, fontFamily:'SourceSansProRegular',}}>From</Text>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={styles.title}>USD</Text>
                                <AntDesign name="caretdown" color={'#000000'} size={25} style={{marginLeft:10}}/>
                            </View>

                            <View style={{position:'absolute', marginLeft:220, marginTop:40, flexDirection:'row'}}>
                                <Text style={styles.text}>$</Text><TextInput style={styles.text} onChangeText={text=>this.setState({amount: parseInt(text)})}>199</TextInput>
                            </View>
                        </View>

                        <View style={{backgroundColor:'#FFB800', width:40, height:40, borderRadius:30, alignItems:'center', justifyContent:'center', marginLeft:150, marginTop:20}}>
                            <AntDesign name="caretdown" color={'#fff'} size={25} style={{}}/>
                        </View>

                        <View style={{borderColor:'#EBEEF2', borderWidth:1, width:'90%', marginLeft:15, marginTop:20, height:90, borderRadius:10}}>
                            <Text style={{fontSize:15.5, marginTop:15, marginLeft:20, fontFamily:'SourceSansProRegular',}}>From</Text>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={styles.title}>{currency[id].smallname}</Text>
                                <AntDesign name="caretdown" color={'#000000'} size={25} style={{marginLeft:10}}/>
                            </View>

                            <View style={{position:'absolute', marginLeft:200, marginTop:40, flexDirection:'row'}}>
                                <Text style={styles.text}>$</Text><TextInput style={styles.text}>{Math.round(this.state.amount * currency[id].k)/100}</TextInput>
                            </View>
                        </View>
                    </View>


                    <TouchableOpacity style={styles.buttonSignIn}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Exchange</Text>
                    </TouchableOpacity>

                    <StatusBar style="auto"/>

                </View>
            );
        }

}

const styles = StyleSheet.create({
    block:{
        marginTop:40,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#6D5FFD',
        borderRadius:10,
        height:300,
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
        fontSize:30,
        color:'#000000',
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    text:{
        color:'#6D5FFD',
        fontSize:27,
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
        marginTop:300,
    },
});
