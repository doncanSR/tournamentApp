import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { SideMenuComponent } from './side-menu/side-menu.component';
const templateComponents: any = [
  SideMenuComponent
]
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    templateComponents
  ],
  declarations: [
    ...templateComponents
  ]
})
export class TemplateModule { }
