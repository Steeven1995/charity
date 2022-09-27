import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddScreen from '../screens/AddScreen';
import MyDonationScreen from '../screens/MyDonationScreen';
import MyProfil from '../screens/MyProfilScreen';
import DetailsScreen from "../screens/DetailScreen"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarStyle : {
        backgroundColor : "#0E4944",
        borderTopColor : "#0E4944",
        height : 70
      }
    }} >
      <Tab.Screen 
        options={{
          tabBarIcon : ({focused, color, size})=> <AntDesign name="appstore-o" size={24} color={focused? "white" :color}/>,
          tabBarShowLabel : false
        }} 
        name="Home"
        component={HomeScreen} />
      <Tab.Screen 
         options={{
          tabBarIcon : ({focused, color, size})=> <AntDesign name="search1" size={24} color={focused? "white" :color}/>,
          tabBarShowLabel : false
        }} 
        name="Search"
        component={SearchScreen} />
        <Tab.Screen 
         options={{
          tabBarIcon : ({focused, color, size})=> <Ionicons name="md-add-circle-sharp" size={50} color={"#9BD35A"}/>,
          tabBarShowLabel : false
        }} 
        name="Add"
        component={AddScreen} />
        <Tab.Screen 
         options={{
          tabBarIcon : ({focused, color, size})=> <Ionicons name="md-help-buoy-outline" size={24} color={focused? "white" :color}/>,
          tabBarShowLabel : false
        }} 
        name="Mydonation"
        component={MyDonationScreen} />
        <Tab.Screen 
         options={{
          tabBarIcon : ({focused, color, size})=> <FontAwesome name="user-o" size={24} color={focused? "white" :color}/>,
          tabBarShowLabel : false
        }} 
        name="MyProfil"
        component={MyProfil} />
    </Tab.Navigator>
  );

  const HomeStack = () => (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>
  );


  export default function UserStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }