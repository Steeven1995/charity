import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from './screens/RegisterScreen';
import ForgetPassScreen from "./screens/ForgetPassScreen"
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import AddScreen from './screens/AddScreen';
import MyDonationScreen from './screens/MyDonationScreen';
import MyProfil from './screens/MyProfilScreen';
import DetailsScreen from "./screens/DetailScreen"


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const App = () => {

  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  const [user, setUser] = React.useState(undefined)
  
  const ckeckUser = async () =>{
    console.log("Hello")
  }

  React.useEffect(()=>{
    ckeckUser();
  },[])

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);



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

  return (
    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ForgetPass" component={ForgetPassScreen} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default App;