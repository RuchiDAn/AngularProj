import {  NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
//import { RecipeComponent } from './recipe/recipe-list/recipe-items/recipe-items.component';

import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipeComponent, children:[
        { path: '', component: RecipeStartComponent},
        { path: 'new', component: RecipeEditComponent},
        { path: 'id', component: RecipeDetailsComponent},
        { path: ':id/edit', component: RecipeEditComponent},
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}//send me app of this project i will check and send you
//ok please tell how i can send u this app
//send via whatsapp
//by copy paste
//no on whatsapp send 
//i am not able to connect u
//my whatsapp is open in my laptop
 //whats the problem in that
 