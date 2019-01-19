import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from "../template/template.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routing
import { RefereeRouting } from "./referee.routing";

//Pages
import { AddRefereePageModule } from "./add-referee/add-referee.module";


const PlayerPages: any = [
  AddRefereePageModule
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
