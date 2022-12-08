import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  bars = faBars;
  x = faX;
  Show: boolean = false;
  sidebar: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onManageClick() {
    this.Show = !this.Show;
  }
  sidebarClicker() {
    this.sidebar = !this.sidebar;
  }
  recipieclick() {}
}
