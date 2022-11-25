import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import  HomeScreen from "./screens/HomeScreen";
import DateFormScreen from "./screens/DateFormScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen  from "./screens/MainScreen";
import ClientScreen from "./screens/ClientScreen";
import ClientFormScreen from "./screens/ClientFormScreen";



const Stack = createStackNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{

      }}/>
        <Stack.Screen name="Home" component={HomeScreen}
          options={({navigation}) => ({
            title:'Red Doctor',
            headerStyle: {backgroundColor: '#222f3e'}, 
            headerTitleStyle: {color: 'white'},
            headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("DateFormScreen")}>
              <Text style={{color: 'white', marginRight: 20, fontSize: 20}}>New</Text>
            </TouchableOpacity>
          ),
          })}/>
        <Stack.Screen name="DateFormScreen" component={DateFormScreen} options={{
          title: 'Create product',
          headerStyle: {backgroundColor: '#222f3e'},
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
        }} />   
        <Stack.Screen name="ClientFormScreen" component={ClientFormScreen} options={{
          title: 'Create a Client',
          headerStyle: {backgroundColor: '#222f3e'},
          headerTitleStyle: {color: 'white'},
          headerTintColor: 'white',
        }} />   
        <Stack.Screen name="MainScreen" component={MainScreen} options={{
          title: 'Red tiendita',
          headerStyle: {backgroundColor: '#222f3e'}, 
          headerTitleStyle: {color: 'white'},
          headerTintColor: '#222f3e'
        }}/>
        <Stack.Screen name="ClientScreen" component={ClientScreen}
          options={({navigation}) => ({
            title:'Red Tiendita',
            headerStyle: {backgroundColor: '#222f3e'}, 
            headerTitleStyle: {color: 'white'},
            headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("ClientFormScreen")}>
              <Text style={{color: 'white', marginRight: 20, fontSize: 20}}>New</Text>
            </TouchableOpacity>
          ),
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App