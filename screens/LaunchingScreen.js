import React from "react";
import { Text, View, StyleSheet, Modal } from "react-native";
import { GlobalStyles } from "../constants/colors";

const LaunchingScreen =(props)=>{

    return (
        <Modal style={styles.modal} animationType={"fade"}>
            <View style={styles.screen}  >
            <Text>Logo here</Text>
        </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    screen: {
        color:"black",
        flex: 1,
        justifyContent: "center",
        backgroundColor:GlobalStyles.colors.primary500,
        alignItems:"center"
    }
    , modal: {
        flex:1
    }



})

export default LaunchingScreen;

