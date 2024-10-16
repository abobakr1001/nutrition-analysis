import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { TotalNutritionComponent } from './components/total-nutrition/total-nutrition.component';
import { IngredientsSummaryComponent } from './components/ingredients-summary/ingredients-summary.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { StoreModule } from '@ngrx/store';
import { nutritionReducer } from './Nutrition/nutrition.reducer';



@NgModule({
  declarations: [
    AppComponent,

IngredientsSummaryComponent,
    TotalNutritionComponent,
    LoadingSpinnerComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ nutrition: nutritionReducer }),
    NgxSpinnerModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
