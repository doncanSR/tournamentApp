import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from "../template/template.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Routing
import { AuthRouting } from "./auth-routing";

//Pages
import { LoginPage } from "./login/login.page";
import { RecoverPasswordPage } from "./recover-password/recover-password.page";
import { SignPage } from "./sign-up/sign.page";


const AuthPages: any = [
  LoginPage,
  RecoverPasswordPage,
  SignPage
];

@NgModule({
  imports: [
    CommonModule,
    TemplateModule,
    AuthRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...AuthPages
  ]
})
export class AuthModule { }
