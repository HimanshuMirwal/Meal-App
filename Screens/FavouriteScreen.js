import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import MealList from "../Components/MealList"
import HeaderButton from "../Components/HeaderButton";
import { useSelector } from "react-redux";
import Color from "../Constants/Color";
import { MaterialIcons } from "@expo/vector-icons";

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
            No Favorite Meal Found.
            </Text>
            </View>
        </View>
        </View>
    )
}

const FavouriteScreen = props => {
    const FavoriteMeals = useSelector(state => state.meals.FavoriteMeals)
    // console.log(FavoriteMeals);
    // console.log("fav loaded")
    // const DisplayedMeal = MEALS.filter(Meal=> Meal.id === "m1" || Meal.id === "m2")
    console.log("Favorite meal lenght" + FavoriteMeals.length);
    if (FavoriteMeals.length === 0 || !FavoriteMeals) {
        return <NoFoodFound />
    }
    return (
        <MealList listData={FavoriteMeals} navigation={props.navigation} />
    )
}


FavouriteScreen["navigationOptions"] = (navData) => {
    return {
        headerTitle: "Your favorites",
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="menu" onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>
    }
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

export default FavouriteScreen;