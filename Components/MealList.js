import React from "react";
import {FlatList,StyleSheet, View} from "react-native";
import { useSelector } from "react-redux";
import MealItem from "../Components/MealItem";

const MealList = props =>{
    const FavMealIsList = useSelector(state=>state.meals.FavoriteMeals);

    const renderItemCmp = (data) => {
        const isFavData = FavMealIsList.some(meal => meal.id === data.item.id);
        return (
            <MealItem
                image={data.item.imageUrl} 
                title={data.item.title} 
                affordability={data.item.affordability} 
                complexity={data.item.complexity} 
                duration={data.item.duration} 
                selectMeal={()=>{
                props.navigation.navigate({
                routeName:"Meal Detail",
                params:{
                    MealDetailId:data.item.id,
                    MealTitle:data.item.title,
                    isFav:isFavData
                }
                });
            }} />
        )
    }
    return (
        <View style={styles.list}>
        <FlatList style={{ width: "100%", paddingHorizontal: "5%" }} keyExtractor={(item, index) => item.id} data={props.listData} renderItem={renderItemCmp} />
    </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default MealList;