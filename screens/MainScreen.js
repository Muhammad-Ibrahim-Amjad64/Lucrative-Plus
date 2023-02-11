import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
useNavigation;
import { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
// import {Ionicons} from ""
const DUMMY_Goals = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
];

const MainScreen = (props) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerRight:()=><Button title="hel"></Button>
      // <Button title="press"></Button>
      // headerRight: () => <Button title="hel"></Button>
      headerRight: () => (
        <Ionicons name="add" size={30} color={"white"} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.info}>
        <Text style={{ color: "black" }}>Home</Text>
      </View>

      <View>
        <Text>list of goals </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    alignItems: "center",
  },
  info: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MainScreen;
