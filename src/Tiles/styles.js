import { StyleSheet } from 'react-native';

export const bodyStyle = StyleSheet.create({
    textInputStyle: {
        width: "90%",
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    listStyle:{
        // borderWidth: 1,
        width: "90%",
    },
    singleTile: {
        borderWidth: 1,
        borderColor: "white",
        margin: 10,
        height: 60,
        borderRadius: 5,
        justifyContent: "center"
    },
    tileTextStyle:{
        color: "white",
        fontSize: 18,
        textAlign: "center"
    },
    loadingStyles: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})