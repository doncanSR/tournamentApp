import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from "../template/template.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routing
import { PlayerRouting } from "./player.routing";

//Pages
import { AddPlayerPage } from "./add-player/add-player.page";


const PlayerPages: any = [
  AddPlayerPage
];

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    PlayerRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...PlayerPages
  ]
})
export class PlayerModule { }
