import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('db5.testDb');

export default class Profiles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            phone: '',
            name: '',
            address: '',
            fontsLoaded: false,
            account: '',
            secondaryEmail:'',
            secondaryPhone:'',
            secondaryAddress:'',
        }

        db.transaction((tx) => {
            tx.executeSql(
                'SELECT Email, Phone, Address, SecondaryEmail, SecondaryNumbers, SecondaryAddress FROM Users',  //'SELECT Email, Password FROM Users WHERE ID=1'
                [],
                (tx, results) => {
                    var len = results.rows.length;
                    if (len > 0) {
                        var userEmail = results.rows.item(0).Email;
                        var userPhone = results.rows.item(0).Phone;
                        var userAddress = results.rows.item(0).Address;
                        var secondaryEmail = results.rows.item(0).SecondaryEmail;
                        var secondaryPhone = results.rows.item(0).SecondaryNumbers;
                        var secondaryAddress = results.rows.item(0).SecondaryAddress;

                        this.setState({
                            email: userEmail,
                            phone: userPhone,
                            address: userAddress,
                            secondaryEmail:secondaryEmail,
                            secondaryPhone:secondaryPhone,
                            secondaryAddress:secondaryAddress,
                        });
                    }
                },
                (tx, error) => {
                    console.log('Error ', error)
                }
            );

        })
    }

    render() {
        const UpdateData = async ()=>{
            try{
                await db.transaction(async (tx)=>{
                    await tx.executeSql(
                        'UPDATE Users SET Address = ? WHERE id = 0', [this.state.street],
                    );
                })
                console.log()
                this.props.navigation.navigate("Tabs")
            } catch (err){
                console.log(err);
            }
        };

            return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Settings")}}>
                            <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                        </TouchableOpacity>
                        <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Profiles</Text>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.title}>Email Address</Text>
                        <View>
                            <Text style={styles.text}>Primary</Text>
                            <Text style={styles.text}>Secondary</Text>
                        </View>
                        <View style={{alignItems:'flex-end', position:'absolute', marginLeft:'50%', marginTop:40}}>
                            <Text style={styles.text}>{this.state.email}</Text>
                            <Text style={styles.text}>{this.state.secondaryEmail}</Text>
                        </View>
                    </View>

                    <View style={styles.block}>
                        <Text style={styles.title}>Phone Number</Text>
                        <View>
                            <Text style={styles.text}>Primary</Text>
                            <Text style={styles.text}>Secondary</Text>
                        </View>
                        <View style={{alignItems:'flex-end', position:'absolute', marginLeft:'50%', marginTop:40}}>
                            <Text style={styles.text}>{this.state.phone}</Text>
                            <Text style={styles.text}>{this.state.secondaryPhone}</Text>
                        </View>
                    </View>


                    <View style={styles.block}>
                        <Text style={styles.title}>Address</Text>
                        <View>
                            <Text style={styles.text}>Primary</Text>
                            <Text style={styles.text}>Secondary</Text>
                        </View>
                        <View style={{alignItems:'flex-end', position:'absolute', marginLeft:'50%', marginTop:40}}>
                            <Text style={styles.text}>{this.state.address}</Text>
                            <Text style={styles.text}>{this.state.secondaryAddress}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.buttonSignIn}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Edit Information</Text>
                    </TouchableOpacity>

                    <StatusBar style="auto"/>

                </View>
            );
        }

}

const styles = StyleSheet.create({
    block:{
        marginTop:20,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#6D5FFD',
        borderRadius:10,
        height:140,
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
    buttonSignIn:{
        backgroundColor:'#6D5FFD',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
        marginTop:180,
    },
});
