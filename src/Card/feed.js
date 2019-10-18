import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const feed = props => {
    return (
        <View style={styles.container}>
            <View style={styles.itemStyle}>
                <Icon
                    style={styles.icon}
                    name={"user-alt"}
                    size={20} />
                <Text>40 people</Text>
            </View>
            <View style={styles.itemStyle}>
                <Icon
                    style={styles.icon}
                    name={"map-marker-alt"}
                    size={20} />
                <Text>Amman</Text>
            </View>
            <View style={styles.itemStyle}>
                <Icon
                    style={styles.icon}
                    name={"calendar-week"}
                    size={20} />
                <Text>14-10-2019</Text>
            </View>
            <View style={styles.itemStyle}>
                <Icon
                    style={styles.icon}
                    name={"cloud"}
                    size={20} />
                <Text>Sunny</Text>
            </View>

            <View>
                <Text style={styles.bigText}>Description</Text>
                <Text numberOfLines={3}>{props.body}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
    },
    bigText: {
        fontSize: 18
    },
    container: {
        height: "70%",
        // borderWidth: 1,
        alignSelf: "center",
        width: "90%",
    },
    itemStyle: {
        flexDirection: "row",
        margin: 10,
        // borderWidth: 1,
        width: "30%",
        // justifyContent: "space-between"
    }
})

export default feed;