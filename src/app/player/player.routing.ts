import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Pages

import { AddPlayerPage } from "./add-player/add-player.page";

const routes: Routes= [
  {
    path:'add-player',
    component: AddPlayerPage
  }
]

export const PlayerRouting: ModuleWithProviders = RouterModule.forChild(routes);