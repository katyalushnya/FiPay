import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import useFonts from "../helpers/useFonts";
import {useEffect} from "react";
import * as SQLite from "expo-sqlite";
import {validate} from "email-validator";

const db = SQLite.openDatabase('db6.testDb')

export default class CreateAnAccount extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            disabled:true,
            fullname: '',
            emailOrPhone:'',
            password:'',
            toggleCheckBox:false,
            errMsg:''
        }
        // Check if the items table exists if not create it
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT, Phone Text, Password INTEGER, Address TEXT, SecondaryEmail Text, SecondaryNumbers Text, SecondaryAddress Text);'
            )
        })
    }


    render() {

        const SetData = async ()=>{
            try{
                await db.transaction(async (tx)=>{
                    await tx.executeSql(
                        'INSERT INTO Users (Name, Email, Password) VALUES(?,?,?)', [this.state.fullname, this.state.emailOrPhone, this.state.password]
                    );
                })
                this.props.navigation.navigate("CodeInputField")
            } catch (err){
                console.log(err);
            }
        };


        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown:false,
        })

        return (
            <View style={styles.all}>
                <Image source={require('../assets/icon.png')} style={{marginLeft:20, marginTop:50}}/>
                <View style={styles.container}>
                    <Text style={styles.title}>Create a new account</Text>
                    <Text style={styles.textinput}>Full Name<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <TextInput style={styles.input} name='emailOrPhone' onChangeText={(text)=>this.setState({fullname: text})}/>

                    <Text style={styles.textinput}>Email or Phone Number<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <TextInput style={styles.input} name='emailOrPhone' onChangeText={(text) => {this.setState({emailOrPhone: text})}}/>

                    <Text style={styles.textinput}>Password<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <View style={{justifyContent: 'center',}}>
                        <TextInput secureTextEntry={true} style={styles.input} name='password' onChangeText={(text)=>{
                            this.setState({password: text})
                            if(this.state.emailOrPhone=='' && this.state.fullname=='' && this.state.password==''){
                                alert('Write all fields')
                            }
                            else{
                                this.setState({disabled:false})
                            }
                        }}/>
                    </View>

                    <View style={styles.checkbox}>
                        <Checkbox value={this.state.toggleCheckBox} onValueChange={(text)=>this.setState({toggleCheckBox: text})} color={this.state.toggleCheckBox ? '#6D5FFD' : undefined}/>
                        <View style={{flexDirection:'column'}}>
                        <Text style={{marginLeft:12, fontFamily:'SourceSansProRegular', fontSize:15, color:'#858C94'}}>By creating an account, you agree to our</Text>
                        <Text style={{marginLeft:12, fontFamily:'SourceSansProRegular', fontSize:15, color:'#6D5FFD'}}>Term and Conditions</Text>
                        </View>
                    </View>

                    <TouchableOpacity disabled={this.state.disabled} style={this.state.disabled ? (styles.buttonSignInDis) : (styles.buttonSignIn)} onPress={SetData}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18,
                            fontFamily:'SourceSansProSemiBold',}}>Create Account</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row', marginTop:40, justifyContent: 'center'}}>
                        <Text style={{ color: '#858C94', fontSize: 16,
                            fontFamily:'SourceSansProSemiBold', }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("SignIn")}>
                            <Text style={{color: '#6D5FFD',fontFamily:'SourceSansProSemiBold', fontSize: 16,}}>  Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StatusBar style="auto"/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    all:{
        backgroundColor: '#fff',
        flex: 1,
    },
    container: {
        flex:1,
        justifyContent: 'center',
    },
    title:{
        fontSize:25,
        color:'#394452',
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    textinput:{
        fontSize:16,
        color:'gray',
        marginTop:20,
        marginLeft:40,
        marginRight:20,
        fontFamily:'SourceSansProSemiBold',
    },
    input:{
        marginTop:5,
        borderColor:'#a5abb3',
        borderWidth:1,
        marginLeft:20,
        marginRight:20,
        borderRadius:5,
        height:50,
        paddingLeft:15,
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
        marginTop:40,
    },
    buttonSignInDis:{
        marginLeft:20,
        backgroundColor:'#6D5FFD80',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginRight:20,
        marginTop:20,
    },
    buttonSignUp:{

    },
    checkbox:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:20,
    },
});
