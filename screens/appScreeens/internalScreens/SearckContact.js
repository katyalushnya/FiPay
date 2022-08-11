import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';
import {contact} from "../../../Datas/contact";
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons";
import ListContacts from "../../../helpers/ListContacts";

class SearchContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataArray: contact,

            recently_contacts:[
                {
                    photo: require('../../../assets/photo/Image-5.png'),
                    name: 'Esther Howard',
                    transaction:9,
                },{
                    photo: require('../../../assets/photo/Image-6.png'),
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
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("RecieveMoney")}}>
                        <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:60}}/>
                    </TouchableOpacity>
                    <View style={{marginLeft:20, marginTop:50, width:300, height:45, backgroundColor:'#F4F6F9', alignItems:'center', flexDirection:'row',}}>
                        <TextInput style={{fontSize:20, fontFamily:'SourceSansProSemiBold', marginLeft:20, width:220 }} placeholder={'search'}/>
                        <TouchableOpacity style={{marginLeft: 20}}  onPress={()=>{this.props.navigation.navigate("Contacts")}}>
                            <Ionicons name="close" color={'#575757'} size={25}/>
                        </TouchableOpacity>
                    </View>

                </View>

                <Text style={{fontSize:20, fontFamily:'SourceSansProSemiBold', marginLeft:20, marginTop:20,}}>Contact</Text>

                <ListContacts/>

                <StatusBar style="auto"/>

            </View>
        );
    }
}

export default SearchContact;

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

