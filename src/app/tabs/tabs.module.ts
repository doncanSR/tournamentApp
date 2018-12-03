import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateModule } from "../template/template.module";

import { TabsRouting } from './tabs.routing';

import { TabsPage } from './tabs.page';
import { AboutPage } from "./about/about.page";
import { ContactPage } from "./contact/contact.page";
import { HomePage } from "./home/home.page";

const TabsPages : any = [
  TabsPage,
  HomePage,
  ContactPage,
  AboutPage
]

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsRouting,
    TemplateModule
  ],
  declarations: [
    ...TabsPages
  ]
})
export class TabsPageModule {}
