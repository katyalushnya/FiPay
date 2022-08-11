import React, { useState } from 'react'
import { View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import {Rect, Text as TextSVG, Svg, Polygon} from "react-native-svg";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ChartGraph = () => {
    let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })

    let showPoints=[3, 5, 8];

    return (
        <View>
            <LineChart
                data={{
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    datasets: [{
                        data: [ 54, 50, 60,40,43,40,35,45,49,35, 46,33,]
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
                    strokeWidth: "4",
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
                        r: "0",
                        strokeWidth: "0",
                        stroke: "#fbfbfb"
                    }
                }}
                bezier
                getDotProps={(dataPoint, dataPointIndex) => {
                    if (showPoints.includes(dataPointIndex)) {
                        return {
                            r: '7',
                            strokeWidth: '5',
                            stroke: "#fbfbfb"
                        };
                    }
                }}

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

export default ChartGraph;
