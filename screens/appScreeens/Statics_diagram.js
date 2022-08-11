import {StatusBar} from 'expo-status-bar';
import Moment from 'moment';
import * as React from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../helpers/useFonts";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import TransactionHistory from "../../helpers/TransactionHistory";
import {VictoryPie, VictoryLabel} from "victory-native";
import Svg from "react-native-svg";
import CalendarPicker from 'react-native-calendar-picker';

export default class StaticsDiagram extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            balance: 0,
            accountNumber: '',
            fontsLoaded: false,
            incomes: 200.20,
            outcomes: 160.80,

            modalVisible:false,
            selectedStartDate: null,
            selectedEndDate: null,
            openModalCalendar:false,
        }
        this.onDateChange = this.onDateChange.bind(this);
    };

    onDateChange(date, type) {
        if (type === 'END_DATE') {
            this.setState({
                selectedEndDate: date,
            });
        } else {
            this.setState({
                selectedStartDate: date,
                selectedEndDate: null,
            });
        }
    }


    render() {
        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date(2017, 6, 3);
        const maxDate = new Date(); // Today
        const startDate  =  selectedStartDate ? selectedStartDate.toString() : 'November 20, 2021';
        const endDate = selectedEndDate ? selectedEndDate.toString() : 'December 20, 2021';

        return (
            <View style={styles.container}>

                <View style={{flexDirection: 'row', backgroundColor: '#6D5FFD', width: '100%', height: '30%'}}>
                    <Text style={styles.title}>Statistics</Text>
                </View>


                <TouchableOpacity style={{position: 'absolute', top: 70, left: 270,}} onPress={()=>{this.setState({modalVisible:true})}}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: 'white',
                        borderRadius: 7,
                        width: 100,
                        height: 30
                    }}>
                        <Text style={{fontSize: 16, color: '#ffffff', fontFamily: 'SourceSansProSemiBold'}}>This
                            week</Text>
                        <MaterialIcons name="arrow-drop-down" color={'#fff'} size={20}/>
                    </View>
                </TouchableOpacity>

                <View style={styles.block}>
                    <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 25,}}>
                        <View>
                            <Text style={{
                                fontSize: 16,
                                color: '#858C94',
                                fontFamily: 'SourceSansProRegular'
                            }}>Incomes</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <Text style={{
                                    fontSize: 27,
                                    fontFamily: 'SourceSansProSemiBold'
                                }}>${this.state.incomes}</Text>
                                <MaterialIcons name="arrow-downward" color={'#6D5FFD'} size={20}
                                               style={{marginLeft: 10}}/>
                            </View>
                        </View>
                        <View style={{marginLeft: 90}}>
                            <Text style={{
                                fontSize: 16,
                                color: '#858C94',
                                fontFamily: 'SourceSansProRegular'
                            }}>Outcomes</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                <Text style={{
                                    fontSize: 27,
                                    fontFamily: 'SourceSansProSemiBold'
                                }}>${this.state.outcomes}</Text>
                                <MaterialIcons name="arrow-upward" color={'#FF1843'} size={20}
                                               style={{marginLeft: 10}}/>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        borderBottomColor: '#EBEEF2',
                        borderBottomWidth: 1,
                        width: '87%',
                        marginTop: 20,
                        marginLeft: 20
                    }}/>
                    <View style={{marginTop: -100}}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("Statistics")
                        }}>
                        <Svg viewBox="0 0 300 300">
                            <VictoryPie
                                colorScale={["#FFB800", "#6D5FFD", "#FF1843", "#1867FF", "#E1604D"]}
                                standalone={false}
                                width={300} height={300}
                                data={[
                                    {x: 1, y: 120}, {x: 2, y: 150}, {x: 3, y: 75}, {x: 4, y: 75}, {x: 5, y: 75}
                                ]}
                                innerRadius={80} labelRadius={100}
                                style={{labels: {fontSize: 1}}}
                            />
                            <VictoryLabel
                                textAnchor="middle"
                                style={{fontSize: 35}}
                                x={150} y={160}
                                text="60%"
                            />
                            <VictoryLabel
                                textAnchor="middle"
                                style={{fontSize: 15}}
                                x={150} y={120}
                                text="DEC 28"
                            />
                        </Svg>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginLeft: 20, marginTop: 300, flexDirection: 'row'}}>
                    <Text style={{fontSize: 18, fontFamily: 'SourceSansProSemiBold',}}>Transaction History</Text>
                    <TouchableOpacity>
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'SourceSansProSemiBold',
                            marginLeft: 140,
                            color: '#6D5FFD'
                        }}>See all</Text>
                    </TouchableOpacity>
                </View>
                <TransactionHistory/>


                {this.state.modalVisible ? (
                    <View style={{backgroundColor:'rgba(44,44,44,0.50)', position:'absolute',width:'100%',height:'80%'}}></View>
                ):null}

                <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
                    { !this.state.openModalCalendar &&
                    <View style={{backgroundColor:'white', width:'100%', height:400, alignItems:'center', position:'absolute', top:'60%', borderRadius:12}}>
                        <Text style={{fontSize: 20, fontFamily: 'SourceSansProSemiBold',marginTop:20}}>Filter</Text>

                        <View style={{width:'90%'}}>
                            <Text style={styles.textinput}>From<Text style={{color:'#DA1414'}}>*</Text></Text>
                            <View style={{justifyContent:'center', width:350, height:50,borderWidth:1, borderRadius:7, marginTop:10, marginBottom:10}}>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.setState({openModalCalendar:true})}}>
                                    <Text style={{fontSize: 16, fontFamily: 'SourceSansProSemiBold', width:250, marginLeft:20, marginRight:40}}>{Moment(startDate).format('MMMM DD, YYYY')}</Text>
                                    <MaterialCommunityIcons name="calendar-text" color={'grey'} size={20}/>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.textinput}>To<Text style={{color:'#DA1414'}}>*</Text></Text>
                            <View style={{justifyContent:'center', width:350, height:50,borderWidth:1, borderRadius:7, marginTop:10}}>
                                <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.setState({openModalCalendar:true})}}>
                                    <Text style={{fontSize: 16, fontFamily: 'SourceSansProSemiBold', width:250, marginLeft:20, marginRight:40}}>{Moment(endDate).format('MMMM DD, YYYY')}</Text>
                                    <MaterialCommunityIcons name="calendar-text" color={'grey'} size={20}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                            <TouchableOpacity onPress={()=>{this.setState({modalVisible:false})}}>
                                <View style={{alignItems:'center', justifyContent:'center', width:350, height:50,backgroundColor:'#6D5FFD', borderRadius:7, marginTop:10}}>
                                    <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Apply</Text>
                                </View>
                            </TouchableOpacity>
                    </View>
                    }

                    {this.state.openModalCalendar &&
                        <View style={{backgroundColor:'white', width:'100%', height:500, alignItems:'center', position:'absolute', top:'40%', borderRadius:12}}>

                            <View style={{flexDirection:'row', marginTop:20,}}>
                                <View style={{alignItems:'center', width:150, height:50,borderWidth:1, borderRadius:7, borderColor:'#6D5FFD',flexDirection:'row'}}>
                                        <Text style={{fontSize: 16, fontFamily: 'SourceSansProSemiBold', marginLeft:20, color:'#6D5FFD'}}>{Moment(startDate).format('MMM DD, YYYY')}</Text>
                                        <AntDesign name="caretdown" color={'#6D5FFD'} size={18}/>
                                </View>
                                <View style={{marginLeft:20,alignItems:'center', width:150, height:50,borderWidth:1, borderColor:'#6D5FFD',borderRadius:7, flexDirection:'row'}}>
                                        <Text style={{fontSize: 16, fontFamily: 'SourceSansProSemiBold', marginLeft:20, color:'#6D5FFD'}}>{Moment(endDate).format('MMM DD, YYYY')}</Text>
                                        <AntDesign name="caretdown" color={'#6D5FFD'} size={18}/>
                                </View>
                            </View>
                            <View style={{marginTop:10}}>
                                <CalendarPicker
                                    startFromMonday={true}
                                    allowRangeSelection={true}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    todayBackgroundColor="#f2e6ff"
                                    selectedDayColor="#6D5FFD33"
                                    selectedDayTextColor="#FFFFFF"
                                    onDateChange={this.onDateChange}
                                    textStyle={{fontFamily:'SourceSansProRegular'}}
                                    selectedDayTextStyle={{color:'black', fontFamily:'SourceSansProSemiBold'}}
                                    scrollable={true}
                                />
                            </View>

                            <TouchableOpacity onPress={()=>{this.setState({openModalCalendar:false})}}>
                                <View style={{alignItems:'center', justifyContent:'center', width:350, height:50,backgroundColor:'#6D5FFD', borderRadius:7, marginTop:-20}}>
                                    <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Apply</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                </Modal>


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
    title: {
        fontSize: 23,
        color: '#ffffff',
        marginTop: 70,
        marginLeft: 20,
        fontFamily: 'SourceSansProSemiBold',
    }, block: {
        position: 'absolute',
        top: 120,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6D5FFD',
        borderRadius: 10,
        height: 400,
        width: '90%',
        marginLeft: 20,

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
