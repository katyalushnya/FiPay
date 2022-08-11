import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import {cards} from "../../../Datas/cards";
import {contact} from "../../../Datas/contact";

export default class Successful_transfer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount:400,
            fontsLoaded: false,
            card:'1234 5678 1235 7890',
            contact:[
                {name: 'Acourtney Henry', number:'5678 3567 8909 4567',}
            ],
            message:'Shopping',
        }
    }

    render() {

        const {card_value, contact_id, amount, message} = this.props.route.params || 0;

        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:100}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.block}>

                    <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
                        <MaterialCommunityIcons name="check-circle" color={'#6D5FFD'} size={100}/>
                        <Text style={{color:'#6D5FFD',fontFamily:'SourceSansProSemiBold', fontSize:30, marginTop:20}}>Successful!</Text>
                        <Text style={{color:'#A5ABB3',width:200, textAlign:'center', marginTop:10, fontFamily:'SourceSansProRegular',}}>Your transaction is successful. Thank for using our services.</Text>
                    </View>

                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width: '87%', marginLeft: 20, marginTop: 20, marginRight: 20}}></View>


                    <View style={{flexDirection:'row'}}>
                    <View style={{}}>
                        <Text style={styles.text}>From</Text>
                        <Text style={styles.text}>To</Text>
                        <Text style={styles.text}>Account number</Text>
                        <Text style={styles.text}>Amount</Text>
                        <Text style={styles.text}>Message</Text>
                    </View>

                    <View style={{alignItems:'flex-end', marginLeft:50}}>
                        <Text style={styles.textdata}>{card_value}</Text>
                        <Text style={styles.textdata}>{contact[contact_id].name}</Text>
                        <Text style={styles.textdata}>{'**** ****'+ contact[contact_id].card_number.substring(14, 19)}</Text>
                        <Text style={styles.textdata}>${amount}</Text>
                        <Text style={styles.textdata}>{message}</Text>
                    </View>
                    </View>

                </View>


                <TouchableOpacity style={styles.buttonSignIn} onPress={()=>{this.props.navigation.popToTop()}}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>OK</Text>
                </TouchableOpacity>

                <StatusBar style="auto"/>

            </View>
        );
    }

}

const styles = StyleSheet.create({
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
    block:{
        marginTop:60,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#6D5FFD',
        borderRadius:10,
        height:500,
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
    buttonSignIn:{
        backgroundColor:'#6D5FFD',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
        marginTop:50,
    },
});
