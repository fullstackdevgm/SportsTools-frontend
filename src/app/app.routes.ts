/*
Router File
This will manage the content of app.component.html
*/
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent} from './main/main.component';
import {OrganizationComponent} from './organization/organization.component';
import {ClubComponent} from './club/club.component';
import {PlayerComponent} from './player/player.component';
import {SportComponent} from './sport/sport.component';

const appRoutes: Routes = [
  { path: '', redirectTo:'/main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'organization', component: OrganizationComponent},
  { path: 'club', component: ClubComponent},
  { path: 'player', component: PlayerComponent},
  { path: 'sport', component: SportComponent},
];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);