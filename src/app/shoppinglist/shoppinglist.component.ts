import { Component, OnInit } from '@angular/core';
import { Ingredent } from 'src/Shared/Ingredents.modal';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css'],
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredent[] = [];
  newItemName: string = '';
  newItemNumber: number = 0;
  total: number = totalCalculator(this.ingredients);
  shower: boolean = false;

  constructor() {}

  ingredientsPusher() {
    if (this.newItemName !== '' && this.newItemNumber !== 0) {
      this.ingredients.push(
        new Ingredent(this.newItemName, this.newItemNumber)
      );
      this.total = totalCalculator(this.ingredients);
      this.shower = true;
    }
  }
  ingredientsPoper() {
    this.ingredients.pop();
    this.total = totalCalculator(this.ingredients);
    this.shower = true;
  }
  totalRemover() {
    this.ingredients = [];
    this.total = 0;
    this.shower = false;
  }
  ngOnInit(): void {}
}
function totalCalculator(array: Ingredent[]): number {
  var total: number = 0;
  array.forEach((element) => {
    total += element.number * 1;
  });
  return total;
}
