import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'new-tournament', loadChildren: './tournament/new-tournament/new-tournament.module#NewTournamentPageModule' },
  { path: 'registry-game', loadChildren: './game/registry-game/registry-game.module#RegistryGamePageModule' },
  { path: 'add-manager', loadChildren: './managers/add-manager/add-manager.module#AddManagerPageModule' },
  { path: 'registry-team', loadChildren: './team/registry-team/registry-team.module#RegistryTeamPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
