import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

import TransactionHistory from "../../helpers/TransactionHistory";
import ChartPercent from "../../helpers/chart_percent_circle";

export default class TotalSpent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            data:1299.60,
            accountNumber: '',
            fontsLoaded: false,

            total:939,
            balance_detail:[{expense:939, pending:500, income:439}]
        }
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row', backgroundColor:'#6D5FFD', width:'100%', height:'30%'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("BudgetCalculation")}}>
                        <Image source={require('../../assets/arrow-back-white.png')} style={{marginLeft:20, marginTop:70}}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Total spent</Text>
                    <TouchableOpacity style={{ marginLeft:100, marginTop:70}}>
                        <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row',borderWidth:1, borderColor:'#fff', borderRadius:7, width:100, height:30}}>
                            <Text style={{fontSize:16, color:'#fff', fontFamily:'SourceSansProSemiBold'}}>This week</Text>
                            <MaterialIcons name="arrow-drop-down" color={'#fff'} size={20}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.block}>
                    <View style={{marginLeft:25, marginTop:-10, transform:[{scale:1.1}]}}>
                        <ChartPercent/>
                    </View>
                    <Text style={{position:'absolute', top:75, left:135, color: '#6D5FFD', fontSize: 35, fontFamily:'SourceSansProSemiBold',}}>${this.state.total}</Text>
                    <Text style={{position:'absolute', top:120, left:140, color: '#6D7580', fontSize: 14, fontFamily:'SourceSansProRegular',}}>of ${this.state.data}</Text>
                </View>

                <ScrollView horizontal={true} style={{flexDirection:'row', marginLeft:20, position:'absolute', top:350}}>
                    <View style={{width:140, height:200, backgroundColor:'#6D5FFD', justifyContent:'center', borderRadius:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'SourceSansProRegular', marginLeft:20,marginTop:10}}>All</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SourceSansProSemiBold',marginLeft:20}}>$ {this.state.balance_detail[0].expense}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>
                    <View style={{width:140, height:200, backgroundColor:'#FFB800', justifyContent:'center', borderRadius:10, marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'SourceSansProRegular', marginLeft:20,marginTop:10}}>Income</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SourceSansProSemiBold',marginLeft:20}}>$ {this.state.balance_detail[0].pending}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>

                    <View style={{width:140, height:200, backgroundColor:'#FF1843', justifyContent:'center', borderRadius:10, marginLeft:10}}>
                        <Text style={{color:'#fff', fontSize:16, fontFamily:'SourceSansProRegular', marginLeft:20,marginTop:10}}>Outcome</Text>
                        <Text style={{color:'#fff', fontSize:27, fontFamily:'SourceSansProSemiBold',marginLeft:20}}>$ {this.state.balance_detail[0].income}</Text>
                        <Image source={require('../../assets/white_path.png')} style={{marginTop:20}}/>
                    </View>
                </ScrollView>

                <View style={{marginLeft:20, marginTop:330}}>
                    <Text style={{ fontSize:18, fontFamily:'SourceSansProSemiBold', }}>Transaction History</Text>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text style={{fontSize:16, color:'#6D5FFD', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>All</Text>
                            <View style={{borderBottomColor: '#6D5FFD', borderBottomWidth: 2, width:20,marginTop:3}}/>
                        </View>
                        <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>Income</Text>
                        <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>Outcome</Text>
                    </View>
                </View>



                <TransactionHistory/>


                <StatusBar style="auto"/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title:{
        fontSize:23,
        color:'#ffffff',
        marginTop:70,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },block:{
        position:'absolute',
        top:120,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#6D5FFD',
        borderRadius:10,
        height:200,
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
});
