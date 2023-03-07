import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
useNavigation;
import { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Octicons } from "@expo/vector-icons";
import modeContext from "../store/mode-Context";
import { IconButton } from "react-native-paper";

import TaskList from "../components/TaskList";

// import {Ionicons} from ""
const DUMMY_Task = [
  {
    id: "e1",
    title: "Gym",
    description: "Warzish krni ha ",
    sheduledTime: 30,
    type: "oneTime",
    days:'Empty',
    date: new Date("2022-02-18").toLocaleDateString(),
  },

];

const MainScreen = (props) => {
  const ctx = useContext(modeContext);
  let icon;

  const modeChangeHandler = () => {
    ctx.changeMode();
  };
  if (ctx.mode) {
    icon = (
      <Octicons
        onPress={modeChangeHandler}
        name="moon"
        size={25}
        color="white"
      />
    );
  } else {
    icon = (
      <Octicons
        onPress={modeChangeHandler}
        name="sun"
        size={25}
        color="white"
      />
    );
  }

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => icon,

      sceneContainerStyle: { backgroundColor: ctx.mode ? "white" : GlobalStyles.colors.gray700 },
    });
  }, [navigation, ctx]);

  const backgroundColor = {
    backgroundColor: ctx.mode ? GlobalStyles.colors.primary50 : "cyan",
  };
  return (
    <View style={styles.screen}>
    

      <View>
          <TaskList TaskList={DUMMY_Task} ></TaskList>
        <View style={styles.addNewTask}>
         
          <IconButton
    icon="plus"
    iconColor={"#ffffff"}
    containerColor={"#24003d"}
    size={30}
    onPress={() => {
      navigation.navigate("ManageTasks");
    }}
  />
          
        </View>
    
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    // fontSize:40
  },
  addNewTask: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderBottomWidth: 2,
    // borderBottomColor: "grey",
    marginBottom: 15,
    backgroundColor:"#f6efff"
    
  },
  screen: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    alignItems: "center",
  },
  info: {
    padding: 8,
    // backgroundColor:  GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MainScreen;
