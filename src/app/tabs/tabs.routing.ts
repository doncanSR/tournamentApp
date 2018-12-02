
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//pages
import { TabsPage } from './tabs.page';
import { HomePage } from './home/home.page';
import { TeamPage } from './teams/team.page';
import { ResultPage } from './results/result.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full',
      },
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'team',
        outlet: 'team',
        component: TeamPage
      },
      {
        path: 'result',
        outlet: 'result',
        component: ResultPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

export const TabsRouting: ModuleWithProviders = RouterModule.forChild(routes);