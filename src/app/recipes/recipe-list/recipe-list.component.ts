import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe of pudim','This is an example','https://receitatodahora.com.br/wp-content/uploads/2018/09/pudim-de-leite-ninho-de-forno.jpg') ,
    new Recipe('Recipe of pudim','This is an example','https://receitatodahora.com.br/wp-content/uploads/2018/09/pudim-de-leite-ninho-de-forno.jpg') 
  ];

  constructor() { }

  ngOnInit() {
  }

}
