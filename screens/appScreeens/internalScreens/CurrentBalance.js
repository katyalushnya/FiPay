import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {VictoryPie, VictoryLabel, VictoryChart, VictoryAxis, VictoryBar} from "victory-native";
import Svg, {Circle} from "react-native-svg";
import ProgressBarBalance from "../../../helpers/ProgressBarBalance";

export default class CurrentBalance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            income: '14.700',
            expense: '11.300',

            percent: 85,

            data:[6, 7, 8, 4, 9, 7, 6, 8, 6, 4, 10, 6, 7, 8, 6, 9, 10, 6, 8, 5, 4, 11,6, 7, 8, 4, 9, 10, 6, 8, 9,5]


        }
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection: 'row', backgroundColor: '#6D5FFD', width: '100%', height: '50%'}}>
                    <Text style={styles.title}>Current balance</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 120,
                    left: 20,
                    width: '90%',
                    backgroundColor: 'white',
                    height: 100,
                    justifyContent: 'center',
                    borderRadius: 10,
                    marginRight: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{
                            backgroundColor: '#6D5FFD1A',
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <MaterialIcons name="arrow-downward" color={'#6D5FFD'} size={23}/>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 14,
                                color: '#545D69',
                                fontFamily: 'SourceSansProRegular',
                                marginLeft: 5
                            }}>Income</Text>
                            <Text style={{
                                fontSize: 23,
                                fontFamily: 'SourceSansProSemiBold',
                                marginLeft: 5,
                                color: '#6D5FFD'
                            }}>${this.state.income}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40}}>
                        <View style={{
                            backgroundColor: '#FF18431A',
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}>
                            <MaterialIcons name="arrow-upward" color={'#FF1843'} size={23}/>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 14,
                                color: '#545D69',
                                fontFamily: 'SourceSansProRegular',
                                marginLeft: 5
                            }}>Expense</Text>
                            <Text style={{
                                fontSize: 23,
                                fontFamily: 'SourceSansProSemiBold',
                                marginLeft: 5,
                                color: '#FF1843'
                            }}>${this.state.expense}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.block}>
                    <View style={{transform: [{scale: 0.7}], marginTop:-280}}>
                        <ProgressBarBalance/>
                    </View>
                    <Text style={{marginTop:-280, fontSize: 20, fontFamily: 'SourceSansProSemiBold',marginLeft:155}}>Days</Text>
                    <View style={{marginLeft:-25, marginTop:-50}}>
                        <VictoryChart
                            // domainPadding will add space to each side of VictoryBar to
                            // prevent it from overlapping the axis
                            domainPadding={-7}>
                            <VictoryAxis
                                style={{
                                    axis: {stroke: "white",size: 5}}}
                                tickValues={[1, 5, 10, 15, 20, 25, 30]}
                                />
                            <VictoryBar
                                cornerRadius={3}
                                style={{ data: { fill: "#6D5FFD", width: 5, } }}
                                data={this.state.data}
                            />
                        </VictoryChart>
                    </View>
                </View>


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
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6D5FFD',
        borderRadius: 10,
        height: 540,
        marginLeft: 20,
        position: 'absolute',
        top: 240,
        width: '90%',
    },
});
