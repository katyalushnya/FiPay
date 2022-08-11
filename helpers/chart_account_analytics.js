import React, { useState } from 'react'
import { View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import {Rect, Text as TextSVG, Svg, Polygon} from "react-native-svg";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Charts = () => {
    let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })

    return (
        <View>
            <LineChart
                data={{
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    datasets: [{
                        data: [ 54, 50, 60,40,43,30,50,48,49,35, 46,33,47,42,50,43,45,40,43,47,34,44,30,45,40,18,43,32,40,30,44,42,43,41,46,44,42,43,41,43,39,44,38,40,39,37,39,47,37, 38,36,40,39,40,36,37,31,32,31,43,32,40,35,38,33,41,16,42,32,38,36,39,33,30,33,27,35,28,38,12,10,30,26,28,25,30,36, 39,40, 12,28,25,23, 34,18,26,20,18,14,27,13,26,15,30,25,27,26,15,28,25]
                    }
                    ]
                }}
                style={{marginTop:10, marginLeft: -10}}
                yAxisInterval={1}
                width={380}
                height={220}
                withHorizontalLines={false}
                withVerticalLines={false}
                chartConfig={{
                    strokeWidth: "2",
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradientTo:'#fff',
                    fillShadowGradientToOpacity:0.5,
                    fillShadowGradientToOffset:0.8,
                    fillShadowGradientFrom:'#6D5FFD',
                    fillShadowGradientFromOpacity:0.5,
                    useShadowColorFromDataset: false,
                    decimalPlaces: 0,
                    color: (opacity = 1) => 'rgba(109,95,253)',
                    labelColor: (opacity = 1) => '#858C94',
                    style: {
                        borderRadius: 16,
                    },
                    propsForLabels:{
                        color:'#858C94',
                    },
                    propsForDots: {
                        r: "1",
                        strokeWidth: "0",
                        stroke: "#fbfbfb"
                    }
                }}
                bezier

                decorator={() => {
                    return tooltipPos.visible ? <View>
                        <Svg>
                            <Rect x={tooltipPos.x - 30}
                                  y={tooltipPos.y - 50}
                                  width="60"
                                  height="40"
                                  fill="#6D5FFD"
                                  rx={5} ry={5}/>
                            <Rect x={tooltipPos.x-5}
                                  y={tooltipPos.y-10}
                                  width="10"
                                  height="10"
                                  fill="#6D5FFD"
                                  rx={1} ry={1}
                            />
                            <TextSVG
                                x={tooltipPos.x}
                                y={tooltipPos.y - 25}
                                fill="white"
                                fontSize="16"
                                fontWeight="bold"
                                textAnchor="middle">
                                {tooltipPos.value}
                            </TextSVG>
                        </Svg>

                    </View> : null
                }}

                onDataPointClick={(data) => {

                    let isSamePoint = (tooltipPos.x === data.x
                        && tooltipPos.y === data.y)

                    isSamePoint ? setTooltipPos((previousState) => {
                            return {
                                ...previousState,
                                value: data.value,
                                visible: !previousState.visible
                            }
                        })
                        :
                        setTooltipPos({ x: data.x, value: data.value, y: data.y, visible: true });

                }}
            />
        </View>
    )
}

export default Charts;
