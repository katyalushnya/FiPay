import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import useFonts from "../helpers/useFonts";


export default class HomeScreen extends React.Component {

    state = {
        fontsLoaded: false,
    };

    async loadFontsAsync() {
        await useFonts();
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this.loadFontsAsync();
    }

    render() {
        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown:false,
        })

        if (!this.state.fontsLoaded) {
            return (
                <View style={styles.container}>
                    <Text>Fonts Loaded</Text>
                </View>
            );
        } else {

            return (
                <View style={styles.container}>

                    <ImageBackground source={require('../assets/first-background.png')} style={styles.image}>
                        <LinearGradient
                            colors={['#6D5FFD00', '#09101D']} style={styles.background}>
                            <View style={styles.content}>
                                <Text style={styles.title}>Welcome</Text>
                                <Text style={styles.text}>FiPay: The best multifunctional digital E-Wallet of this
                                    century.</Text>
                                <StatusBar style="auto"/>

                                <View style={styles.buttons}>
                                    <TouchableOpacity
                                        style={styles.buttonSignIn}
                                        onPress={() => this.props.navigation.navigate("SignIn")}>
                                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18,
                                            fontFamily:'SourceSansProSemiBold',}}>Sign In</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.buttonCreateAnAccount}
                                                      onPress={() => this.props.navigation.navigate("CreateAnAccount")}>
                                        <Text style={{textAlign: 'center', color: 'white', fontSize: 18,
                                            fontFamily:'SourceSansProSemiBold',}}>Create an
                                            account</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </LinearGradient>
                    </ImageBackground>

                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'stretch'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignSelf: 'stretch'
    },
    content: {
        margin:20,
        top:'30%',
    },
    title:{
        //fontFamily: 'Source Sans Pro',
        fontSize: 24,
        alignSelf:'stretch',
        color: 'white',
        fontFamily:'SourceSansProBold',
    },
    text:{
        marginTop:5,
        color: 'white',
        fontSize: 15.5,
        fontFamily:'SourceSansProRegular',
    },
    buttons:{
        paddingVertical:10,
    },
    buttonSignIn:{
        backgroundColor:'#6D5FFD',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
    },
    buttonCreateAnAccount:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:5,
        height:50,
        alignItems:"center",
        justifyContent: "center",
        marginTop:10,
    },
});
