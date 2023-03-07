import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";
import { FlatList } from "react-native-gesture-handler";
const TaskList =({TaskList})=>{

    return(
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={TaskList}
                renderItem={(taskitem) =>
                    <TaskItem
                        date={taskitem.item.date}
                        description={taskitem.item.description }
                        time={'6:30 pm'}
                        title={ taskitem.item.title}
                        type={taskitem.item.type} />} >
                
            </FlatList>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: 100
        // justifyContent: "center",
        // alignItems:"center"
    }


})

export default TaskList;