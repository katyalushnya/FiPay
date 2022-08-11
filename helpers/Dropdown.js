import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {cards} from "../Datas/cards";

export default function Dropdown() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(['VISA **** ****' + cards[0].card_number.substring(14, 19),
        'VISA **** ****' + cards[1].card_number.substring(14, 19)]);
    const [items, setItems] = useState([
        {
            label: 'VISA **** ****' + cards[0].card_number.substring(14, 19),
            value: 'VISA **** ****' + cards[0].card_number.substring(14, 19)
        },
        {
            label: 'VISA **** ****' + cards[1].card_number.substring(14, 19),
            value: 'VISA **** ****' + cards[1].card_number.substring(14, 19)
        }
    ]);

    return (
        <View style={{
            alignItems: 'center',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            width: '90%',
            height: 50,
            marginLeft: 20,
            marginTop: 10
        }}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}

                style={{fontFamily: 'SourceSansProSemiBold', fontSize: 16,}}
            />
        </View>
    );
}
