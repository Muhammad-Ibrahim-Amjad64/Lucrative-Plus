import React from "react";
import { motivational } from "../assets/data/motivation";
import { Text, View, StyleSheet, Button, Image, Pressable, Dimensions } from "react-native";
// import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useEffect, useState } from "react";
import { FontAwesome } from '@expo/vector-icons'; 

const RandomQuoteGenerator = () => {
  
  const randomIndex = Math.floor(Math.random() * motivational.length);
  const randomQuote = motivational[randomIndex];
  console.log(randomQuote.quote);
  return randomQuote
}
const ReleaseStress = (props) => {
  // let quote = <Text style={styles.quote}>{ randomQuote.quote}</Text> ;
  
  const [punched, setPunched] = useState(false)
  const [randomQuote,SetRandomQuote]= useState(RandomQuoteGenerator())
  let teddy 

  
  
  let imageSize=  {
    height: 250,
    width: 250
  }
  const quoteLoadHandler = () => {
    SetRandomQuote(RandomQuoteGenerator())
    imageSize=  {
      height: 200,
      width: 200
    }
    setPunched(true)
  
  };
  
  
  useEffect(() => {

    const timer = setTimeout(() => {
      setPunched(false)
      imageSize=  {
        height: 250,
        width: 250
      }
      
    }, 500);
    // return clearTimeout(timer)
    
  }, [punched])
  
  
  
    if (punched) {
      teddy=  <Image style={[styles.image,imageSize]}
      source={require("../assets/75767049f3f67d354857d71172e50741.png")}  /// injured teddy 
      ></Image>
      
    } else {
      teddy=(
        <Image  style={[styles.image,imageSize]}
          source={require("../assets/paan.png")}
        ></Image>
      );
  }

  
  return (
    <View style={styles.screen}>
      {/* =========================== */}
 
      {/* //--------------------------- */}
      {/* <Text style={{ marginBottom: 10 ,fontSize:50}}>,,</Text> */}
      <View style={styles.quoteContainer}>
        <View style={{ marginBottom: 15 }}><FontAwesome name="quote-left" size={24} color="black" /></View>
        <View style={{height:70,width:"100%"}}>
        <Text>{randomQuote.quote}</Text>
        </View>
        <View style={{alignItems:"flex-end", marginTop:15 }}><FontAwesome name="quote-right" size={24} color="black" /></View>
        <View style={styles.authorContainer}>
      <Text style={styles.author}>~{randomQuote.author}</Text>
        </View>
      </View>
      <View style={styles.teddyContainer}>
          <View style={styles.imageContainer} >
        <Pressable onPress={quoteLoadHandler} style={{flex:1}} >
          {teddy}
        </Pressable>
          </View>
        <Text style={styles.punch}>Punch the teddy</Text>
      </View>
    </View>
  );
};
const deviceWidth = Dimensions.get("window").width



const styles = StyleSheet.create({
  authorContainer: {
    // flex:1,
      //  backgroundColor:"white",
    alignItems: "flex-end",
    // justifyContent:"center",
    marginTop: 20,
    marginHorizontal:5
  },
  author: {
 

   
    fontWeight:"bold"
 },
  quote: {
    marginVertical: 6,
    marginHorizontal:3
  },
  quoteContainer: {
    elevation:4,
    width: 300,
    height: 220,
    // borderRadius: 10,
    padding:10,
    // backgroundColor: "#d8ffff",
    backgroundColor: "#9eecf6",
    // flex: 1
  },
  punch: {fontWeight:"bold", fontSize:20},
  
  teddyContainer: { alignItems: "center", },
  
  imageContainer: {

    backgroundColor:"red",
    // alignItems: "center",
    // justifyContent:"center",
    width: deviceWidth < 380 ? 200 : 250,
    height: deviceWidth < 380 ? 200 : 250,
    // borderRadius: deviceWidth < 380 ? 50 : 25,
    // borderWidth: 3,
    // borderColor: "black",
    overflow: 'hidden',
    margin: 36,
  },
  screen: {
    // marginVertical:50,
    flex: 1,
    padding:10,
    justifyContent: "center",
    alignItems: "center",
    // alignContent:"center"
  },
  image: {
    // backgroundColor:"black",
    // height: 250,
    // width: 250,
    height: "100%",
    width: "100%",
    
  }
});

export default ReleaseStress;
