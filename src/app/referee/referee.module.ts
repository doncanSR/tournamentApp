import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from "../template/template.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routing
import { RefereeRouting } from "./referee.routing";

//Pages
import {  AddRefereePage } from "./add-referee/add-referee.page";


const PlayerPages: any = [
   AddRefereePage
];

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    RefereeRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...PlayerPages
  ]
})
export class RefereeModule { }
