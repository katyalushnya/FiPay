import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';
import {contact} from "../../Datas/contact";
import {FontAwesome} from "@expo/vector-icons";

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: contact,
        };
    }

    _renderItem = (item, index, section) => {
        return (
            <View style={{flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 20, marginLeft: 20}}>
                <Image source={item.photo} style={{height: 70, width: 70,}}/>
                <View>
                    <Text style={{
                        fontSize: 17,
                        fontFamily: 'SourceSansProSemiBold',
                        marginLeft: 20,
                        width: 200
                    }}>{item.name}</Text>
                    <Text style={{fontSize: 15, fontFamily: 'SourceSansProRegular', marginLeft: 20}}>+{item.phone}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.push("TransferMoney", {contact_id: item.id})
                }}>
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
        );
    };

    render() {
        return (
            <View style={styles.all}>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("SendMoney")}}>
                        <Image source={require('../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold',}}>Contacts</Text>
                </View>

                <View style={styles.container}>

                    <SectionListContacts
                        ref={(s) => (this.sectionList = s)}
                        sectionListData={this.state.dataArray}
                        initialNumToRender={this.state.dataArray.length}
                        renderItem={this._renderItem}
                        letterViewStyle={styles.letterView}
                        letterTextStyle={styles.letterText}
                        scrollAnimation={true}
                    />
                </View>

                <StatusBar style="auto"/>

            </View>
        );
    }
}

export default Contacts;

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

