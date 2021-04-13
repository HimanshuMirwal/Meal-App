import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import {useSelector} from "react-redux";
import MealList from "../Components/MealList";
import { StyleSheet, Text, View } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

const NoFoodFound = props =>{
    return (<View style={styles.Screen}>
    <View style={styles.NoFoodFoundContainer}>
            <View style={styles.NoFoodLogoContainer}>
                <Text>
                <MaterialIcons name="no-meals" size={50} color={Color.Secondary} />
                </Text>
            </View>
            <View style={styles.NoFoodTextContainer}>
            <Text style={styles.NoFoodText}>
            No Meal Found, Check Your Filter.
            </Text>
            </View>
        </View>
        </View>
    )
}

const CategoryMealScreen = props => {
    const AvailableMeals = useSelector(state=>state.meals.FilteredMeals)
    const catID = props.navigation.getParam("CategoryId");
    const SelectedData = CATEGORIES.find(cat => cat.id === catID);
    const DisplayedMeal = AvailableMeals.filter((meal) => meal.categoryIds.indexOf(catID) >= 0);
    // console.log(DisplayedMeal)
    if(DisplayedMeal.length ===0 ){
        return <NoFoodFound />
    }
    return (
       <MealList listData = {DisplayedMeal} navigation={props.navigation} />
    )
}

CategoryMealScreen["navigationOptions"] = navigationData => {
    const catID = navigationData.navigation.getParam("CategoryId");
    const SelectedData = CATEGORIES.find(cat => cat.id === catID);
    return {
        title: SelectedData.title,
    };
}



const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    NoFoodFoundContainer:{ flex: 1, alignItems: "center", justifyContent: "center" },
    NoFoodLogoContainer:{margin:10, borderWidth:2, borderRadius:100, padding:20, borderColor:Color.fourth},
    NoFoodTextContainer:{width:"80%",borderBottomColor:Color.Secondary,borderBottomWidth:2},
    NoFoodText:{ fontFamily: "OpenSansBold", fontSize: 20, color: Color.fourth }
});


export default CategoryMealScreen;



{/* <Button title="Go back!" onPress={()=>{
                props.navigation.goBack()

                // Works only on stack screen
                // props.navigation.pop();  
            }}/> */}