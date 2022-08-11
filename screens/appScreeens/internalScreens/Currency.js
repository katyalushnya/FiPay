import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {currency} from "../../../Datas/currency";

export default class Currency extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fontsLoaded: false,
            data:1299.60,
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

        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Settings")}}>
                        <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Currency</Text>
                </View>

                <View style={{backgroundColor:'#6D5FFD1A', width:'90%', height:150, marginLeft:20, marginTop:20, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{color: '#6D5FFD', fontSize: 40, fontFamily:'SourceSansProSemiBold',}}>$ {this.state.data}</Text>
                    <Text style={{color: '#2C3A4B', fontSize: 15, fontFamily:'SourceSansProRegular', marginTop:20}}>US Dollar balance</Text>
                </View>
                <Text style={{ fontSize:18, fontFamily:'SourceSansProSemiBold', marginTop:30, marginLeft:20}}>Other currencies</Text>

                <FlatList
                    data={currency}
                    renderItem={({ item }) => (
                        <View style={{flexDirection:'row', marginLeft:20, marginTop:20, alignItems:'center'}}>
                            <Image source={item.image} style={{ width:90, height:60, borderWidth:0.3, borderColor:'#6D7580'}}/>
                            <View style={{marginLeft:20}}>
                                <Text style={{fontSize: 17, fontFamily:'SourceSansProSemiBold',}}>{Math.round(this.state.data * item.k)/100}</Text>
                                <Text style={{fontSize: 14, fontFamily:'SourceSansProRegular', color:'#6D7580'}}>{item.name}</Text>
                            </View>
                            <TouchableOpacity style={styles.buttonSignIn} onPress={()=>{this.props.navigation.navigate("ExchangeMoney", {id: item.id})}}>
                                <Text style={{textAlign: 'center', color: '#6D5FFD', fontSize: 16, fontFamily:'SourceSansProSemiBold',}}>Exchange</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />


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
    buttonSignIn:{
        borderColor:'#6D5FFD',
        borderWidth:2,
        borderRadius:5,
        height:40,
        alignItems:"center",
        justifyContent: "center",
        width:100,
        position:'absolute',
        right:20
    },

});
