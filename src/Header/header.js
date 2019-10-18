import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { headerStyle } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5'
const header = props => {
    return (
        <View style={headerStyle.container}>
            <View style={headerStyle.headerContentStyle}>

                <TouchableOpacity
                    onPress={() => { props.back(!props.backPressed) }}
                >
                    {props.showBackButton &&
                        <Icon
                            name={"arrow-left"}
                            color={"white"}
                            size={30}
                        />
                    }

                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        name={"user-plus"}
                        color={"white"}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default header