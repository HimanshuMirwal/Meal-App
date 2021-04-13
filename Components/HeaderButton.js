import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import { MaterialIcons } from '@expo/vector-icons'; 
import Color from "../Constants/Color";
import { Platform } from "react-native";


const CustomHeaderButton = props =>{
    return <HeaderButton 
        {...props}
        IconComponent={MaterialIcons}
        iconSize={25}
        color= {Platform.OS ==="android"?Color.white:Color.Primary}
    />
}

export default CustomHeaderButton;