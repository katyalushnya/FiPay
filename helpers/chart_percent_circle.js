import React, { useState } from 'react'
import {View, Dimensions, Text} from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import {Rect, Svg, Polygon} from "react-native-svg";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {VictoryPie} from "victory-native";

const ChartPercent = () => {

    const percent = 50;
    const data=[{ x: 1, y: percent }, { x: 1, y: 100-percent }];


    return (
        <View>
            <Svg>
                <VictoryPie
                    standalone={false}
                    width={300} height={300}
                    innerRadius={90}
                    startAngle={90}
                    endAngle={-90}
                    data={data}
                    labels={() => null}
                    colorScale={['rgba(109,95,253,0)', '#6D5FFD']}
                    cornerRadius={5}
                />
                <VictoryPie
                    standalone={false}
                    width={300} height={300}
                    innerRadius={90}
                    startAngle={90}
                    endAngle={-90}
                    data={[{ x: 1, y: 100 }]}
                    labels={() => null}
                    colorScale={['#6D5FFD4D', '#6D5FFD']}
                    cornerRadius={5}
                />
            </Svg>

            <Text style={{position:'absolute', top:160, fontSize:12, left:45, color:'#A5ABB3'}}>0%</Text>
            <Text style={{position:'absolute', top:160, fontSize:12, left:230, color:'#A5ABB3'}}>100%</Text>
        </View>
    )
}

export default ChartPercent;
