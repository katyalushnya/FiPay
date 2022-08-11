import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import TransactionHistory from "../../helpers/TransactionHistory";
import {VictoryPie, VictoryLabel} from "victory-native";
import Svg, {Rect} from "react-native-svg";
import {LineChart} from "react-native-chart-kit";
import Charts from "../../helpers/chart_account_analytics";

export default class Account_Analytics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            balance: 0,
            accountNumber: '',
            fontsLoaded: false,
            tooltipPos:{x: 0, y: 0, visible: false, value: 0},
        }
    };

    render() {

        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Accounts")}}>
                        <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold',}}>Account analytics</Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Settings")}}>
                        <Ionicons name={'search'} size={20} color={'black'} style={{marginLeft:130, marginTop:50}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View>
                        <Text style={{fontSize:16, marginLeft:20, color:'#6D5FFD', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>Day</Text>
                        <View style={{borderBottomColor: '#6D5FFD', borderBottomWidth: 2, width:20,marginTop:3, marginLeft:20}}/>
                    </View>
                    <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>Week</Text>
                    <Text style={{fontSize:16,marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>Month</Text>
                    <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>Year</Text>
                </View>

                <Text style={{fontSize:18, marginLeft:20, marginTop:20, fontFamily:'SourceSansProSemiBold',}}>Activity</Text>

                <Charts/>


                <View style={{marginLeft:20, marginTop:20, flexDirection:'row'}}>
                    <Text style={{ fontSize:18, fontFamily:'SourceSansProSemiBold',}}>Transaction History</Text>
                    <TouchableOpacity>
                        <Text style={{fontSize:18, marginLeft:140, color:'#6D5FFD', fontFamily:'SourceSansProSemiBold',}}>See all</Text>
                    </TouchableOpacity>
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
    },

});
