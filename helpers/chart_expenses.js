import React, { useState } from 'react'
import { View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import {Rect, Text as TextSVG, Svg, Polygon} from "react-native-svg";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const ChartExpenses = () => {

    return (
        <View>
            <LineChart
                bezier
                data={{
                    labels: [1,2,3,4,5,6,7,8,9,10,11,12],
                    datasets: [
                        {
                            data: [500, 600, 450, 500, 400, 420, 300, 400,  300, 450, 550, 350,  400],
                            strokeWidth: 2,
                            color: (opacity = 1) => `#FFB800`, // optional
                        },
                        {
                            data: [200, 400, 600, 500, 300, 100, 400, 600, 450, 500, 400, 420, 300],
                            strokeWidth: 2,
                            color: (opacity = 1) => `#6D5FFD`, // optional
                        },
                        {
                            data: [500, 300, 400, 300, 450, 550, 350, 200, 400, 600, 500, 300, 450,],
                            strokeWidth: 2,
                            color: (opacity = 1) => `#FF1843`, // optional

                        },
                    ],
                }}
                width={380}
                height={220}
                withHorizontalLines={false}
                withVerticalLines={false}
                chartConfig={{
                    useShadowColorFromDataset: true,
                    strokeWidth: "3",
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradientTo:'#fff',
                    fillShadowGradientToOpacity:0,
                    fillShadowGradientFromOpacity:0.5,
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    propsForLabels:{
                        color:'#858C94',
                    },
                    propsForDots: {
                        r: "1",
                        strokeWidth: "0",
                        stroke: "#fbfbfb"
                    }
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 20,
                }}
            />
        </View>
    )
}

export default ChartExpenses;
