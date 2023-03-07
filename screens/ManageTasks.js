import React from "react";
import { useEffect } from "react";

import { View, StyleSheet, Modal, Text } from "react-native";

import * as Notifications from "expo-notifications";
import { useState } from "react";
// import TaskForm from "../components/TaskForm";
import DailyForm from "../components/TaskForms/DailyForm";
// import { Button } from "react-native-paper";
import { Card, Title } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import TaskButton from "../components/TaskButton";

Notifications.setNotificationHandler({
  // step 6 local + push
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const ManageTasks = (props) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    //  step 7 add this effect  local+ push ( done with local )
    // * Ye wala function jb trigger ho ga jb notification receiceive ho jaa a gi
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification is received successfully");
        console.log(notification.request.content.data.userName); // consoling notifi obj
      }
    );

    // Ye wala function jb trigger ho ga jb notification pr user tap kry ga
    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("Notification is response received successfully");
        // aur yahan hm apni logic likh skty
        console.log(response.notification.request.content.data.userName);
      }
    );

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  const sheduleNotificationsHandler = (currentDate) => {
    console.log("hello"); // yahan pr dosra content

    const taskObject = {
      // ye wala object baad mn shedule notification walay func ko milay ga
      id: "e2",
      title: "wake up",
      description: "Empty",
      sheduledTime: 30,
      type: "Daily",
      days: "Empty",
      date: "Empty",
    };
    const user = "Boss";
    const trigger = new Date(Date.now() + 1 * 60 * 1000);
    trigger.setMinutes(0);
    trigger.setSeconds(0);
    if (true) {
      const identifer = Notifications.scheduleNotificationAsync({
        content: {
          // sound: "./assets/notifiSound.wav", // .wav   isko baad mn daikhta
          // badge:"logoo.png",
          title: currentDate.title,
          body: `${user}  ${currentDate.description} I am proud of you`,
          data: { userName: "Ali" },
        },
        
        trigger: {
          // date: new Date(currentDate.shedule),

          //   getTime:
          //   date:new Date(Date.now()+ 60 * 60 * 1000),
          seconds: 2,

          //   trigger,
          //   repeats: true
          //   date: "",
          //   day:["monday", '']
        },
        
      });
      //  Notifications.cancelScheduledNotificationAsync(identifer)
      console.log(identifer + "mn identifer hn")
    }
  };

  const DailyFormShowHandler = () => {
    setShowModal(true);
  };
  const onCancelTasklHandler = () => {
    setShowModal(false);
  };
  let modal;

  if (showModal) {
    modal = (
      <Modal animationType="slide" style={{ flex: 1 }}>
        <View style={{ backgroundColor: "white", flex: 1 }}>
          <DailyForm onCancel={onCancelTasklHandler} onSubmit={sheduleNotificationsHandler}></DailyForm>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.screen}>
      {modal}
      <View style={{ alignItems: "center", margin: 20 }}>
        <Title style={{ fontWeight: "bold" }}>Task Type</Title>
      </View>
      <Card style={{ backgroundColor: "white" }}>
        {/* <Card.Title title="Which Type of task you wanna add" */}
        <Card.Title
          title="Select the type of the task"
          // subtitle="Which Type of task you wanna add"
          left={() => {
            return <FontAwesome5 name="tasks" size={24} color="black" />;
          }}
        />

        <Card.Content>
          {/* <Button  onPress={()=>{}}> */}

          <TaskButton
            onPress={DailyFormShowHandler}
            title={"Daily"}
            body={"Performed on daily basis"}
          />

          <TaskButton
            title={"Some Days"}
            body={"Performed on somedays of the week"}
          />
          <TaskButton title={"One Time"} body={"Performed only once"} />
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
        <Card.Actions>
          {/* <Button>Cancel</Button>
      <Button>Ok</Button> */}
        </Card.Actions>
      </Card>

      {/* <TaskForm
        // submit hony pr wo object uth kr aa a ga
        onSubmit={sheduleNotificationsHandler}
      /> */}
      {/* <Text>Hello task add kr </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
    // alignItems: "center",
  },
});

export default ManageTasks;
