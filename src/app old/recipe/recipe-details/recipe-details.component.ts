import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
recipe: Recipes;
id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private shoppingService:ShoppingListService) {

               }

  ngOnInit() {
    this.route.params
    .subscribe();
    (params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    }
   }

  onAddToShoppingList() {
    let ingredients=this.shoppingService.getIngredients()
    let allowIngredient:boolean=false;
    ingredients.some((value)=>{
      if(value.name == this.recipe.ingredients[0].name)
      {
        allowIngredient= true;
      }
    })
    if(!allowIngredient)
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
}

onEditRecipe() {
  this.router.navigate(['edit'], {relativeTo: this.route})
  //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
}

}
