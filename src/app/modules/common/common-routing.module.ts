import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ModuleWithProviders} from '@angular/core';

// import {CommonComponent} from './common.component';

const routes: Routes = [
  // { path: '', redirectTo: 'common', pathMatch: 'full'},
  // { path: 'common', component: CommonComponent },
  {
    path:'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',    
  }
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
