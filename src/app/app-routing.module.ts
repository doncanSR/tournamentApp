import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'player', loadChildren: './player/player/player.module#PlayerPageModule' },
  { path: 'add-player', loadChildren: './player/add-player/add-player.module#AddPlayerPageModule' },
  { path: 'add-referee', loadChildren: './referee/add-referee/add-referee.module#AddRefereePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
