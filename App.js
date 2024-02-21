import React from "react";
import Splash from "./src/screens/auth/Splash"
import SignUp from "./src/screens/auth/SignUp";
import SignIn from "./src/screens/auth/SignIn";
import Home from './src/screens/app/Home';
import Favorites from './src/screens/app/Favorites';
import Profile from './src/screens/app/Logout';
import Cart from "./src/screens/app/Cart";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Tabs = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let icon;
          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/tabs/home_active.png')
              : require('./src/assets/tabs/home.png');
          } else if (route.name === 'Profile') {
            icon = focused
              ? require('./src/assets/tabs/profile_active.png')
              : require('./src/assets/tabs/profile.png');
          } else if (route.name === 'Favorites') {
            icon = focused
              ? require('./src/assets/tabs/bookmark_active.png')
              : require('./src/assets/tabs/bookmark.png');
          } else if (route.name === 'Cart') {
            icon = focused
              ? require('./src/assets/tabs/giohang.png')
              : require('./src/assets/tabs/khunggiohang.png');
          } 
  
          return <Image style={{width: 24, height: 24}} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: '#DADADA'},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
      
    </Tab.Navigator>
  );
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name ="Home" component={Splash} />
              <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
              <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
              <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer> 
    );
};
export default App;