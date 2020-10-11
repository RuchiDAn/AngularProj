import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipes} from './recipes.model';


@Injectable()
export class RecipeService {
    
   //recipesChanged = new Subject<Recipe[]>()

    private recipe: Recipes[] = [
        
            new Recipes('Big Fat Burger',
        'What else you need to say',
        'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS-1-696x696.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('french fries',20)
        ])
        ,new Recipes('Tasty Schnitzel',
        'A super tasty schinitzel -  just awesome',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1200px-Schnitzel.JPG',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat',2)
        ])
      
    ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
          return this.recipe.slice();
      }

      getRecipe(index: number) {
          return this.recipe[index];
      }
      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.shoppingListService.addIngredients(ingredients);

      }

}