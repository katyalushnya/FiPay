import * as React from 'react';
import {View} from 'react-native';
import {VictoryPie, VictoryLabel} from "victory-native";
import Svg, {Circle} from "react-native-svg";

export default class ProgressBarBalance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percent: 85,
        }
    };

    render() {
        return (
            <Svg viewBox="0 0 300 300">
                <VictoryPie
                    standalone={false}
                    animate={{duration: 1000}}
                    width={300} height={300}
                    data={[
                        {x: 1, y: 85}, {x: 2, y: 11.300},
                    ]}
                    innerRadius={115}
                    cornerRadius={25}
                    labels={() => null}
                    style={{
                        data: {
                            fill: ({datum}) => {
                                const color = "#6D5FFD";
                                return datum.x === 1 ? color : "transparent";
                            }
                        }
                    }}
                />
                <Circle cx={75} cy={72} r={15} fill={'#6D5FFD'}/>
                <Circle cx={75} cy={72} r={9} fill={'white'}/>
                <VictoryLabel
                    textAnchor="middle"
                    style={{fontSize: 35}}
                    x={150} y={140}
                    text="85%"
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{fontSize: 14}}
                    x={150} y={170}
                    text="DEC 28"
                />
            </Svg>
        );
    }

}
