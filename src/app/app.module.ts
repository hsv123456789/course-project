import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppinglistComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    PopupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
