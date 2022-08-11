import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import Svg, {Circle} from "react-native-svg";
import {Entypo} from '@expo/vector-icons';
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('db6.testDb');

export default class Accounts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usersId:'',
            email:'',
            phone:'',
            name:'',
            address:'',
            fontsLoaded: false,
            account:'',
        }

        db.transaction( (tx)=>{
            tx.executeSql(
                'SELECT ID, Name, Email, Phone, Address FROM Users',  //'SELECT Email, Password FROM Users WHERE ID=1'
                [],
                (tx, results)=>{
                    var len=results.rows.length;
                    if(len>0){
                        var userEmail = results.rows.item(0).Email;
                        var userPhone = results.rows.item(0).Phone;
                        var userName = results.rows.item(0).Name;
                        var userID = results.rows.item(0).ID;
                        var userAddress = results.rows.item(0).Address;

                        console.log(userEmail+ ' ' +userName);

                        this.setState({name:userName, email:userEmail, phone:userPhone, address:userAddress, usersId:userID});
                    }
                },
                (tx, error) => {console.log('Error ', error)}
            );

        })
    };

    render() {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../../assets/Waves.png')} style={styles.image}>
                        <View style={{justifyContent:'flex-start', height:550}}>
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                                    <Image source={require('../../assets/arrow-back-white.png')} style={{marginLeft:20, marginTop:50}}/>
                                </TouchableOpacity>
                                <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold', color:'white'}}>Account</Text>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Settings")}}>
                                    <Entypo name={'menu'} size={25} color={'white'} style={{marginLeft:210, marginTop:50}}/>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex: 1, justifyContent: 'center',}}>
                                <Svg height="70%" width="70%" viewBox="0 0 100 100" style={{position: 'absolute', top:'-5%', left:'13%'}}>
                                    <Circle cx="53" cy="50" r="29" fill="#FFFFFF20"/>
                                    <Circle cx="53" cy="50" r="33" fill="#FFFFFF10" />
                                    <Circle cx="53" cy="50" r="38" fill="#FFFFFF07" />
                                </Svg>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Account_Analytics")}} style={{position:'absolute', height:130, width:130, top:'16%', left:'33.5%'}}>
                                <Image source={require('../../assets/photo.png')}  style={{height:130, width:130, }}/>
                                </TouchableOpacity>
                            </View>
                            </View>
                    </ImageBackground>

                    <View style={{backgroundColor:'white', justifyContent:'flex-start', height:220}}>
                    </View>

                    <View style={{position:'absolute', backgroundColor:'white', borderColor:'#6D5FFD', height:350, width:'90%', marginRight:'5%', marginLeft:'5%', top:350, borderWidth:1, borderRadius:15}}>
                        <Text style={styles.text}>Name</Text>
                        <Text style={styles.text}>Email</Text>
                        <Text style={styles.text}>Phone number</Text>
                        <Text style={styles.text}>Account number</Text>
                        <Text style={styles.text}>Users ID</Text>
                        <Text style={styles.text}>Address</Text>
                    </View>

                    <View style={{position:'absolute',height:350, width:'40%', marginRight:'5%', marginLeft:190, top:350, alignItems:'flex-end'}}>
                        <Text style={styles.textdata}>{this.state.name}</Text>
                        <Text style={styles.textdata}>{this.state.email}</Text>
                        <Text style={styles.textdata}>{this.state.phone}</Text>
                        <Text style={styles.textdata}>{this.state.account}</Text>
                        <Text style={styles.textdata}>{this.state.usersId}</Text>
                        <Text style={styles.textdata}>{this.state.address}</Text>
                    </View>
                    <StatusBar style="auto"/>
                </View>
            );

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
