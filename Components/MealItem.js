import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, View, Platform, ImageBackground} from "react-native";
import Color from "../Constants/Color";

const MealItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.MealItems}>
            <TouchableCmp onPress={() => props.selectMeal()}>
                <View>
                    <View style={{...styles.RowStyles,...styles.MealHeader}}>
                        <ImageBackground source={{uri:props.image}} style={styles.BGImage}>
                        <View style={styles.titleContainer}>
                        <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
                        </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.RowStyles,...styles.MealDetails}}>
                        <Text style={styles.SubText}>{props.duration+" min"}</Text>
                        <Text style={styles.SubText}>{props.complexity.toUpperCase()}</Text>
                        <Text style={styles.SubText}>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableCmp>
        </View>

    )
}
const styles = StyleSheet.create({
    MealItems:{
        height:290,
        width:"100%",
        backgroundColor:Color.third,
        marginVertical:"3%",
        borderRadius:10,
        overflow:"hidden",
        shadowColor:Color.black,
        shadowRadius:10,
        elevation:3,
        shadowOffset:{height:2, width:0},
        shadowOpacity:0.6
    },
    RowStyles:{
        flexDirection:"row" 
    },
    MealHeader:{
        height:"85%"
    },
    MealDetails:{
        paddingHorizontal:10,
        justifyContent:"space-between",
        alignItems:"center",
        height:"15%",
    },
    BGImage:{
        height:"100%",
        width:"100%",
        justifyContent:"flex-end"
    },
    titleContainer:{
        backgroundColor:"rgba(0,0,0,0.5)",
        paddingVertical:5,
        paddingHorizontal:12,
    },
    title:{
        fontFamily:"OpenSansBold",
        fontSize:22,
        color:Color.white,
        textAlign:"center"
    },
    SubText:{
        fontFamily:"OpenSansRegular",
        fontSize:15
    }
});
export default MealItem;