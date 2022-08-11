import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import useFonts from "../helpers/useFonts";
import {useEffect} from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('db6.testDb')

export default class DataBaseCreateDatas extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data:null,
        }

        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Contacts (ID_contact INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT NOT NULL, last_name TEXT NOT NULL, email TEXT UNIQUE, phone TEXT NOT NULL UNIQUE, card TEXT NOT NULL UNIQUE);'
            )
        })
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Transaction (ID_transaction INTEGER PRIMARY KEY AUTOINCREMENT,person_name TEXT NOT NULL, date DATETIME NOT NULL,amount_transaction INTEGER NOT NULL UNIQUE);'//A date and time combination. Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1000-01-01 00:00:00' to '9999-12-31 23:59:59'.
            )
        })

        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Notification (ID_notification INTEGER PRIMARY KEY AUTOINCREMENT, bill_name TEXT NOT NULL UNIQUE, amount_notification INTEGER NOT NULL, type BOOL NOT NULL);'  //Zero is considered as false, nonzero values are considered as true.
            )
        })

        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Card (ID_card INTEGER PRIMARY KEY AUTOINCREMENT, card_number TEXT NOT NULL UNIQUE, balance INTEGER NOT NULL,firm TEXT NOT NULL);'
            )
        })


        db.transaction(tx => {
        tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Id_keys (ID INTEGER, ID_contact INTEGER, ID_transaction INTEGER, ID_notification INTEGER, ID_card INTEGER PRIMARY, PRIMARY KEY (ID, ID_contact, ID_transaction, ID_notification, ID_card), FOREIGN KEY (ID) REFERENCES Users (ID) ON DELETE CASCADE ON UPDATE NO ACTION, FOREIGN KEY (ID_contact) REFERENCES Contacts (ID_contact) ON DELETE CASCADE ON UPDATE NO ACTION, FOREIGN KEY (ID_transaction) REFERENCES Transaction (ID_transaction) ON DELETE CASCADE ON UPDATE NO ACTION, FOREIGN KEY (ID_notification) REFERENCES Notification (ID_notification) ON DELETE CASCADE ON UPDATE NO ACTION, FOREIGN KEY (ID_card) REFERENCES Card (ID_card) ON DELETE CASCADE ON UPDATE NO ACTION);'
            )
        })

        //Cards----------------
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO Card (card_number, balance, firm) VALUES(?,?,?)', ['• • •  • • •  • • •  8399', 1299, 'Mastercard']
            )
        })

        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO Card (card_number, balance, firm) VALUES(?,?,?)', ['• • •  • • •  • • •  6273', 899, 'Mastercard']
            )
            console.log('card is inserted');
        })

        db.transaction(tx => {
            //Contacts--------------
            tx.executeSql(
                'INSERT INTO Contacts (first_name, last_name, email, phone, card) VALUES(?,?,?,?,?)', ['Henry', 'Acourtney', '1@gmail.com', '+62-878-5558-54', '• • •  • • •  • • •  6278']
            )

        })

        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO Contacts (first_name, last_name, email, phone, card) VALUES(?,?,?,?,?)', ['Andrew', 'Jones', '2@gmail.com', '+62-838-5552-72', '• • •  • • •  • • •  5843']
            )

        })
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO Contacts (first_name, last_name, email, phone, card) VALUES(?,?,?,?,?)', ['Annete', 'McKinney', '3@gmail.com', '+62-878-5551-31', '• • •  • • •  • • •  6453']
            )
        })
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO Contacts (first_name, last_name, email, phone, card) VALUES(?,?,?,?,?)', ['Buverick', 'Hawkins', '4@gmail.com', '+62-852-5558-77', '• • •  • • •  • • •  7856']
            )
        })
    }


    render() {


        return (
            <View>
                {console.log('Data is created')}
            </View>
        );
    }
}
