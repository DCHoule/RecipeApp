import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe( 'Fried Noodles',
                    'Awesome Thia Fried Noodles!',
                    'https://www.maxpixel.net/static/photo/640/Thai-Food-Asian-Meal-Fried-Noodles-Noodle-518035.jpg',
                    [
                        new Ingredient('Beef', 1),
                        new Ingredient('Rice Noodles', 2),
                        new Ingredient('Chicken', 1),
                    ]),
        new Recipe( 'Roasted Salmon',
                    'Amazingly healthy and delicious',
                    'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
                    [
                        new Ingredient('Salmon', 2),
                        new Ingredient('Dill', 1),
                        new Ingredient('Lemon', 2),

                    ])
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        this.shoppingListService.addRecipeIngredients(ingredients);
    }
}
