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
    loadChildren: './pages/home/home.module#HomePageModule',
    data: { preload: true }
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule',
    data: { preload: true }
  },
  {
    path: 'profile',
    loadChildren: './pages/profile/profile.module#ProfilePageModule',
    data: { preload: true }
  },
  { path: 'angelo', loadChildren: './angelo/angelo.module#AngeloPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppRoutingPreloaderService })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
