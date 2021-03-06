import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable(

)
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Burger','A Burger King',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
  [
    new Ingredient('meal',1),
    new Ingredient('tomato',2),
  ]),
  new Recipe('Special Kriuk Iwak Pitik','the food made from crossing breed Iwak and Pitik','../src/app/img/IP.jpg',
[
  new Ingredient('chicken',1),
  new Ingredient('flour',3),
  new Ingredient('egg',1),
  new Ingredient('spices',1)
]),  
];

  getRecipes(){
    return this.recipes.slice();
  }
  //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  //tambahkan parameter pada construktor
constructor(private slsService: ShoppingListService) { }

}