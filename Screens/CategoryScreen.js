import React from "react";
import {StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";
import { HeaderButtons,Item } from "react-navigation-header-buttons";
import HeaderButton from "../Components/HeaderButton";
const CategoryScreen = props => {
    const RenderGridItem = (data) => {
        return (
            <CategoryGridTile title = {data.item.title} Color={data.item.color} onSelect={()=>{
                props.navigation.navigate({
                routeName:"Category Meals",
                params:{
                    CategoryId:data.item.id
                }
                });
            }}/>
        )
    }
    return (
        // <View>
        // <Text>This is category screen</Text>
        //     <Button title="Go to Meals!" onPress={()=>{
        //         props.navigation.navigate({routeName: "CategoryMeals"})
        //     }}/>
        // </View>
        <FlatList keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={RenderGridItem} numColumns={2} />
    )
}


// Refresh to see effect.
CategoryScreen["navigationOptions"] = (navData) => {
    return {
      title: "Meals Category",
      headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Menu"  iconName="menu" onPress={()=>{
              navData.navigation.toggleDrawer()
          }} />
      </HeaderButtons>
    };
  };

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default CategoryScreen;