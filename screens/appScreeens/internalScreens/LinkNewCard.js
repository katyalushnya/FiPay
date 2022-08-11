import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import BankAccount from "../../../helpers/BankAccount";
import PopularBankAccount from "../../../helpers/PopularBankAccount";
import CreateCard from "../../../helpers/CreateCard";

export default class LinkNewCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("MyCard", {modalVisible:false})}}>
                        <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Link new card</Text>
                </View>
                <ScrollView>
                    <BankAccount/>
                    <PopularBankAccount/>
                    <CreateCard/>
                    <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("MyCard", {modalVisible:true})}}>
                        <View style={styles.button}>
                            <Text style={{textAlign: 'center', color: '#6D5FFD', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Preview</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:40}}></View>
                </ScrollView>

                <StatusBar style="auto"/>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:17,
        color:'#394452',
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    text:{
        fontSize:15.5,
        marginTop:15,
        marginLeft:20,
        fontFamily:'SourceSansProRegular',
    },
    button:{
        marginTop:100,
        marginLeft:20,
        width:'90%',
        borderRadius:7,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        borderColor:'#6D5FFD',
        borderWidth:2,
    },
});
