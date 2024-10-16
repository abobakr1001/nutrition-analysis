import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingredients-summary',
  templateUrl: './ingredients-summary.component.html',
  styleUrls: ['./ingredients-summary.component.scss']
})
export class IngredientsSummaryComponent {
  @Input() result: any;

     constructor(private router: Router,) {}

  

}
