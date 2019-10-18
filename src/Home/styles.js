import { StyleSheet, Dimensions } from 'react-native';

export const homeStyles = StyleSheet.create({
    container:{
        flex: 1,
    },
    backgroundImageStyle: {
       position: "absolute",
       height: Dimensions.get("window").height,
       width: Dimensions.get("window").width 
    }
})