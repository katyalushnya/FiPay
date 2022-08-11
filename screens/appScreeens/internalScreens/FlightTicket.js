import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export default class FlightTicket extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            namestart:'London, UK',
            datastart:'December 28,2021',
            timestart:'18.00',
            passenger:'John Doe',
            flight:'MYU467A',
            gate:'G2',
            seat:'20A',

            nameend:'Colifornia,USA',
            dataend:'December 29,2021',
            timeend:'04.00',

            showticket:false,
        }
    }
    render() {

        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ManageMoney")}}>
                        <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Flight ticket</Text>
                </View>

                <View style={{alignItems:'center', flexDirection:'row', marginTop:30, marginLeft:20}}>
                    <View style={{backgroundColor:'#FF18431A', width:60, height:60, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="map-marker" color={'#FF1843'} size={23}/>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'SourceSansProSemiBold',
                            marginLeft: 20
                        }}>{this.state.namestart}</Text>
                        <Text style={{
                            marginTop:8,
                            fontSize: 12,
                            fontFamily: 'SourceSansProRegular',
                            marginLeft: 20,
                            color: '#858C94'
                        }}>{this.state.datastart}</Text>
                    </View>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'SourceSansProRegular',
                        marginLeft: 130,
                    }}>{this.state.timestart}</Text>
                </View>
                <View style={{width:5, height:5, borderRadius:10, backgroundColor:'#A5ABB3', marginLeft:45, marginTop:5}}></View>
                <View style={{width:5, height:5, borderRadius:10, backgroundColor:'#A5ABB3', marginLeft:45, marginTop:10, marginBottom:5}}></View>
                <View style={{alignItems:'center', flexDirection:'row', marginLeft:20}}>
                    <View style={{backgroundColor:'#6D5FFD1A', width:60, height:60, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                        <MaterialCommunityIcons name="map-marker" color={'#6D5FFD'} size={23}/>
                    </View>
                    <View>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'SourceSansProSemiBold',
                            marginLeft: 20
                        }}>{this.state.nameend}</Text>
                        <Text style={{
                            marginTop:8,
                            fontSize: 12,
                            fontFamily: 'SourceSansProRegular',
                            marginLeft: 20,
                            color: '#858C94'
                        }}>{this.state.dataend}</Text>
                    </View>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'SourceSansProRegular',
                        marginLeft: 118,
                    }}>{this.state.timeend}</Text>
                </View>

                <TouchableOpacity onPress={()=>{this.setState({show:true})}}>
                    <View style={{alignItems:'center', justifyContent:'center', width:350, height:50, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7, marginLeft:20, marginRight:20, marginTop:20}}>
                        <Text style={{color: '#6D5FFD',fontFamily:'SourceSansProSemiBold', fontSize: 16,}}>View ticket</Text>
                    </View>
                </TouchableOpacity>

                {this.state.show &&
                <View>
                    <View style={styles.block}>
                        <View style={{flexDirection:'row'}}>
                        <View style={{ marginLeft:30}}>
                            <Text style={styles.text}>Passenger</Text>
                            <Text style={styles.text}>Flight</Text>
                            <Text style={styles.text}>Date</Text>
                            <Text style={styles.text}>Gate</Text>
                            <Text style={styles.text}>Seat</Text>
                        </View>

                        <View style={{marginLeft:110, alignItems:'flex-end'}}>
                            <Text style={styles.text}>{this.state.passenger}</Text>
                            <Text style={styles.text}>{this.state.flight}</Text>
                            <Text style={styles.text}>{this.state.datastart}</Text>
                            <Text style={styles.text}>{this.state.gate}</Text>
                            <Text style={styles.text}>{this.state.seat}</Text>
                        </View>
                        </View>
                        <Image source={require('../../../assets/flightCode.png')} style={{marginLeft:20, marginTop:20, width:'90%', height:100}}/>
                    </View>

                <TouchableOpacity onPress={()=>{this.setState({show:false})}}>
                    <View style={{width:350, backgroundColor:'#6D5FFD', borderRadius:7, height:50, alignItems:"center", justifyContent: "center", marginLeft:20, marginRight:20, marginTop:30}}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>OK</Text>
                    </View>
                </TouchableOpacity>


                </View>
                }

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
        marginTop:20,
        fontFamily:'SourceSansProRegular',
    },
    block: {
        justifyContent:'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 350,
        width: '90%',
        marginLeft: 20,
        marginTop: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,

        elevation: 22,
    },
});
