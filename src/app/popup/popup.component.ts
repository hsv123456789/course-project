import { Component, OnInit, Input, HostListener } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from '../recipe-list/recipe.model';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  @Input() visible: boolean = false;
  @Input() induviduval: Recipe = new Recipe(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    false
  );
  X = faX;
  popUpClicker() {
    this.visible = !this.visible;
  }
  @HostListener('click') onClick() {
    this.popUpClicker();
  }
  constructor() {}

  ngOnInit(): void {}
}
