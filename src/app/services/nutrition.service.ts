import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private apiUrl = environment.apiUrl;
  private appId = environment.appId;
  private appKey = environment.appKey;
  constructor(private http: HttpClient) { }
  analyzeIngredients(ingredients: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      "title": "Recipe",
      "ingr": ingredients
    };

    const url = `${this.apiUrl}?app_id=${this.appId}&app_key=${this.appKey}`;

    return this.http.post(url, body, { headers });
  }
}
