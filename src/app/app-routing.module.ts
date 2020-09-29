import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllGamesComponent } from './all-games/all-games.component';

const routes: Routes = [
  { path: 'allgames', component: AllGamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
