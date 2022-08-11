import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, Entypo, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import TransactionHistory from "../../helpers/TransactionHistory";
import ChartExpenses from "../../helpers/chart_expenses";

export default class Expenses extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:'',
            balance: 0,
            accountNumber: '',
            fontsLoaded: false,
            tooltipPos:{x: 0, y: 0, visible: false, value: 0},
            data:['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    };

    render() {
        const renderItem=({item})=>{
            return(
                <Text style={{fontSize:16, marginLeft:20, color:'#A5ABB3', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>{item}</Text>
            )
        }
        return (
            <View style={styles.container}>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("DetailScreen")}}>
                        <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold',}}>Expenses</Text>
                    <TouchableOpacity style={{marginLeft:100, marginTop:50}}>
                        <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row',borderWidth:2, borderColor:'#6D5FFD', borderRadius:7, width:110, height:30}}>
                            <Text style={{fontSize:16, color:'#6D5FFD', fontFamily:'SourceSansProSemiBold'}}>This week</Text>
                            <MaterialIcons name="arrow-drop-down" color={'#6D5FFD'} size={20}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View>
                        <Text style={{fontSize:16, marginLeft:20, color:'#6D5FFD', marginTop:20, fontFamily:'SourceSansProSemiBold',}}>Jan</Text>
                        <View style={{borderBottomColor: '#6D5FFD', borderBottomWidth: 2, width:20,marginTop:3, marginLeft:20}}/>
                    </View>
                    <FlatList data={this.state.data} horizontal renderItem={renderItem}/>
                </View>

                <Text style={{fontSize:18, marginLeft:20, marginTop:20, fontFamily:'SourceSansProSemiBold',}}>Expenses graph</Text>

                <ChartExpenses/>


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
