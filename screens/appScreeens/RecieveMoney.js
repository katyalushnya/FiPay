import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';
import {contact} from "../../Datas/contact";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";
import ListContacts from "../../helpers/ListContacts";

class RecieveMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: contact,

            recently_contacts:[
                {
                    photo: require('../../assets/photo/Image-5.png'),
                    name: 'Esther Howard',
                    transaction:9,
                },{
                    photo: require('../../assets/photo/Image-6.png'),
                    name: 'Annette Black',
                    transaction:12,
                },
            ]
        };
    }
    render() {
        return (
            <View style={styles.all}>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Services")}}>
                        <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold',}}>Receive money</Text>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SearchContact")}}>
                        <Ionicons name="search" color={'#575757'} size={25} style={{marginLeft: 130, marginTop: 50}}/>
                    </TouchableOpacity>
                </View>

                <Text style={{marginLeft:20, marginTop:20,fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Recently</Text>

                <View>
                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 20, marginLeft: 20}}>
                        <Image source={this.state.recently_contacts[0].photo} style={{height: 70, width: 70,}}/>
                        <View>
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'SourceSansProSemiBold',
                                marginLeft: 20,
                                width: 200
                            }}>{this.state.recently_contacts[0].name}</Text>
                            <Text style={{fontSize: 15, fontFamily: 'SourceSansProRegular', marginLeft: 20}}>{this.state.recently_contacts[0].transaction} transaction</Text>
                        </View>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("SearchContact")}}>
                            <View style={{
                                backgroundColor: '#6D5FFD1A',
                                width: 50,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10
                            }}>
                                <FontAwesome name="paper-plane" color={'#6D5FFD'} size={20}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'87%', marginLeft:20, marginTop:20, marginRight:20}}/>
                </View>
                <View>
                    <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 20, marginLeft: 20}}>
                        <Image source={this.state.recently_contacts[1].photo} style={{height: 70, width: 70,}}/>
                        <View>
                            <Text style={{
                                fontSize: 17,
                                fontFamily: 'SourceSansProSemiBold',
                                marginLeft: 20,
                                width: 200
                            }}>{this.state.recently_contacts[1].name}</Text>
                            <Text style={{fontSize: 15, fontFamily: 'SourceSansProRegular', marginLeft: 20}}>{this.state.recently_contacts[1].transaction} transaction</Text>
                        </View>
                        <TouchableOpacity onPress={() => {}}>
                            <View style={{
                                backgroundColor: '#6D5FFD1A',
                                width: 50,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 10
                            }}>
                                <FontAwesome name="paper-plane" color={'#6D5FFD'} size={20}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'87%', marginLeft:20, marginTop:20, marginRight:20}}/>
                </View>

                <TouchableOpacity style={{marginLeft:20, marginTop:20, }} onPress={()=>{this.props.navigation.navigate("Contacts")}}>
                    <Text style={{fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Contact</Text>
                </TouchableOpacity>
                <ListContacts/>

                <StatusBar style="auto"/>

            </View>
        );
    }
}

export default RecieveMoney;

const styles = StyleSheet.create({
    all: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        marginTop:50,
        flex: 1,
        backgroundColor: '#fff',
    },
    itemTextView: {
        height: 44,
        marginLeft: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    letterText: {
        fontSize: 11,
        color: '#A5ABB3',
    },
});

