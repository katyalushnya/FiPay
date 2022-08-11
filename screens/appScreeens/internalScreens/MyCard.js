import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import {cards} from "../../../Datas/cards";

export default class MyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            closeModal:false,
        }
    }
    render() {
        const { modalVisible } = this.props.route.params;

        const renderItem=({item})=>{
            return(
                <View>
                    <Image source={item.design} style={{marginLeft:20, marginTop:30, width:'90%', height:220}}/>
                    <Text style={{ position:'absolute', fontFamily:'SourceSansProRegular', fontSize:16, color:'white', top:60, left:40}}>Balance</Text>
                    <Text style={{ position:'absolute', fontFamily:'SourceSansProSemiBold', fontSize:25, color:'white', top:80, left:40}}>$ {item.balance}</Text>
                    <Text style={{ position:'absolute', fontFamily:'SourceSansProRegular', fontSize:14, color:'white', top:180, left:40}}>Account number</Text>
                    <Text style={{ position:'absolute', fontFamily:'SourceSansProSemiBold', fontSize:14, color:'white', top:200, left:40}}>{'**** **** ****'+ item.card_number.substring(14, 19)}</Text>
                </View>
            )
        }

        return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Settings")}}>
                            <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                        </TouchableOpacity>
                        <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>My Cards</Text>
                    </View>

                    <FlatList data={cards} renderItem={renderItem}/>

                    <TouchableOpacity style={styles.buttonSignIn} onPress={()=>{this.props.navigation.navigate("LinkNewCard")}}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Add New Card</Text>
                    </TouchableOpacity>

                    {modalVisible ? (
                        <View style={{backgroundColor:'rgba(44,44,44,0.50)', position:'absolute',width:'100%',height:'80%'}}></View>
                    ):null}

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                    >
                        <View style={{backgroundColor:'white', width:'100%', height:'50%', alignItems:'center', position:'absolute', top:'50%', borderRadius:12}}>
                            <MaterialIcons name="link" color={'#6D5FFD'} size={45} style={{marginTop:40}}/>

                            <Text style={{fontSize:20, fontFamily:'SourceSansProRegular', marginTop:20, width:200, alignSelf:'center', textAlign:'center'}}>Add your bank account on our website</Text>
                            <Text style={{fontSize:14, fontFamily:'SourceSansProRegular', marginTop:30, width:350, alignSelf:'center', textAlign:'center'}}>We're adding features as fast as we can. For now, you can add your account on our website.</Text>
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
                                    <View style={{width:350, backgroundColor:'#6D5FFD', borderRadius:7, height:50, alignItems:"center", justifyContent: "center", marginLeft:20, marginRight:20, marginTop:20}}>
                                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Go to our website</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('MyCard', {modalVisible:false})}}>
                                    <View style={{alignItems:'center', justifyContent:'center', width:350, height:50, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7, marginLeft:20, marginRight:20, marginTop:10}}>
                                        <Text style={{color: '#6D5FFD',fontFamily:'SourceSansProSemiBold', fontSize: 16,}}>Not now</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <StatusBar style="auto"/>

                </View>
            );

        }
}

const styles = StyleSheet.create({
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
        position:'absolute',
        top:750,
        width:'90%',
        backgroundColor:'#6D5FFD',
        borderRadius:7,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft:20,
        marginRight:20,
    },
});
