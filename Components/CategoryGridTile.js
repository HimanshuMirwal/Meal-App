import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, Platform} from "react-native";
import Color from "../Constants/Color";

const CategoryGridTile = props =>{
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === "android" && Platform.Version >=21){
     TouchableComponent = TouchableNativeFeedback;
    }
    return(
        <View style={styles.girdItem}>
        <TouchableComponent style={{flex:1}} onPress={() => {
            props.onSelect()
        }}>
            <View style={{...styles.container,...{backgroundColor:props.Color}}}>
                <Text style={styles.textStyle} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableComponent>
        </View>
    )
}

const styles= StyleSheet.create({
    girdItem:{
        flex:1,
        margin: 15,
        height: 150,
        borderRadius:10,
        // overflow:"hidden"
    },
    container:{
        flex:1,
        borderRadius:10,
        shadowColor:Color.black,
        shadowOpacity:0.26,
        shadowOffset:{ width:0, height:2},
        shadowRadius:10,
        elevation:3,
        padding:15,
        justifyContent:"flex-end",
        alignItems:"flex-end",
    },
    textStyle:{
        fontSize: 22,
        color:Color.black,
        fontFamily:"OpenSansBold",
        textAlign:"right"
    }
});

export default CategoryGridTile;