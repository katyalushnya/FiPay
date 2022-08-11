import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {currency} from "../../Datas/currency";
import {AntDesign} from "@expo/vector-icons";
import {cards} from "../../Datas/cards";
import {contact} from "../../Datas/contact";
import DropDownPicker from "react-native-dropdown-picker";
import dropdown from "../../helpers/Dropdown";
import Dropdown from "../../helpers/Dropdown";

export default class TransferMoney extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false,
            card:cards[0].card_number,
            amount:'',
            data:['10', '100', '250', '500'],
            disabled:true,
            message:'',

            open:false,
            value:'VISA **** ****'+ cards[0].card_number.substring(14, 19),
            items:[
                {label: 'VISA **** ****'+ cards[0].card_number.substring(14, 19), value: 'VISA **** ****'+ cards[0].card_number.substring(14, 19)},
                {label: 'VISA **** ****'+cards[1].card_number.substring(14, 19), value: 'VISA **** ****'+ cards[1].card_number.substring(14, 19)}
            ],
        }
    }

    render() {

        const {contact_id} = this.props.route.params || 0;

        const ableButton=()=>{
            if(this.state.amount==''){
                this.setState({disabled:true})
            }
            else{
                this.setState({disabled:false})
            }
        }

        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Transfer money</Text>
                </View>

                <Text style={styles.textinput}>Choose card<Text style={{color:'#DA1414'}}>*</Text></Text>


                <Text style={styles.textinput}>Amount<Text style={{color:'#DA1414'}}>*</Text></Text>
                <TextInput style={{borderColor:'black', paddingRight:20, paddingLeft:20,borderWidth:1, borderRadius:10, width:'90%', height:50, marginLeft:20, marginTop:10, color: '#2C3A4B', fontSize: 20, fontFamily:'SourceSansProRegular'}} value={this.state.amount} onChangeText={text=>{
                    this.setState({amount:text});
                    ableButton();
                }}/>

                <FlatList
                    data={this.state.data}
                    horizontal
                    style={{width:'100%'}}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{backgroundColor:'#6D5FFD1A', marginLeft:20, width:73, height:50, borderRadius:5, marginTop:20, justifyContent:'center'}} onPress={()=>{this.setState({amount:item}); ableButton();}}>
                            <Text style={{textAlign: 'center', color: '#6D5FFD', fontSize: 16, fontFamily:'SourceSansProSemiBold',}}>${item}</Text>
                        </TouchableOpacity>
                    )}/>

                <Text style={{color: '#2C3A4B', fontSize: 16, fontFamily:'SourceSansProSemiBold', position:'absolute', top:390, left:40}}>Message</Text>
                <TextInput
                    style={{paddingLeft:20, paddingRight:20, paddingTop:20,fontSize: 16, fontFamily:'SourceSansProSemiBold', textAlignVertical: 'top', position:'absolute', top:420, left:20, borderColor:'black', borderWidth:1, borderRadius:10, width:'90%', height:80}}
                    numberOfLines={5}
                    multiline
                    value={this.state.message}
                    onChangeText={text=>{this.setState({message:text})}}
                />

                <View style={{position:'absolute', top:520, backgroundColor:'#FFB800', width:40, height:40, borderRadius:30, alignItems:'center', justifyContent:'center', marginLeft:170}}>
                    <AntDesign name="caretdown" color={'#fff'} size={25} style={{}}/>
                </View>

                <View style={{marginLeft: 20, flexDirection: 'row', position:'absolute', top:570, alignItems:'center'}}>
                    <Image source={contact[contact_id].photo} style={{width: 60, height: 60, borderRadius: 50,}}/>
                    <View style={{marginLeft: 20,}}>
                        <Text style={{fontFamily: 'SourceSansProSemiBold', fontSize: 15,}}>{contact[contact_id].name} </Text>
                        <Text style={{color: '#6D7580', fontFamily: 'SourceSansProSemiBold', fontSize: 12, marginTop: 5}}>{'**** ****'+ contact[contact_id].card_number.substring(14, 19)}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.buttonAdd} onPress={()=>{this.props.navigation.push("TMR")}}>
                    <Text style={{textAlign: 'center', color: '#6D5FFD', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Add recipient</Text>
                </TouchableOpacity>

                <TouchableOpacity style={this.state.disabled ? (styles.buttonSignInDis) : (styles.buttonSignIn)} disabled={this.state.disabled} onPress={()=>{this.props.navigation.push("Successful_transfer", {card_value: this.state.value, contact_id: contact_id,  amount: this.state.amount, message: this.state.message})}}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Transfer</Text>
                </TouchableOpacity>

                <StatusBar style="auto"/>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    textinput:{
        fontSize:16,
        color:'#2C3A4B',
        marginTop:30,
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
        position:'absolute',
        top:740,
        width:'90%'
    },
    buttonAdd:{
        borderColor:'#6D5FFD',
        borderRadius:5,
        borderWidth:2,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
        position:'absolute',
        top:660,
        width:'90%'
    },
    buttonSignInDis:{
        marginLeft:20,
        backgroundColor:'#6D5FFD80',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginRight:20,
        position:'absolute',
        top:740,
        width:'90%'
    },
});
