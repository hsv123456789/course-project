import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}
  popUpVisible: boolean = false;
  modalShower() {
    this.popUpVisible = !this.popUpVisible;
  }
  ngOnInit(): void {}
}
