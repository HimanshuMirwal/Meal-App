import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import HeaderButton from "../Components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Switch } from "react-native-gesture-handler";
import { useState } from "react";
import Colors from "../Constants/Color";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {SetFilters} from "../store/action/meals";
const FilterSwitch = props => {
    return (
        <View style={styles.FilterContainer}>
            <Text style={styles.Title}>
                {props.label}
                </Text>
            <Switch
                trackColor={
                    { true: Colors.Secondary, false: Colors.gray }
                }
                thumbColor={Platform.OS === "android" ? Colors.Secondary : ""}
                value={props.state}
                onValueChange={props.onChange} />
        </View>
    )
}
const FilterScreen = props => {
    const {navigation} = props;
    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isLactosFree, setisLactosFree] = useState(false);
    const [isVegan, setisVegan] = useState(false);
    const [isVegetarian, setisVegetarian] = useState(false);


    const Dispatch = useDispatch();
    // UseCallback is only invoked when its dependaencied changes, it caches the function and only create when its dependency changes. is other condition apply redender the component then this will not re created.
    const SaveFilters=useCallback(()=>{
        const AppliedFilters = {
            GlutenFree:isGlutenFree,
            LactosFree:isLactosFree,
            Vegan:isVegan,
            Vegetarian:isVegetarian
        }
        console.log(AppliedFilters)
        Dispatch(SetFilters(AppliedFilters));
    },[isGlutenFree, isLactosFree, isVegan, isVegetarian, Dispatch])
    useEffect(()=>{
       props.navigation.setParams({save:SaveFilters})
    },[SaveFilters]);
    return (
        <View style={styles.Scree}>
            <View style={styles.FilterHeadingContainer}>
                <Text style={styles.TitleHeading}>Apply Filter to your Food</Text>
            </View>
            <FilterSwitch label={"Gluten Free"} state={isGlutenFree} onChange={nextValue=>setGlutenFree(nextValue)}/>
            <FilterSwitch label={"Lactos Free"} state={isLactosFree} onChange={nextValue=>setisLactosFree(nextValue)}/>
            <FilterSwitch label={"Vegan"} state={isVegan} onChange={nextValue=>setisVegan(nextValue)}/>
            <FilterSwitch label={"Vegetarian"} state={isVegetarian} onChange={nextValue=>setisVegetarian(nextValue)}/>
        </View>
    )
}


FilterScreen["navigationOptions"] = (navData) => {
    return {
        headerTitle: "Filter Meals",
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="menu" onPress={() => {
                navData.navigation.toggleDrawer()
            }} />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="save" iconName="save" onPress={() => {
            navData.navigation.getParam("save")()
        }} />
    </HeaderButtons>
    }
}
const styles = StyleSheet.create({
    Scree: {
        flex: 1,
        alignItems: "center"
    },
    FilterHeadingContainer: {
        borderBottomColor:Platform.OS==="android"?Colors.Secondary:"",
        borderBottomWidth: 2,
        width: "80%"
    },
    TitleHeading: {
        fontFamily: "OpenSansBold",
        fontSize: 20,
        textAlign: "center",
        margin: 20,
        color: Colors.Secondary
    },
    Title: {
        fontFamily: "OpenSansBold",
        fontSize: 15,
        textAlign: "center",
        margin: 20,
        color: Colors.fourth
    }
    ,
    FilterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%"
    }
});

export default FilterScreen;