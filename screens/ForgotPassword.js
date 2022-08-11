import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../helpers/useFonts";
import CodeInputField from "../helpers/CodeInputField";
import { validate } from 'email-validator';

export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false,
            disabled:true,
            rightfirst:false,
        }

    }

    async loadFontsAsync() {
        await useFonts();
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this.loadFontsAsync();
    }

    render() {

        const UpdateData = async ()=>{
            try{
                await db.transaction(async (tx)=>{
                    await tx.executeSql(
                        'INSERT INTO Users (Name, Email, Password) VALUES(?,?,?)', [this.state.fullname, this.state.emailOrPhone, this.state.password]
                    );
                })
                this.props.navigation.navigate("Varification")
            } catch (err){
                console.log(err);
            }
        };

        if (!this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <Text>Fonts Loaded</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.all}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SignIn")}}>
                        <Image source={require('../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>

                    <View style={styles.container}>
                        <Text style={styles.title}>Forgot Password</Text>

                        <Text style={{marginTop:40, fontSize: 15.5, fontFamily:'SourceSansProRegular',}}>Please enter your email, we will confirm the password change via email</Text>
                        <Text style={styles.textinput}>Email<Text style={{color:'#DA1414'}}>*</Text></Text>
                        <View style={{justifyContent: 'center',}}>
                            <TextInput style={styles.input} name='emailOrPhone' onChangeText={(text)=>{validate(text) ? (this.setState({disabled:false})) : (this.setState({disabled:true}))}}/>
                            {(!this.state.disabled) ? (
                                <Image source={require('../assets/right.png')} style={{marginLeft:310, position:'absolute', }}/>
                            ):null}
                        </View>

                        <TouchableOpacity disabled={this.state.disabled} style={this.state.disabled ? (styles.buttonSignInDis) : (styles.buttonSignIn)} onPress={()=> {this.props.navigation.navigate("SFP")}}>
                            <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Confirm</Text>
                        </TouchableOpacity>

                    </View>

                    <StatusBar style="auto"/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex:1,
        justifyContent: 'center',
        marginLeft:20,
    },
    title:{
        fontSize:25,
        color:'#394452',
        fontFamily:'SourceSansProSemiBold',
    },
    textinput:{
        fontSize:16,
        marginLeft:20,
        color:'gray',
        marginTop:40,
        marginRight:20,
        fontFamily:'SourceSansProSemiBold',
    },
    input:{
        marginTop:5,
        borderColor:'#a5abb3',
        borderWidth:1,
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
        marginRight:20,
        marginTop:20,
    },
    buttonSignInDis:{
        backgroundColor:'#6D5FFD80',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginRight:20,
        marginTop:20,
    },
});
