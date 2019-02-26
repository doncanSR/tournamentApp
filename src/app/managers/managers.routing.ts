import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../utils/auth-guard/auth-guard.service";
//Pages

import { AddManagerPage } from "./add-manager/add-manager.page";


const routes: Routes= [
  {
    path:'add-manager',
    component: AddManagerPage,
    canActivate: [AuthGuardService],
    data:{
      role:'admin'
    }
  }
]

export const ManagersRouting: ModuleWithProviders = RouterModule.forChild(routes);