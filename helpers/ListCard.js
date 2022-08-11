import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, FlatList, Image} from "react-native";
import * as SQLite from "expo-sqlite";
import {cards} from "../Datas/cards";

const db = SQLite.openDatabase('db6.testDb')

export default function ListCard(){


    const renderItem=({item})=>{
        return(
            <View style={styles.cardContainer}>
                <Image source={require('../assets/Card.png')} style={{marginLeft:20, marginTop:50, width:300, height:190}}/>
                <Text style={{ position:'absolute', fontFamily:'SourceSansProRegular', fontSize:16, color:'white', top:80, left:40}}>Balance</Text>
                <Text style={{ position:'absolute', fontFamily:'SourceSansProSemiBold', fontSize:25, color:'white', top:100, left:40}}>$ {item.balance}</Text>
                <Text style={{ position:'absolute', fontFamily:'SourceSansProRegular', fontSize:14, color:'white', top:180, left:40}}>Account number</Text>
                <Text style={{ position:'absolute', fontFamily:'SourceSansProSemiBold', fontSize:14, color:'white', top:200, left:40}}>{'**** **** ****'+ item.card_number.substring(14, 19)}</Text>
            </View>
        )
    }

    return(
        <View>
            <FlatList data={cards} horizontal renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title:{
        fontSize:23,
        color:'#394452',
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    cardContainer:{
        marginTop:-20
    },
});

