import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../helpers/useFonts";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";

import * as SQLite from "expo-sqlite";
import ListCard from "../helpers/ListCard";
import UpcommingBills from "../helpers/UpcommingBills";

const db = SQLite.openDatabase('db6.testDb')

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            balance: 0,
            accountNumber: '',
            fontsLoaded: false,
        }

        db.transaction( (tx)=>{
            tx.executeSql(
                'SELECT Name FROM Users',  //'SELECT Email, Password FROM Users WHERE ID=1'
                [],
                (tx, results)=>{
                    var len=results.rows.length;
                    if(len>0){
                        var userName = results.rows.item(0).Name;
                        this.setState({name:userName});
                    }
                },
                (tx, error) => {console.log('Error ', error)}
            );
            tx.executeSql(
                'SELECT card_number, balance, firm FROM Card',  //'SELECT Email, Password FROM Users WHERE ID=1'
                [],
                (tx, results)=>{
                    var len=results.rows.length;
                    if(len>0){
                        var NameCard = results.rows.item(0).card_number;
                        var amountbalance = results.rows.item(0).balance;
                        var firmcard = results.rows.item(0).firm;
                        console.log(NameCard +' '+amountbalance);

                        this.setState({accountNumber:NameCard, balance:amountbalance});
                    }
                },
                (tx, error) => {console.log('Error ', error)}
            );
        })
    };

    render() {
            return (
                <View style={styles.container}>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:50}}>
                        <Text style={styles.title}>Good Morning, {this.state.name}!</Text>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("DetailScreen")}}>
                            <MaterialCommunityIcons name="history" color={'#6D5FFD'} size={25} style={{marginLeft: 120, marginTop: 20}}/>
                        </TouchableOpacity>
                    </View>

                    <ListCard/>

                    <View style={{marginLeft:20, marginTop:30, flexDirection:'row'}}>
                        <Text style={{ fontSize:18, fontFamily:'SourceSansProSemiBold', }}>Upcomming bill</Text>
                        <TouchableOpacity>
                            <Text style={{fontSize:18, fontFamily:'SourceSansProSemiBold', marginLeft:170, color:'#6D5FFD'}}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    <UpcommingBills/>

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
    title:{
        fontSize:23,
        color:'#394452',
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
});
