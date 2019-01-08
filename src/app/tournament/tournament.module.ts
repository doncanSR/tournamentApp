import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from "../template/template.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routing
import { TournamentRouting } from "./tournament.routing";

//Pages
import { NewTournamentPage } from "./new-tournament/new-tournament.page";


const TournamnetPages: any = [
  NewTournamentPage
];

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    TournamentRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...TournamnetPages
  ]
})
export class TournamentModule { }
