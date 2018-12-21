import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingPreloaderService } from './app-routing-preloader.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    data: { preload: true }
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule',
    data: { preload: true }
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfilePageModule',
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppRoutingPreloaderService })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
