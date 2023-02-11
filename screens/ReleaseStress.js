import React from "react";
import { motivational } from "../assets/data/motivation";
import { Text, View, StyleSheet, Button, Image, Pressable, useEffect } from "react-native";

const ReleaseStress = (props) => {
  let quote = "";
  let teddy = (
    <Image
      source={require("../assets/75767049f3f67d354857d71172e50741.png")}
    ></Image>
  );

  const index = Math.floor(Math.random() * 101);
  const quoteLoadHandler = () => {
      quote = <Text>{motivational[index]}</Text>;
      teddy=  <Image
      source={require("../assets/icon.png")}  /// injured teddy 
    ></Image>
    };
    
    useEffect(() => {
   
        setTimeout(() => {
                teddy= (
                    <Image
                      source={require("../assets/75767049f3f67d354857d71172e50741.png")}
                    ></Image>  // again sehat mand 
                  );
                
         
          }, 3000);
        
      }, [teddy])
    

  return (
    <View style={styles.screen}>
      {quote}
      <View>
        <Pressable onPress={quoteLoadHandler}>{teddy}</Pressable>
        <Text>Punch the teddy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReleaseStress;
