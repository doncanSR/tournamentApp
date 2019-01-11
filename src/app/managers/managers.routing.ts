import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Pages

import { AddManagerPage } from "./add-manager/add-manager.page";


const routes: Routes= [
  {
    path:'add-manager',
    component: AddManagerPage
  }
]

export const ManagersRouting: ModuleWithProviders = RouterModule.forChild(routes);