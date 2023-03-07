import React from "react";
import { Text, View, StyleSheet, Modal } from "react-native";
import { GlobalStyles } from "../constants/colors";
import {LinearGradient} from "expo-linear-gradient"
const LaunchingScreen =(props)=>{

    return (
        
        
        <Modal  style={styles.modal} animationType={"fade"}>
            <LinearGradient
                
                colors={["black", "#313131"]} style={{ flex: 1 }}>
            <View style={styles.screen}  >
                <Text style={{ fontSize :100, color:"white" }}>*</Text>
            <Text style={styles.title}>Lucrative Plus</Text>
                </View>
                </LinearGradient>
        </Modal>
    )

}

const styles = StyleSheet.create({
    screen: {
        color:"black",
        flex: 1,
        justifyContent: "center",
        // backgroundColor:GlobalStyles.colors.primary500,
        alignItems:"center"
    },
    title: {
        color: "wheat",
        fontSize:30
    }
    , modal: {
        flex:1
    }



})

export default LaunchingScreen;

