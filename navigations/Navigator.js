import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import SignIn from "../screens/SignIn";
import CreateAnAccount from "../screens/CreateAnAccount";
import ForgotPassword from "../screens/ForgotPassword";
import Main from "../screens/Main";
import FaceAuthentication from "../screens/FaceAuthentication";
import Varification from "../screens/Varification";
import Services from "../screens/appScreeens/Services";
import SendMoney from "../screens/appScreeens/SendMoney";
import NotificationScreen from "../screens/appScreeens/NotificationScreen";
import Accounts from "../screens/appScreeens/Accounts";
import Settings from "../screens/appScreeens/internalScreens/Settings";
import SuccessfulForgotPassword from "../screens/SuccessfulForgotPassword";
import NewPassword from "../screens/NewPassword";
import CreateAnAccountLastPart from "../screens/CreateAnAccountLastPart";
import Profiles from "../screens/appScreeens/internalScreens/Profiles";
import CodeInputField from "../helpers/CodeInputField";
import useFonts from "../helpers/useFonts";
import Statistics from "../screens/appScreeens/Statistics";
import Security from "../screens/appScreeens/internalScreens/Security";
import NotificationSecurity from "../screens/appScreeens/internalScreens/NotificationSecurity";
import MyCard from "../screens/appScreeens/internalScreens/MyCard";
import LinkNewCard from "../screens/appScreeens/internalScreens/LinkNewCard";
import Currency from "../screens/appScreeens/internalScreens/Currency";
import ExchangeMoney from "../screens/appScreeens/ExchangeMoney";
import TopupMoney from "../screens/appScreeens/TopupMoney";
import TransferMoney from "../screens/appScreeens/TransferMoney";
import Successful_transfer from "../screens/appScreeens/internalScreens/Successful_transfer";
import Transfer_more_recipient from "../screens/appScreeens/internalScreens/Transfer_more_recipient";
import Others from "../screens/appScreeens/internalScreens/Others";
import Account_Analytics from "../screens/appScreeens/Account_Analytics";
import DetailScreen from "../screens/appScreeens/DetailScreen";
import BudgetCalculation from "../screens/BudgetCalculation";
import TotalSpent from "../screens/appScreeens/TotalSpent";
import Expenses from "../screens/appScreeens/Expenses";
import StaticsDiagram from "../screens/appScreeens/Statics_diagram";
import ManageMoney from "../screens/appScreeens/ManageMoney";
import Branches from "../screens/appScreeens/internalScreens/Branches";
import FlightTicket from "../screens/appScreeens/internalScreens/FlightTicket";
import Contacts from "../screens/appScreeens/Contacts";
import RecieveMoney from "../screens/appScreeens/RecieveMoney";
import SearchContact from "../screens/appScreeens/internalScreens/SearckContact";
import CurrentBalance from "../screens/appScreeens/internalScreens/CurrentBalance";


const Stack = createStackNavigator();
const TabsStack = createBottomTabNavigator();


const TabStackScreens=()=>{
    return(
        <TabsStack.Navigator tabBarOptions={{showLabel: false, }} screenOptions={{tabBarActiveTintColor: '#6D5FFD',}}>
            <TabsStack.Screen name={'Main'} component={Main} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="home" color={color} size={size}/>)}}/>
            <TabsStack.Screen name={'Statistics'} component={Statistics} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="chart-box" color={color} size={size}/>)}}/>
            <TabsStack.Screen name={'SendMoney'} component={SendMoney} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="plus-box" color={color} size={size}/>)}}/>
            <TabsStack.Screen name={'NotificationScreen'} component={NotificationScreen} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="bell" color={color} size={size}/>)}}/>
            <TabsStack.Screen name={'Accounts'} component={Accounts} options={{headerBackTitle:'',
                headerShown:false, tabBarLabel: '', tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="account" color={color} size={size}/>)}}/>
        </TabsStack.Navigator>
    );
}



export default class Navigator extends React.Component {
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
        if (!this.state.fontsLoaded) {
            return (
                <View style={{flex: 1, backgroundColor: '#fff',}}>
                    <Text>Fonts Loaded</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <NavigationContainer>
                        <Stack.Navigator>

                            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                            <Stack.Screen name="SignIn" component={SignIn}/>
                            <Stack.Screen name="CreateAnAccount" component={CreateAnAccount}/>
                            <Stack.Screen name="CodeInputField" component={CodeInputField}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="CreateAnAccountLastPart" component={CreateAnAccountLastPart}/>
                            <Stack.Screen name="ForgotPassword" component={ForgotPassword}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="SFP" component={SuccessfulForgotPassword}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="NewPassword" component={NewPassword}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Services" component={Services}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="FaceAuthentication" component={FaceAuthentication}/>
                            <Stack.Screen name="Profiles" component={Profiles}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Security" component={Security}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="NotificationSecurity" component={NotificationSecurity}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="MyCard" component={MyCard}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="LinkNewCard" component={LinkNewCard}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Currency" component={Currency}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="ExchangeMoney" component={ExchangeMoney}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="TopupMoney" component={TopupMoney}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="TransferMoney" component={TransferMoney}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Successful_transfer" component={Successful_transfer}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="TMR" component={Transfer_more_recipient}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Others" component={Others}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Account_Analytics" component={Account_Analytics}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="DetailScreen" component={DetailScreen}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="BudgetCalculation" component={BudgetCalculation}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="TotalSpent" component={TotalSpent}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Expenses" component={Expenses}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="StaticsDiagram" component={StaticsDiagram}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="ManageMoney" component={ManageMoney}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Branches" component={Branches}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="FlightTicket" component={FlightTicket}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Contacts" component={Contacts}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="RecieveMoney" component={RecieveMoney}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="SearchContact" component={SearchContact}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="CurrentBalance" component={CurrentBalance}
                                          options={{headerBackTitle: '', headerShown: false,}}/>
                            <Stack.Screen name="Settings" component={Settings} options={{
                                headerBackTitle: '',
                                headerShown: false, tabBarLabel: ''
                            }}/>


                            <Stack.Screen name="Tabs" component={TabStackScreens} options={{
                                headerBackTitle: '',
                                headerShown: false,
                            }}/>

                        </Stack.Navigator>
                    </NavigationContainer>
                    <StatusBar style="auto"/>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
