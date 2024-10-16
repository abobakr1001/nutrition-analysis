import { createAction, props } from '@ngrx/store';

export const addIngredient = createAction(
  '[Nutrition] Add Ingredient',
  props<{ ingredient: any }>()
);

export const analyzeIngredients = createAction(
  '[Nutrition] Analyze Ingredients',
  props<{ ingredients: any[] }>()
);

export const analyzeIngredientsSuccess = createAction(
  '[Nutrition] Analyze Ingredients Success',
  props<{ response: any }>()
);

export const analyzeIngredientsFailure = createAction(
  '[Nutrition] Analyze Ingredients Failure',
  props<{ error: any }>()
);

export const newRecipe = createAction('[Nutrition] New Recipe');
