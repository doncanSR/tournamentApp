import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from "../template/template.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routing
import { TeamRouting } from "./team.routing";

//Pages
import { RegistryTeamPage } from "./registry-team/registry-team.page";


const TeamPages: any = [
  RegistryTeamPage
];

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    TeamRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...TeamPages
  ]
})
export class TeamModule { }
