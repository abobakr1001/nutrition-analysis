import { Component } from '@angular/core';
import { NutritionService } from './services/nutrition.service';

import { firstValueFrom } from 'rxjs';
import { addIngredient, analyzeIngredientsSuccess, newRecipe } from './Nutrition/nutrition.actions';
import { NutritionState } from './Nutrition/nutrition.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ingredients$ = this.store.select(state => state.nutrition.ingredients);
  ingredientTotal$ = this.store.select(state => state.nutrition.ingredientTotal);
  result$ = this.store.select(state => state.nutrition.result);
  loading :boolean =false

  constructor(private store: Store<{ nutrition: NutritionState }>, private nutritionService: NutritionService) {}

  addIngredient(event: any) {
    debugger
    if (event == "" ) {
      alert("please inter data ")
      return
    }
    this.loading = true
    this.store.dispatch(addIngredient({ ingredient: event }));

    // Trigger analyzeIngredients
    this.nutritionService.analyzeIngredients([event]).subscribe(
      (response: any) => {
        this.store.dispatch(analyzeIngredientsSuccess({ response }));
        this.loading = false
      },
      error => {
        console.error('Error analyzing ingredients:', error);
      }
    );
  }

  newRecipe() {

debugger
    console.log(this.ingredientTotal$.subscribe(res=>{
      console.log(res)
    }),"dddddddddddddddddd");
    this.store.dispatch(newRecipe());
  }


}
