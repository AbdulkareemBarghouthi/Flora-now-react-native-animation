import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { bodyStyle } from './styles';

const singleTile = props =>{
    return(
        <TouchableOpacity 
        onPress={props.onPress}
        style={bodyStyle.singleTile}>
            <Text style={bodyStyle.tileTextStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default singleTile;