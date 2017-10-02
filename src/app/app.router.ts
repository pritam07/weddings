import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {HomeComponent} from './home/home.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '', component: HomeComponent },
    {
        path:'login', 
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path:'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path:'signup',
        loadChildren: './signup/signup.module#SignupModule'
    },
    {
        path:'preference',
        loadChildren: './preference/preference.module#PreferenceModule'
    }
    
] 

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);