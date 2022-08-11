import React, {Component} from 'react';
import {View,Dimensions} from 'react-native'
import {LineChart } from 'react-native-chart-kit'

export default class Chart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            max: 0,
            min: 0,
            curve: 'string',
        }
    }

    render(){
        const CARD_WIDTH = 200 - 20;
        const GRAPH_WIDTH = CARD_WIDTH - 60;
        const CARD_HEIGHT = 325;
        const GRAPH_HEIGHT = 200;

        return(
            <View style={{width:200, height:120}}>
                <LineChart
                    height={GRAPH_HEIGHT}
                    width={GRAPH_WIDTH}
                    data={this.state}
                    bottomPadding={20}
                    leftPadding={0}
                />
            </View>
        )
    }
}
