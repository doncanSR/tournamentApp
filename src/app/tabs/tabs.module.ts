import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TemplateModule } from "../template/template.module";

import { TabsRouting } from './tabs.routing';

import { TabsPage } from './tabs.page';
import { TeamPage } from "./teams/team.page";
import { ResultPage } from "./results/result.page";
import { HomePage } from "./home/home.page";

const TabsPages : any = [
  TabsPage,
  HomePage,
  ResultPage,
  TeamPage
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
