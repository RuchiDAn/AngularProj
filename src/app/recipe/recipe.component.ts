import { Component, OnInit } from '@angular/core';
//import { Recipes } from './recipes.model';
import { RecipeService} from './recipe.service';
//import { RecipeItemsComponent } from './recipe-list/recipe-items/recipe-items.component';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected
    // .subscribe(
    //   (recipe: Recipes)=>{
    //     this.selectedRecipe = recipe;
    //   }
   // );
  }

}
