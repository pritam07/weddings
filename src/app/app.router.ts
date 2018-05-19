import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import {HOME_ROUTES } from './modules/home/home.module';
import {CommonComponent} from './modules/common/common.component';
//import {AuthGuard } from './core/auth.guard'

export const router: Routes = [
    ...HOME_ROUTES,
    { path:'web', component: CommonComponent, loadChildren: './modules/common/common.module#ComModule' }
   
    
] 

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router, {
    // enableTracing: true, // <-- debugging purposes only
    // preloadingStrategy: PreloadAllModules
  });