import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import MealDetail from "../Components/MealDetail";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {toggleFavorite} from "../store/action/meals"

const MealDetailScreen = props => {
    // console.log(props.navigation.getParam("MealDetailId"))
    const AvailableMeals = useSelector(state=>state.meals.Meals);
    const MEALID = props.navigation.getParam("MealDetailId");
    const DisplayedMeal =  AvailableMeals.find(meal => meal.id === MEALID);
    const CurrentMealIsFav = useSelector(state=>state.meals.FavoriteMeals.some(val=>val.id === MEALID));
    const dispatch= useDispatch();
     
    const TogglerFavoriteHandler= useCallback(()=>{
        dispatch(toggleFavorite(MEALID))
    },[dispatch,MEALID])

    useEffect(()=>{
       props.navigation.setParams({toggleFav:TogglerFavoriteHandler});
    },[TogglerFavoriteHandler])
    
    useEffect(()=>{
        props.navigation.setParams({isFav:CurrentMealIsFav});
    },[CurrentMealIsFav])
    return (
        <ScrollView style={styles.Screen}>
            <View style={styles.SecondContainer}>
                <MealDetail
                    title={DisplayedMeal.title}
                    affordability={DisplayedMeal.affordability}
                    complexity={DisplayedMeal.complexity}
                    duration={DisplayedMeal.duration}
                    ingredients={DisplayedMeal.ingredients}
                    isGlutenFree={DisplayedMeal.isGlutenFree}
                    isLactoseFree={DisplayedMeal.isLactoseFree}
                    isVegan={DisplayedMeal.isVegan}
                    isVegetarian={DisplayedMeal.isVegetarian}
                    steps={DisplayedMeal.steps}
                    image={DisplayedMeal.imageUrl}
                />
            </View>
        </ScrollView>
    )
}

MealDetailScreen["navigationOptions"] = (navigationData) => {
    const MEALID = navigationData.navigation.getParam("MealTitle");
    const ToggleFunction=navigationData.navigation.getParam("toggleFav")
    const isFav = navigationData.navigation.getParam("isFav");
    // const DisplayedMeal = MEALS.find(meal => meal.id === MEALID);
    return {
        headerTitle: MEALID,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title={isFav?"favorite":"favorite-outline"} iconName={isFav?"favorite":"favorite-outline"}
                onPress={ToggleFunction}
            />
        </HeaderButtons>

    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    SecondContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10
    }
});

export default MealDetailScreen;