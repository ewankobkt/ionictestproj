import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DatabaseSamplePage } from './database-sample.page';

const routes: Routes = [
  {
    path: '',
    component: DatabaseSamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DatabaseSamplePage]
})
export class DatabaseSamplePageModule {}
