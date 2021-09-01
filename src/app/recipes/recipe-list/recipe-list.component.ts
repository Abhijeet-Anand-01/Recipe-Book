import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg'),
    new Recipe('A Test Recipe2', 'This is a simple test2', 'https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
