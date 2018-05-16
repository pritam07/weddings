import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouter } from './app.router';

import { AppComponent } from './app.component';
import { HomeModule} from './modules/home/home.module';
import {CommonComponent} from './modules/common/common.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent    
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    HomeModule,
    appRouter,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
