import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function PopularBankAccount(){
    return(
        <View style={{marginLeft:20, marginTop:100, backgroundColor: '#fff'}}>
            <Text style={{ fontSize:20, fontFamily:'SourceSansProSemiBold', }}>Popular Bank Account</Text>

            <View style={{flexDirection:'row', marginTop:20, marginLeft:-20, justifyContent:'space-between', paddingHorizontal:20}}>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#FFB8001A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../assets/banks/symbols.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SourceSansProSemiBold', marginTop:5}}>VISA</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../assets/banks/master.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SourceSansProSemiBold', marginTop:5}}>MasterCard</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#1867FF1A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../assets/banks/paypal.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SourceSansProSemiBold', marginTop:5}}>PayPal</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={{backgroundColor:'#FF18431A', width:75, height:75, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
                        <Image source={require('../assets/banks/payoneer.png')} style={{}}/>
                    </View>
                    <Text style={{fontSize: 15, fontFamily:'SourceSansProSemiBold', marginTop:5}}>Payoneer</Text>
                </View>
            </View>

            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={{textAlign: 'center', color: '#6D5FFD', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>See all</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        marginTop:20,
        width:'95%',
        borderRadius:7,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        borderColor:'#6D5FFD',
        borderWidth:2,
    },
});

