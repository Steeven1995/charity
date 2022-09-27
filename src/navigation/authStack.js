import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from '../screens/RegisterScreen';
import ForgetPassScreen from "../screens/ForgetPassScreen"
import OnboardingScreen from "../screens/OnboardingScreen"
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from "../screens/LoadingScreen"

const Stack = createNativeStackNavigator();

export default function AuthStack() {

    const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  
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
                <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
            </Stack.Navigator>
            </NavigationContainer>
        )
    );
}