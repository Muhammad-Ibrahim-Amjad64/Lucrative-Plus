import React from "react";
import {Text , View , StyleSheet} from "react-native";
const ManageTasks =(props)=>{

    return(
        <View style={styles.screen}>
            <Text>Hello</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }


})

export default ManageTasks;