import React from "react";
import { StyleSheet, Text, View, Platform, ImageBackground } from "react-native";
import Color from "../Constants/Color";
import { Ionicons, Entypo } from "@expo/vector-icons";

const HealthyTextList = (itemName, Check)=>{
    return (
        <View style={styles.HealthwiseInfoContainer}>
                <Text style={styles.HealthWiseInfoText}>{itemName}</Text>
                <Text style={styles.HealthWiseInfoText}>

                    {Check ? <Ionicons name="md-checkmark-circle" size={24} />
                        : <Entypo name="circle-with-cross" size={24} color={Color.black} />
                    }
                </Text>
            </View>
    )
}

const MealDetail = props => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.ImageContainer}>
                <ImageBackground source={{ uri: props.image }} style={styles.image}>
                    <Text numberOfLines={2} style={styles.imageText}>
                        {props.title}
                    </Text>
                </ImageBackground>
            </View>
            <View style={styles.SecondTitle}>
                <Text style={styles.SencondTitleText}>
                    {props.duration + " min"}
                </Text>
                <Text style={styles.SencondTitleText}>
                    {props.affordability.toUpperCase()}
                </Text>
                <Text style={styles.SencondTitleText}>
                    {props.complexity.toUpperCase()}
                </Text>
            </View>
            <View style={styles.FullHealthWiseContainer}>
            <View style={styles.HealthwiseContainer}>
                <Text style={styles.HealthWiseHeadingText}>
                    Healthwise
                 </Text>
            </View>
            {HealthyTextList("1. Is Gluten Free",props.isGlutenFree)}
            {HealthyTextList("2. Is Lactose Free ",props.isLactoseFree)}
            {HealthyTextList("3. Is Vegan",props.isVegan)}
            {HealthyTextList("4. Is Vegetarian",props.isVegetarian)}
            </View>
            <View style={styles.ingredientsContainer}>
                 <View style={styles.ingredientsHeadingContainer}>
                     <Text style={styles.ingredientsHeadingText}>
                         Ingredients
                     </Text>
                 </View>
            {
                props.ingredients.map((val, index)=>{

                    return <View  key={index} style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:"10%", paddingVertical:"2%"}}>
                    <Text style={styles.TextList} key={val}>
                    <Entypo name="arrow-long-right" size={15} color="black" />
                    {" "+val}</Text>
                    </View> 
                })
            }
                
            </View>

            <View style={styles.StepsContainer}>
                 <View style={styles.ingredientsHeadingContainer}>
                     <Text style={styles.ingredientsHeadingText}>
                         Steps
                     </Text>
                 </View>
            {
                props.steps.map((val, index)=>{
                    return <View  key={index} style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingHorizontal:"10%", paddingVertical:"2%"}}>
                    <Text style={styles.TextList} key={val}>
                    <Entypo name="arrow-long-right" size={15} color="black" />
                    {" "+val}</Text>
                    </View> 
                })
            }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    ImageContainer: {
        height: 300,
        width: "100%",
        // borderWidth: 2,
        borderBottomStartRadius:20,
        borderTopEndRadius:20,
        overflow:"hidden"
    },
    image: {
        height: "100%",
        width: "100%",
        justifyContent: "flex-end"
    },
    imageText: {
        fontFamily: "OpenSansBold",
        fontSize: 25,
        backgroundColor: "rgba(0,0,0,0.5)",
        color: Color.white,
        textAlign: "center",
    },
    SecondTitle: {
        width: "100%",
        height: 50,
        // borderBottomWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    SencondTitleText: {
        fontFamily: "OpenSansRegular",
        fontSize: 15
    },
    HealthwiseContainer: {
        height: 55,
        width: "100%",
        flex: 1,
        // borderWidth: 2
        backgroundColor:Color.white,
        borderBottomWidth:Platform.OS === "android"?2:0,
        borderColor:Color.fourth
    },
    HealthWiseHeadingText: {
        fontSize: 25,
        textAlign: "center",
        color: Color.fourth,
        fontFamily:"OpenSansRegular",
        // textDecorationLine: "underline"
    },
    HealthwiseInfoContainer: {
        height: 60,
        width: "100%",
        // borderWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal:"10%",
        alignItems:"center"
    },
    HealthWiseInfoText: {
        fontSize: 20,
        textAlign: "center",
        color: Color.white,
        fontFamily:"OpenSansRegular",

    },
    FullHealthWiseContainer:{
        width:"100%",
        overflow:"hidden",
        backgroundColor :  Platform.OS ==="android"?Color.fourth:Color.white,
        borderBottomEndRadius:20,
        borderTopStartRadius:20,
        borderWidth:2,
        borderColor:Color.fourth,
        marginVertical:10
    },
    ingredientsContainer:{
        width:"100%",
        flex:1,
        borderWidth:2,
        // padding:10,
        marginVertical:10,
        borderTopEndRadius:20,
        borderBottomStartRadius:20,
        borderColor:Color.fourth,
        overflow:"hidden",
        backgroundColor:Color.third
    },
    ingredientsHeadingContainer:{
        backgroundColor:Platform.OS ==="android"? Color.fourth:Color.white,
        paddingVertical:10
    },
    ingredientsHeadingText:{
        color:Platform.OS==="android"? Color.white:Color.fourth,
        fontSize:25,
        textAlign:"center",
        fontFamily:"OpenSansRegular",
    } ,
    StepsContainer:{
        width:"100%",
        flex:1,
        borderWidth:2,
        // padding:10,
        marginVertical:10,
        borderTopStartRadius:20,
        borderBottomEndRadius:20,
        borderColor:Color.fourth,
        overflow:"hidden",
        backgroundColor:Color.white
    },
    TextList:{
        color:Color.fourth,
        fontSize:15,
        fontFamily:"OpenSansRegular"
    }
});
export default MealDetail;