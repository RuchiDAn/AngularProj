import { Component, OnInit, Input } from '@angular/core';

import { Recipes} from '../../recipes.model';
@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
@Input() recipe: Recipes;
@Input() index: number;

  ngOnInit() { 
    console.log(this.recipe)
  }
   
   }


