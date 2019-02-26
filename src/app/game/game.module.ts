import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from "../template/template.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routing
import { GameRouting } from "./game.routing";

//Pages
import { RegistryGamePage } from "./registry-game/registry-game.page";


const GamePages: any = [
  RegistryGamePage
];

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    GameRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...GamePages
  ]
})
export class GameModule { }
