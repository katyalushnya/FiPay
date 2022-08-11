import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import useFonts from "../helpers/useFonts";
import * as SQLite from "expo-sqlite";
import DataBaseCreateDatas from "../Datas/DataBaseCreateDatas";

const db = SQLite.openDatabase('db6.testDb')

export default class CreateAnAccountLastPart extends React.Component {
    state ={
        country: '',
        state:'',
        city:' ',
        street:'',
        disabled:true,
    }

    render() {

        const SetData = async ()=>{
            try{
                await db.transaction(async (tx)=>{
                    await tx.executeSql(
                        'UPDATE Users SET Address = ? WHERE id = 0', [this.state.street],
                    );
                })
                this.props.navigation.navigate("Tabs")
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
                    <Text style={styles.textinput}>County/Region<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <TextInput style={styles.input} name='country' onChangeText={(text)=>this.setState({country: text})}/>

                    <View style={{flexDirection:'row', width:'100%'}}>
                        <View style={{width:'47%'}}>
                            <Text style={styles.textinput}>State<Text style={{color:'#DA1414'}}>*</Text></Text>
                            <TextInput style={styles.input} onChangeText={(text)=>this.setState({state: text})}/>
                        </View>
                        <View style={{width:'45%', marginLeft:'3%'}}>
                            <Text style={styles.textinput}>City<Text style={{color:'#DA1414'}}>*</Text></Text>
                            <TextInput style={styles.input} onChangeText={(text)=>this.setState({city: text})}/>
                        </View>
                    </View>
                    <Text style={styles.textinput}>Street<Text style={{color:'#DA1414'}}>*</Text></Text>
                    <TextInput style={styles.input} onChangeText={(text)=>{
                        this.setState({street: text})
                        if(this.state.country=='' && this.state.state=='' && this.state.city=='' && this.state.street==''){
                        alert('Write all fields')
                    }
                        else{
                        this.setState({disabled:false})
                    }
                    }}/>

                    <TouchableOpacity disabled={this.state.disabled} style={styles.buttonSignIn} onPress={SetData}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18,
                            fontFamily:'SourceSansProSemiBold',}}>Create Account</Text>
                    </TouchableOpacity>
                    <DataBaseCreateDatas/>
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
        width:'90%',
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
