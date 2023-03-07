import React from "react";
import {Text , View , StyleSheet,Image} from "react-native";
const Profile =(props)=>{

    return(
        <View style={styles.screen}>
            <Image style={[styles.image]}
                
          source={require("../assets/paan.png")}
        ></Image>
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

export default Profile;