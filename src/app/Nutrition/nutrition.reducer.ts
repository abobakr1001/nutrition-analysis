import { createReducer, on } from '@ngrx/store';
import { addIngredient, analyzeIngredients, analyzeIngredientsSuccess, analyzeIngredientsFailure, newRecipe } from './nutrition.actions';
import { NutritionState, initialNutritionState } from './nutrition.state';
debugger;
export const nutritionReducer = createReducer(
  initialNutritionState,

  on(addIngredient, (state, { ingredient }) => ({
    ...state,
    ingredients: [...state.ingredients, ingredient]
  })),

  on(analyzeIngredients, state => ({
    ...state,
    loading: true
  })),

  on(analyzeIngredientsSuccess, (state, { response }) => ({
    ...state,
    loading: false,
    result: response,
    ingredientTotal: response.ingredients
  })),

  on(analyzeIngredientsFailure, state => ({
    ...state,
    loading: false
  })),

  on(newRecipe, state => ({
    ...state,
  
    ingredientTotal: null,
    ingredients: [],

    result: null,
  }))
);
