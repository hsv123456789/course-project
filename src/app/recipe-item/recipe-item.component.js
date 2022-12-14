"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeItemComponent = void 0;
var core_1 = require("@angular/core");
var recipe_model_1 = require("../recipe-list/recipe.model");
var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
        this.recipes = [
            new recipe_model_1.Recipe('Dosa', 'This is Dosa ', ''),
            new recipe_model_1.Recipe('Vada', 'This is vada', ''),
            new recipe_model_1.Recipe('Idly', 'This is idly', ''),
        ];
    }
    RecipeItemComponent.prototype.ngOnInit = function () { };
    RecipeItemComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-recipe-item',
            templateUrl: './recipe-item.component.html',
            styleUrls: ['./recipe-item.component.css']
        })
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());
exports.RecipeItemComponent = RecipeItemComponent;
