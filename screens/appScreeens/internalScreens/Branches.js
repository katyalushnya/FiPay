import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import MapView, {Marker} from 'react-native-maps';
import {cards} from "../../../Datas/cards";
import {mapStyle} from "../../../Datas/mapStyle";

export default class Branches extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markers:[{
                name:'Franklin Guvk',
                address:'Roys Curk',
                destination:0.4,
            },{
                name:'Nguyen Dirks',
                address:'Volssgen',
                destination:0.7,
            },
                {
                    name:'Lionsheart',
                    address:'Huyyen Kurkv',
                    destination:1.2,
                },
            ],
        }

    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {

        const renderItem=({item})=>{
            return(
                <View>
                    <View style={{alignItems:'center', flexDirection:'row', marginTop:10}}>
                        <View style={{backgroundColor:'#6D5FFD1A', width:60, height:60, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                            <MaterialCommunityIcons name="map-marker" color={'#6D5FFD'} size={23}/>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'SourceSansProSemiBold',
                                marginLeft: 20,
                                width:110,
                            }}>{item.name}</Text>
                            <Text style={{
                                marginTop:8,
                                fontSize: 12,
                                fontFamily: 'SourceSansProRegular',
                                marginLeft: 20,
                                color: '#858C94'
                            }}>{item.address}</Text>
                        </View>

                        <View style={{marginLeft: 100, alignItems:'flex-end'}}>
                            <View style={{flexDirection:'row'}}>
                                <FontAwesome name="star" color={'#6D5FFD'} size={10}/>
                                <FontAwesome name="star" color={'#6D5FFD'} size={10} style={{marginLeft: 3}}/>
                                <FontAwesome name="star" color={'#6D5FFD'} size={10} style={{marginLeft: 3}}/>
                                <FontAwesome name="star" color={'#6D5FFD'} size={10} style={{marginLeft: 3}}/>
                                <FontAwesome name="star-half-empty" color={'#6D5FFD'} size={10} style={{marginLeft: 3}}/>
                            </View>

                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'SourceSansProRegular',
                            }}>{item.destination}</Text>
                            </View>
                    </View>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width: '90%', marginTop: 10}}/>

                </View>
            )
        }



        return (
            <View style={{flex: 1, backgroundColor: '#fff',}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ManageMoney")}}>
                        <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Branches</Text>
                </View>

                <MapView
                    style={styles.map}
                    region = {{
                        latitude: 48.4782703,
                        longitude: 35.0816091,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    customMapStyle={mapStyle}>
                    <Marker coordinate={{ latitude : 48.4782703 , longitude : 35.0816091 }} title={this.state.markers[0].name} description={this.state.markers[0].address}>
                        <View style={{width:25, height:25, backgroundColor:'#6D5FFD', borderColor:'white', borderWidth:3, borderRadius:15}}></View>
                    </Marker>
                    <Marker coordinate={{ latitude : 48.4909044 , longitude : 35.0579859 }} title={this.state.markers[1].name} description={this.state.markers[1].address}>
                        <View style={{width:25, height:25, backgroundColor:'#6D5FFD', borderColor:'white', borderWidth:3, borderRadius:15}}></View>
                    </Marker>
                    <Marker coordinate={{ latitude : 48.5109044 , longitude : 35.1079859 }} title={this.state.markers[2].name} description={this.state.markers[2].address}>
                        <View style={{width:25, height:25, backgroundColor:'#6D5FFD', borderColor:'white', borderWidth:3, borderRadius:15}}></View>
                    </Marker>

                    <Marker coordinate={{ latitude : 48.49010044 , longitude : 35.0979859 }}>
                        <View style={{width:100, height:100, backgroundColor:'#FF18431A', borderRadius:50, alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:35, height:35, backgroundColor:'#FF1843', borderRadius:20, alignItems:'center', justifyContent:'center'}}>
                            <FontAwesome name="location-arrow" color={'white'} size={15}/>
                        </View>
                        </View>
                    </Marker>
                </MapView>

                <View style={styles.block}>
                </View>


                <FlatList data={this.state.markers} renderItem={renderItem} style={{width:'100%',position:'absolute', top:540, left:20}}/>

                <StatusBar style="auto"/>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    title:{
        fontSize:17,
        color:'#394452',
        marginTop:20,
        marginLeft:20,
        fontFamily:'SourceSansProSemiBold',
    },
    map: {
        marginTop:20,
        width: '100%',
        height: 500,
    },
    block: {
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#fff',
        position:'absolute',
        top:500,
        borderRadius: 20,
        height: 200,
        width: '100%',
        marginTop: 20,
    },
});
