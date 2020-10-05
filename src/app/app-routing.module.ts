import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AllGamesComponent } from './all-games/all-games.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { HomeComponent } from './home/home.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'allgames', component: AllGamesComponent, data: {animation: 'AllPage'} },
  { path: 'details/:id', component: GameDetailsComponent, data: {animation: 'DetailPage'} },
  { path: 'requests', component: RequestsComponent, data: {animation: 'RequestPage'} }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
