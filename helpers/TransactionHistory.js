import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from "react-native";
import * as SQLite from "expo-sqlite";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

const db = SQLite.openDatabase('db6.testDb')

export default function TransactionHistory() {

    const data = [
        {
            status: 'down',
            name: 'Buy a shoes',
            money: 120,
            date: 'December 28, 2021',
        },
        {
            status: 'up',
            name: 'Design salary',
            money: 150,
            date: 'December 27, 2021',
        },
        {
            status: 'up',
            name: 'Design salary',
            money: 200,
            date: 'December 26, 2021',
        },
        {
            status: 'up',
            name: 'Design salary',
            money: 120,
            date: 'December 25, 2021',
        },
        {
            status: 'down',
            name: 'Christmas gifts',
            money: 120,
            date: 'December 28, 2021',
        },
    ]

    const renderItem = ({item}) => {
        return (
            <View style={styles.billContainer}>
                <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 20}}>
                    <View style={{
                        backgroundColor: '#6D5FFD1A',
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10
                    }}>
                        {item.status === 'up' ? (
                            <MaterialIcons name="arrow-downward" color={'#6D5FFD'} size={20}/>
                        ) : (
                            <MaterialIcons name="arrow-upward" color={'#FF1843'} size={20}/>
                        )}
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'SourceSansProSemiBold',
                            marginLeft: 20
                        }}>{item.name}</Text>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: 'SourceSansProRegular',
                            marginLeft: 20,
                            color: '#858C94'
                        }}>{item.date}</Text>
                    </View>
                    <Text style={{
                        fontSize: 19,
                        fontFamily: 'SourceSansProSemiBold',
                        marginLeft: 110
                    }}>$ {item.money}</Text>
                    <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft: 10}}/>
                </View>
                <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width: '95%', marginTop: 20}}/>

            </View>
        )
    }

    return (
        <View>
            <FlatList data={data} renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 23,
        color: '#394452',
        marginTop: 20,
        marginLeft: 20,
        fontFamily: 'SourceSansProSemiBold',
    },
    billContainer: {
        marginTop: 10,
        marginLeft: 20,
    },
});

