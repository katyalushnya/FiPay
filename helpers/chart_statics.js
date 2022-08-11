import React, { useState } from 'react'
import { View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import {Rect, Text as TextSVG, Svg, Polygon} from "react-native-svg";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ChartStatics = () => {

    let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })

    let showPoints=[5];


    return (
        <View>
            <LineChart
                bezier
                data={{
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', "Fri", "Sat", "Sun"],
                    legend: ["This Week", "Last Week"],
                    datasets: [
                        {

                            data: [500, 600, 450, 500, 400, 100, 300,],
                            strokeWidth: 2,
                            color: (opacity = 1) => `#6D5FFD33`, // optional
                        },
                        {
                            data: [200, 400, 600, 500, 300, 420, 400,],
                            strokeWidth: 2,
                            color: (opacity = 1) => `#6D5FFD`, // optional
                        },
                    ],
                }}
                width={330}
                height={160}
                withVerticalLines={false}
                withHorizontalLabels={false}
                withShadow={false}
                hideLegend={false}
                chartConfig={{
                    strokeWidth: "5",
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    propsForDots: {
                        r: "1",
                        strokeWidth: "0",
                        stroke: "#fbfbfb"
                    },
                    propsForBackgroundLines:{
                        stroke:"#DADEE3",
                        strokeDasharray: "0",
                        count:5,
                        paddingRight:15,
                    },
                    propsForVerticalLabels:{
                        color:'#6D5FFD',
                    }
                }}
                style={{
                    marginVertical: 8,
                }}
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
                                  y={tooltipPos.y - 30}
                                  width="60"
                                  height="40"
                                  fill="#6D5FFD"
                                  rx={5} ry={5}/>
                            <Rect x={tooltipPos.x-5}
                                  y={tooltipPos.y+10}
                                  width="10"
                                  height="10"
                                  fill="#6D5FFD"
                                  rx={1} ry={1}
                            />
                            <TextSVG
                                x={tooltipPos.x-10}
                                y={tooltipPos.y - 5}
                                fill="white"
                                fontSize="16"
                                fontWeight="bold"
                                textAnchor="middle">
                                $  {tooltipPos.value}
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

export default ChartStatics;
