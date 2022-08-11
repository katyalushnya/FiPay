import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import {useEffect, useState} from "react";
import Checkbox from 'expo-checkbox';
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('db6.testDb')

export default class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emailOrPhone: '',
            password:'',
            errMsg:'',
            toggleCheckBox:false,
            shouldShow:false,
            rightfirst:false,
            rightsecond:false,

            userEmail:'',
            userPassword:'',
        }

            db.transaction( (tx)=>{
                tx.executeSql(
                    'SELECT Email, Password FROM Users',  //'SELECT Email, Password FROM Users WHERE ID=1'
                    [],
                    (tx, results)=>{
                        var len=results.rows.length;
                        if(len>0){
                            var userEmailOrPhone = results.rows.item(0).Email;
                            var userPassword = results.rows.item(0).Password;

                            console.log(userEmailOrPhone+ ' ' +userPassword);

                            this.setState({userEmail:userEmailOrPhone});
                            this.setState({userPassword:userPassword});
                        }
                    },
                    (tx, error) => {console.log('Error ', error)}
                );

            })
    }

    render() {

        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown:false,
        })

        return (
            <View style={styles.all}>
                <Image source={require('../assets/icon.png')} style={{marginLeft:20, marginTop:50}}/>
                <View style={styles.container}>
                <Text style={styles.title}>Sign in to <Text style={{color:'#6D5FFD'}}>FiPay</Text></Text>
                <Text style={styles.textinput}>Email or Phone Number<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <View style={{justifyContent: 'center',}}>
                        <TextInput style={styles.input} name='emailOrPhone' onChangeText={(text)=>{this.setState({emailOrPhone: text})}} onBlur={(text)=>{this.setState({rightfirst: true})}}/>
                        {this.state.rightfirst ? (
                            <Image source={require('../assets/right.png')} style={{marginLeft:330, position:'absolute', }}/>
                        ):null}
                    </View>
                    <Text style={styles.textinput}>Password<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <View style={{justifyContent: 'center',}}>
                        <TextInput secureTextEntry={true} style={styles.input} name='password' onChangeText={(text)=>{this.setState({password: text})}} onBlur={(text)=>{this.setState({rightsecond: true})}}/>
                        {(this.state.shouldShow)?(
                            <Image source={require('../assets/error-outline.png')} style={{marginLeft:330, position:'absolute', }}/>
                        ) : (this.state.rightsecond)?(
                            <Image source={require('../assets/right.png')} style={{marginLeft:330, position:'absolute', }}/>
                        ): null}
                    </View>
                    {this.state.shouldShow ? (
                        <View style={{ backgroundColor: '#FEEFEF', flexDirection:'row', borderRadius:5, height:30, marginLeft:20, marginRight:20, marginTop:10, alignItems:'center'}}>
                            <Image source={require('../assets/error.png')} style={{marginLeft:20,}}/>
                            <Text style={{color:'#DA1414', fontFamily:'SourceSansProRegular',}}> Invalid password</Text>
                        </View>
                    ) : null}

                    <View style={styles.checkbox}>
                        <Checkbox value={this.state.toggleCheckBox} onValueChange={(text)=>this.setState({toggleCheckBox: text})} color={this.state.toggleCheckBox ? '#6D5FFD' : undefined}/>
                        <Text style={{marginLeft:10, fontFamily:'SourceSansProSemiBold', fontSize:14, color:'#2C3A4B'}}>Remember me</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonSignIn} onPress={()=> {
                        if(this.state.emailOrPhone.toString()===this.state.userEmail.toString() && this.state.password.toString() ===this.state.userPassword.toString()){
                            this.setState({shouldShow:false})
                            this.props.navigation.navigate("FaceAuthentication")
                        }
                        else{
                            this.setState({shouldShow:true})
                        }
                    }}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18,
                            fontFamily:'SourceSansProSemiBold',}}>Sign in</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ForgotPassword")}>
                        <Text style={{textAlign: 'center', color: '#6D5FFD', fontSize: 18,
                            fontFamily:'SourceSansProSemiBold', marginTop:20,}}>Forgot the password?</Text>
                    </TouchableOpacity>


                <View style={{flexDirection:'row', marginTop:40, justifyContent: 'center'}}>
                    <Text style={{ color: '#858C94', fontSize: 16,
                        fontFamily:'SourceSansProSemiBold', }}>Don’t have an account?</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CreateAnAccount")}>
                            <Text style={{color: '#6D5FFD',fontFamily:'SourceSansProSemiBold', fontSize: 16,}}>  Sign up</Text>
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
        marginLeft:15,
        fontFamily:'SourceSansProSemiBold',
    },
    textinput:{
        fontSize:16,
        color:'gray',
        marginTop:20,
        marginLeft:30,
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
    buttonSignUp:{

    },
    checkbox:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:20,
    },
});
