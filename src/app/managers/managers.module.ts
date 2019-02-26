import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from "../template/template.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routing
import { ManagersRouting } from "./managers.routing";

//Pages
import { AddManagerPage } from "./add-manager/add-manager.page";


const ManagersPages: any = [
  AddManagerPage
];

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    ManagersRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...ManagersPages
  ]
})
export class ManagersModule { }
