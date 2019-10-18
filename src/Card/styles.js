import { StyleSheet, Dimensions } from 'react-native';

export const cardStyle = StyleSheet.create({
    container:{
       flex: 1,
    //    borderWidth: 1,
    //    borderColor: "white",
       width: "90%", 
    },
    cardStyle:{
        height: Dimensions.get("window").height/2,
        backgroundColor: "white",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    headerLine: {
        alignItems: "center",
        height: "8%",
        justifyContent: "center"
    },
    lineStyle:{
        height: 10,
        width: 100,
        backgroundColor: "rgba(0,0,0,0.1)",
        borderRadius: 80
    },
    navigatorStyle:{
        // borderWidth: 1,
        height: "20%",
        width: "90%",
        alignSelf: "center",
        flexDirection: "row"
    },
    navigatorItem: {
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        width: "33%",
    },
    navigatorTextStyle:{
        fontSize: 17,
        fontWeight: "bold",
        color: "rgba(0,0,0,0.3)"        
    },
    titleStyle:{
        color: "white",
        fontSize: 40,
    },
    titleHolder: {
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
        height: "30%",
        // borderColor: "white",
        position: "absolute",
        width: "100%",
    }
})