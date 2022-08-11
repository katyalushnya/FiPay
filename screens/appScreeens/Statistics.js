import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

import * as SQLite from "expo-sqlite";
import TransactionHistory from "../../helpers/TransactionHistory";
import ChartStatics from "../../helpers/chart_statics";

const db = SQLite.openDatabase('db6.testDb')

export default class Statistics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            balance: 0,
            accountNumber: '',
            fontsLoaded: false,
        }
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection: 'row', backgroundColor: '#6D5FFD', width: '100%', height: '30%'}}>
                    <Text style={styles.title}>Statistics</Text>
                </View>


                <TouchableOpacity style={{position: 'absolute', top: 70, left: 270,}}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 7,
                        width: 100,
                        height: 30
                    }}>
                        <Text style={{fontSize: 16, color: '#ffffff', fontFamily: 'SourceSansProSemiBold'}}>This
                            week</Text>
                        <MaterialIcons name="arrow-drop-down" color={'#fff'} size={20}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.block}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate("StaticsDiagram")
                    }}>

                        <ChartStatics/>

                    </TouchableOpacity>
                </View>

                <View style={{marginLeft: 20, marginTop: 130, flexDirection: 'row'}}>
                    <Text style={{fontSize: 18, fontFamily: 'SourceSansProSemiBold',}}>Transaction History</Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'SourceSansProSemiBold',
                            marginLeft: 140,
                            color: '#6D5FFD'
                        }}>See all</Text>
                    </TouchableOpacity>
                </View>

                <TransactionHistory/>


                <StatusBar style="auto"/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 23,
        color: '#ffffff',
        marginTop: 70,
        marginLeft: 20,
        fontFamily: 'SourceSansProSemiBold',
    }, block: {
        position: 'absolute',
        top: 120,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6D5FFD',
        borderRadius: 10,
        height: 220,
        width: '90%',
        marginLeft: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.25,
        shadowRadius: 14.78,

        elevation: 22,
    },
});
