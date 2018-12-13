import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { LoginPage } from '../login/login.page';
import { AddNamePage } from '../add-name/add-name.page';
import { UpdateNamePage } from '../update-name/update-name.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'login',
        outlet: 'login',
        component: LoginPage
      },
      {
        path: 'add-name',
        outlet: 'add-name',
        component: AddNamePage
      },
      {
        path: 'update-name',
        outlet: 'update-name',
        component: UpdateNamePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(login:login)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
