import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Pages

import { LoginPage } from "./login/login.page";
import { SignPage } from "./sign-up/sign.page";
import { RecoverPasswordPage } from "./recover-password/recover-password.page";

const routes: Routes= [
  {
    path:'login',
    component: LoginPage
  },
  {
    path:'sign-up',
    component: SignPage
  },
  {
    path:'recovery-password',
    component: RecoverPasswordPage
  }
]

export const AuthRouting: ModuleWithProviders = RouterModule.forChild(routes);