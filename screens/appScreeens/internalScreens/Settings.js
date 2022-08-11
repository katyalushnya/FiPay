import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import useFonts from "../../../helpers/useFonts";
import {AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

export default class Settings extends React.Component {
    state = {
        fontsLoaded: false,
        modalVisible:false,
    };

    async loadFontsAsync() {
        await useFonts();
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this.loadFontsAsync();
    }

    render() {
        if (!this.state.fontsLoaded) {
            return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <Text>Fonts Loaded</Text>
                </View>
            );
        } else {
            return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Accounts")}}>
                            <Image source={require('../../../assets/arrow-back.png')} style={{marginLeft:20, marginTop:50}}/>
                        </TouchableOpacity>
                        <Text style={{marginLeft:20, marginTop:50, fontSize:20, fontFamily:'SourceSansProSemiBold'}}>Settings</Text>
                    </View>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Profiles")}}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20, marginLeft:20}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <MaterialCommunityIcons name="account" color={'#6D5FFD'} size={20}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProRegular', marginLeft:20}}>Account</Text>
                            <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:200}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("NotificationSecurity")}}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20, marginLeft:20}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <MaterialCommunityIcons name="bell" color={'#6D5FFD'} size={20}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProRegular', marginLeft:20}}>Notification</Text>
                            <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:175}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("MyCard", {modalVisible: false})}}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20, marginLeft:20}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <MaterialCommunityIcons name="credit-card-outline" color={'#6D5FFD'} size={20}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProRegular', marginLeft:20}}>My Card</Text>
                            <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:200}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Security")}}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20, marginLeft:20}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <MaterialCommunityIcons name="lock" color={'#6D5FFD'} size={20}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProRegular', marginLeft:20}}>Security</Text>
                            <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:200}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Currency")}}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20, marginLeft:20}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <Image source={require('../../../assets/usd-coin.png')}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProRegular', marginLeft:20}}>Currency</Text>
                            <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:200}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20, marginLeft:20}}>
                            <View style={{backgroundColor:'#6D5FFD1A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <Ionicons name="md-checkmark-done-sharp" color={'#6D5FFD'} size={20}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProRegular', marginLeft:20}}>Services</Text>
                            <AntDesign name="right" color={'#6D5FFD'} size={18} style={{marginLeft:200}}/>
                        </View>
                    </TouchableOpacity>
                    <View style={{borderBottomColor: '#EBEEF2', borderBottomWidth: 1, width:'90%', marginLeft:20, marginTop:20, marginRight:20}}/>

                    <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                        <View style={{flexDirection:'row', width:'100%', alignItems:'center', marginTop:20, marginLeft:20}}>
                            <View style={{backgroundColor:'#FF18431A', width:50, height:50, justifyContent:'center', alignItems:'center', borderRadius:10}}>
                                <MaterialIcons name="exit-to-app" color={'#FF1843'} size={20}/>
                            </View>
                            <Text style={{fontSize:17, fontFamily:'SourceSansProRegular', marginLeft:20}}>Logout</Text>
                            <AntDesign name="right" color={'#FF1843'} size={18} style={{marginLeft:200}}/>
                        </View>
                    </TouchableOpacity>

                    {this.state.modalVisible ? (
                        <View style={{backgroundColor:'rgba(44,44,44,0.50)', position:'absolute',width:'100%',height:'80%'}}></View>
                        ):null}


                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                    >
                        <View style={{backgroundColor:'white', width:'100%', height:100, alignItems:'center', position:'absolute', top:'70%', borderRadius:12}}>
                            <MaterialIcons name="exit-to-app" color={'#6D5FFD'} size={45} style={{marginTop:20}}/>

                            <Text style={{fontSize:17, fontFamily:'SourceSansProSemiBold', marginTop:20}}>Are you sure you want to log out?</Text>

                            <View style={{flexDirection:'row', paddingHorizontal:50, marginTop:40}}>
                                <TouchableOpacity onPress={()=>{this.setState({modalVisible: !this.state.modalVisible})}}>
                                    <View style={{alignItems:'center', justifyContent:'center', width:170, height:50, backgroundColor:'white', borderColor:'#6D5FFD', borderWidth:2, borderRadius:7}}>
                                        <Text style={{color: '#6D5FFD',fontFamily:'SourceSansProSemiBold', fontSize: 16,}}>Cancel</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("HomeScreen") && this.setState({modalVisible: !this.state.modalVisible})}}>
                                    <View style={{alignItems:'center', justifyContent:'center', width:170, height:50,backgroundColor:'#6D5FFD', borderRadius:7, marginLeft:15}}>
                                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18, fontFamily:'SourceSansProSemiBold',}}>Logout</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <StatusBar style="auto"/>

                </View>
            );
        }
    }
}
