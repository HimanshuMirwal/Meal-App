import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from "expo-font"
import MealsNavigation from "./navigation/MealNavigator";
import {enableScreens} from "react-native-screens";
import { LogBox } from 'react-native';
import  {createStore, combineReducers} from "redux";
import MealsReducers from "./store/reducer/meals";
import {Provider} from "react-redux";
LogBox.ignoreAllLogs()

// Combine Reducers is used to merge multiple reducers.
const CombineReducers = combineReducers({
  meals:MealsReducers
});

const store = createStore(CombineReducers);

enableScreens();
export default function App() {
   const [loaded] = useFonts({
    OpenSansBold : require('./assets/fonts/Cairo-Bold.ttf'),
    OpenSansRegular : require('./assets/fonts/Cairo-Regular.ttf'),
   });
   
   if (!loaded) {
     return <AppLoading/>;
   }
  else{
    // Provider gives us the states of reducer.
    return   <Provider store={store}><MealsNavigation /></Provider>
  }
}




