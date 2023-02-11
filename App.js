import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { GlobalStyles } from "./constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from '@expo/vector-icons';
import { useState ,useEffect} from "react";

import MainScreen from "./screens/MainScreen";
import ManageTasks from "./screens/ManageTasks";
import ReleaseStress from "./screens/ReleaseStress";
import LaunchingScreen from "./screens/LaunchingScreen";


// import { Ionicons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  const [launching, setLaunching] = useState(true)
  
  useEffect(() => {
   
    setTimeout(() => {
        setLaunching(false)
     
      }, 3000);
    
  }, [])
  
  if (launching) {
    return <LaunchingScreen/>
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerLeft: () => (
        
        <FontAwesome name="user-circle-o" size={24} color="grey" />
      ), title:"Lucrative Plue" }}>
          <Stack.Screen
             name="MainScreen"
             component={MainScreen}
            options={{
              
              headerTintColor: GlobalStyles.colors.primary800, headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              
              
             
            }}
          ></Stack.Screen>
          <Stack.Screen
             name="Add new task"
             component={ManageTasks}
            // options={{ headerShown: false }}
          >
            
             </Stack.Screen>
          <Stack.Screen
             name="Release Stress"
             component={ReleaseStress}
            //  options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
