import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoryScreen from "../Screens/CategoryScreen";
import CategoryMealScreen from "../Screens/CategoryMealScreen";
import MealDetailScreen from "../Screens/MealDetailScreen";
import FavouriteScreen from "../Screens/FavouriteScreen";
import Color from "../Constants/Color"
import { Platform, Text } from "react-native";
import {Ionicons, MaterialIcons } from "@expo/vector-icons";
import {createDrawerNavigator} from "react-navigation-drawer";
import  FilterScreen from "../Screens/FilterScreen";

const DefaultStackNAvOptions = {
    headerStyle: {
        backgroundColor: Platform.OS=== "android"?Color.Primary:Color.white,
      },
      headerTitleStyle:{
        fontFamily:"OpenSansBold"
      },
      headerBackTitleStyle:{
        fontFamily:"OpenSansBold"
      },
      headerTintColor: Platform.OS=== "android"?Color.white:Color.whiteColor.Primary,
    //   title:"screen" default title
}

const MealsNavigator=createStackNavigator({
    Categories: {screen: CategoryScreen},
    "Category Meals": {screen: CategoryMealScreen},
    "Meal Detail":{screen: MealDetailScreen}
    },
    {
        // mode:"modal", see on ios
        // initialRouteName:"", id you want to start from another route than add name to it.
        defaultNavigationOptions:DefaultStackNAvOptions,
    });


   const FavNavigator =  createStackNavigator({
        Favourites : FavouriteScreen,
        "Meal Detail": MealDetailScreen,
    },{
        // mode:"modal", see on ios
        // initialRouteName:"", id you want to start from another route than add name to it.
        defaultNavigationOptions:DefaultStackNAvOptions,
    })

const tabScreenConfig = {
    Meals:{screen:MealsNavigator,navigationOptions:{
        tabBarLabel:"Meals!",
        tabBarIcon:(tabInfo)=>{ 
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor:Color.Secondary,
        tabBarLabel:Platform.OS==="android"?<Text style={{fontFamily:"OpenSansBold"}}>Meals</Text>:"Meals!"
    }},
    Favourites:{screen:FavNavigator,navigationOptions:{
        tabBarLabel:"Favourites!",
        tabBarIcon:(tabInfo)=>{
            return <MaterialIcons  name="favorite" size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor:Color.Secondary,
        tabBarLabel:Platform.OS==="android"?<Text style={{fontFamily:"OpenSansBold"}}>Favorites!</Text>:"Favorites!"
    }
    }
}
const ButtomTabNavigator =Platform.OS==="android"?createMaterialBottomTabNavigator(tabScreenConfig,{
    activeTintColor:Color.third,
    inactiveTintColor:Color.Secondary,
    shifting:true,

    // USe below code in case when you don't wan to use shifting.
    // barStyle:{
    //     backgroundColor:Color.Secondary
    // }
}) : createBottomTabNavigator(tabScreenConfig,{
    tabBarOptions:{
        activeBackgroundColor:Color.Secondary,
        inactiveBackgroundColor:Color.third,
        activeTintColor:Color.third,
        inactiveTintColor:Color.Secondary,
        labelStyle:{
            fontFamily:"OpenSansBold"
        }
    }
});

const FilterScreenStack  = createStackNavigator({
    Filter:{screen:FilterScreen},
},{

    // One option to change drawer menu item text.
    // navigationOptions:{
    //   drawerLabel:"Filter!!!!"  
    // },
    defaultNavigationOptions:DefaultStackNAvOptions,
})

const MainNavigator = createDrawerNavigator({
    MealsFavs : {screen:ButtomTabNavigator, navigationOptions:{
        drawerLabel:"Meals"
    }},
    Filters : {screen:FilterScreenStack, navigationOptions:{
        drawerLabel:"Filter"
    }}
},{
    contentOptions:{
        activeTintColor:Color.Primary,
        inactiveTintColor:Color.black,
        labelStyle:{
            fontFamily:"OpenSansBold",
            fontWeight: undefined,
        },
        
    }
})
export default createAppContainer(MainNavigator);