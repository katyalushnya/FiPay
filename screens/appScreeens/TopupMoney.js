import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {currency} from "../../Datas/currency";
import {AntDesign} from "@expo/vector-icons";
import {cards} from "../../Datas/cards";

export default class TopupMoney extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false,
            card:cards[1].card_number,
            amount:'',
            data:['10', '100', '250', '500'],
            disabled:true,
        }
    }

    render() {

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
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Services")}}>
                        <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Top up money</Text>
                </View>

                <Text style={styles.textinput}>Choose card<Text style={{color:'#DA1414'}}>*</Text></Text>
                <View style={{flexDirection:'row', alignItems:'center', borderColor:'black', borderWidth:1, borderRadius:10, width:'90%', height:50, marginLeft:20, marginTop:10 }}>
                    <Text style={{color:'#2C3A4B',marginLeft:20, fontSize: 15, fontFamily:'SourceSansProSemiBold', }}>{'VISA **** ****'+ this.state.card.substring(14, 19)}</Text>
                    <AntDesign name="caretdown" color={'#2C3A4B'} size={18} style={{marginLeft:170}}/>
                </View>

                <View style={{backgroundColor:'#6D5FFD1A', width:'90%', height:130, marginLeft:20, marginTop:30, justifyContent:'center', borderRadius:10}}>
                    <Text style={{color: '#2C3A4B', fontSize: 15, fontFamily:'SourceSansProRegular', marginTop:20, marginLeft:20}}>Nominal</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color: '#2C3A4B', fontSize: 40, fontFamily:'SourceSansProSemiBold', margin:20}}>$</Text>
                        <TextInput style={{color: '#2C3A4B', fontSize: 40, fontFamily:'SourceSansProSemiBold'}} value={this.state.amount} onChangeText={text=>{
                            this.setState({amount:text});
                            ableButton();
                        }}/>
                    </View>
                </View>

                <FlatList
                    data={this.state.data}
                    horizontal
                    style={{width:'100%'}}
                    renderItem={({ item }) => (
                            <TouchableOpacity style={{backgroundColor:'#6D5FFD1A', marginLeft:20, width:73, height:50, borderRadius:5, marginTop:20, justifyContent:'center'}} onPress={()=>{this.setState({amount:item}); ableButton();}}>
                                <Text style={{textAlign: 'center', color: '#6D5FFD', fontSize: 16, fontFamily:'SourceSansProSemiBold',}}>${item}</Text>
                            </TouchableOpacity>
                    )}/>

                <Text style={{color: '#2C3A4B', fontSize: 16, fontFamily:'SourceSansProSemiBold', position:'absolute', top:470, left:40}}>Note</Text>
                <TextInput
                    style={{fontSize: 16, fontFamily:'SourceSansProSemiBold', textAlignVertical: 'top', position:'absolute', top:500, left:20, borderColor:'black', borderWidth:1, borderRadius:10, width:'90%', height:120}}
                    numberOfLines={5}
                    multiline
                />

                <TouchableOpacity style={this.state.disabled ? (styles.buttonSignInDis) : (styles.buttonSignIn)} disabled={this.state.disabled}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Top up</Text>
                </TouchableOpacity>

                <StatusBar style="auto"/>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    block:{
        marginTop:40,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#6D5FFD',
        borderRadius:10,
        height:300,
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
        fontSize:30,
        color:'#000000',
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    text:{
        color:'#6D5FFD',
        fontSize:27,
        fontFamily:'SourceSansProSemiBold',
    },
    textinput:{
        fontSize:16,
        color:'#2C3A4B',
        marginTop:40,
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
        top:730,
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
        top:730,
        width:'90%'
    },
});
