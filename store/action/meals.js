export  const  TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTER = "SET_FILTER";

export  const toggleFavorite = (id) =>{
    return {type:TOGGLE_FAVORITE, mealId:id}
}

export const SetFilters = filterSettings =>{
    return {type:SET_FILTER, filters:filterSettings}
}
