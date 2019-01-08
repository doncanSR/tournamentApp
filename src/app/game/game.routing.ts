import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Pages

import { RegistryGamePage } from "./registry-game/registry-game.page";


const routes: Routes= [
  {
    path:'registry-game',
    component: RegistryGamePage
  }
]

export const GameRouting: ModuleWithProviders = RouterModule.forChild(routes);