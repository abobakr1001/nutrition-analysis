export interface NutritionState {
  ingredients: any[];
  ingredientTotal: any;
  result: any;

}

export const initialNutritionState: NutritionState = {
  ingredients: [],
  ingredientTotal: null,
  result: null,

};
