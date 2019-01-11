import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Pages

import { RegistryTeamPage } from "./registry-team/registry-team.page";


const routes: Routes= [
  {
    path:'registry-team',
    component: RegistryTeamPage
  }
]

export const TeamRouting: ModuleWithProviders = RouterModule.forChild(routes);