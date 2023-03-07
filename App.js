import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {LinearGradient} from "expo-linear-gradient"
import { GlobalStyles } from "./constants/colors";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
// expo r -c
import { useState, useEffect, useContext } from "react";

import MainScreen from "./screens/MainScreen";
import ManageTasks from "./screens/ManageTasks";
import ReleaseStress from "./screens/ReleaseStress";
import LaunchingScreen from "./screens/LaunchingScreen";
import ModeContextProvider from "./store/ModeContextProvider";
import CustomDrawer from "./components/UI/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";


import Profile from "./screens/Profile";


const BottomTabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerElements = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}  />}
      screenOptions={{
     
        
        drawerInactiveTintColor:"white",
        // drawerInactiveBackgroundColor:"#f1efef",
        drawerActiveTintColor: "#d5b1ff" ,   // active walay ka color 
        drawerStyle: { backgroundColor: "#ffffff" },
        drawerActiveBackgroundColor:"#3f3f3f" ,  // jaisay stack mn content style tha
     
        headerTitle: "Lucrative Plue",
        headerTintColor: GlobalStyles.colors.primary800,
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      }}
    >
      <Drawer.Screen name="Home" component={MainScreen}></Drawer.Screen>
      <Drawer.Screen name="Profile" component={Profile}></Drawer.Screen>
      <Drawer.Screen options={
        {
          sceneContainerStyle:{backgroundColor:"grey"},
          
        }
      } name="ManageTasks" component={ManageTasks}></Drawer.Screen>
    </Drawer.Navigator>
  );
};


export default function App() {
  const [launching, setLaunching] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLaunching(false);
    }, 3000);
    // cleanup function
    return () => clearTimeout(timer);
  }, []);

  if (launching) {
    return <LaunchingScreen />;
  }

  return (
    <ModeContextProvider>
      <View style={styles.container}>
        <StatusBar style="light" />

        <NavigationContainer>
        
          <BottomTabs.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
              tabBarStyle: { backgroundColor: GlobalStyles.colors.primary400 },
              tabBarActiveTintColor: GlobalStyles.colors.accent500,
              
              headerLeft: () => (
                <FontAwesome name="user-circle-o" size={24} color="grey" />
              ),
              headerTitle: "Lucrative Plue",
              
            }}
          >
            <BottomTabs.Screen
              name="Home screen"
              component={DrawerElements}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-sharp" size={size} color={color} />),
                headerShown: false,
                headerTintColor: GlobalStyles.colors.primary800,
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary500,
                },
              }}
            ></BottomTabs.Screen>
            <BottomTabs.Screen
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="happy-outline" size={size} color={color} />),
            }}
              name="Release Stress"
              component={ReleaseStress}
            ></BottomTabs.Screen>
   
          </BottomTabs.Navigator>
        </NavigationContainer>
      </View>
    </ModeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
