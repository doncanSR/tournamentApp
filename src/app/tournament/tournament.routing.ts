import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Pages

import { NewTournamentPage } from "./new-tournament/new-tournament.page";


const routes: Routes= [
  {
    path:'new-tournament',
    component: NewTournamentPage
  }
]

export const TournamentRouting: ModuleWithProviders = RouterModule.forChild(routes);