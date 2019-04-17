import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddRefereePage } from "./add-referee/add-referee.page";
import { AuthGuardService } from "../utils/auth-guard/auth-guard.service";

//Pages



const routes: Routes= [
    {
        path:'add-referee',
        component: AddRefereePage,
        canActivate: [AuthGuardService],
        data:{
          role:'admin'
        }
      }
]

export const RefereeRouting: ModuleWithProviders = RouterModule.forChild(routes);