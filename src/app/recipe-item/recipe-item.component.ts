import { Component, OnInit, Input } from '@angular/core';
import { EnabledBlockingInitialNavigationFeature } from '@angular/router';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  visible1: boolean = false;
  visible2: boolean = false;
  visible3: boolean = false;

  Ingredients: object[] = [
    {
      item1: 'Dhal',
      item2: 'Rice',
      item3: 'Salt',
      item4: 'Water',
      steps:
        'Prepare batter with the above ingredients and cook it in a pan like you do it in a pancake',
    },
    {
      item1: 'Dhal',
      item2: 'Rice',
      item3: 'Salt',
      item4: 'Water',
      steps:
        'Prepare batter similar to dosa but make the consistency thicker and fry it in the pan with oil insted of doing it like a pancake',
    },
    {
      item1: 'Dhal',
      item2: 'Rice',
      item3: 'Salt',
      item4: 'Water',
      steps:
        'Prepare batter similar to dosa then ferment the batter overnight and make sure that the  fermentation process has been completed and then cook it with the help of a special cooker called the idly cooker',
    },
  ];

  recipes: Recipe[] = [
    new Recipe(
      'Dosa',
      'This is Dosa ',
      'assets/dosa.jpg',
      'Dhal',
      'Rice',
      'Salt',
      'Water',
      'Prepare batter with the above ingredients and cook it in a pan like you do it in a pancake',
      this.visible1
    ),
    new Recipe(
      'Vada',
      'This is vada',
      'assets/vada.jpg',
      'Dhal',
      'Rice',
      'Salt',
      'Water',
      'Prepare batter similar to dosa but make the consistency thicker and fry it in the pan with oil insted of doing it like a pancake',
      this.visible2
    ),
    new Recipe(
      'Idly',
      'This is idly',
      'assets/idly.jpg',
      'Dhal',
      'Rice',
      'Salt',
      'Water',
      'Prepare batter similar to dosa then ferment the batter overnight and make sure that the  fermentation process has been completed and then cook it with the help of a special cooker called the idly cooker',
      this.visible3
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
  popUpClicker(visibility: boolean, i: number): boolean {
    return (this.recipes[i].visibility = !this.recipes[i].visibility);
  }
}
