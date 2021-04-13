import {MEALS} from "../../data/dummy-data";
import {TOGGLE_FAVORITE} from "../action/meals";
import {SET_FILTER} from "../action/meals";
const initialState = {
    Meals:MEALS,
    FilteredMeals:MEALS,
    FavoriteMeals:[],
}

// Here state is the initial state values, action do operations on states.
const MealsReducers = (state = initialState, action ) =>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            const ExistingIndex = state.FavoriteMeals.findIndex(meal=>meal.id === action.mealId);
            if(ExistingIndex >= 0 ){
                    const UpdatedFavrites = [...state.FavoriteMeals];
                    UpdatedFavrites.splice(ExistingIndex,1)
                    return {...state, FavoriteMeals:UpdatedFavrites}
            }else{
                const meal = state.Meals.find(meal=>meal.id === action.mealId)
                return {...state, FavoriteMeals:state.FavoriteMeals.concat(meal)}
            }
        case SET_FILTER:
            const appliedFilter = action.filters;
            const UpDatedFilteredMeals  = state.Meals.filter(meal =>{
                if(appliedFilter.GlutenFree &&  !meal.isGlutenFree){
                    return false;
                }
                if(appliedFilter.Vegan &&  !meal.isVegan){
                    return false;
                }
                if(appliedFilter.Vegetarian &&  !meal.isVegetarian){
                    return false;
                }
                if(appliedFilter.LactosFree &&  !meal.isLactoseFree){
                    return false;
                }
                return true
            })
            return {...state, FilteredMeals:UpDatedFilteredMeals}

        default: return state;
    }
    return state;
}

export default MealsReducers;