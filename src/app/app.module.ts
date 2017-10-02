import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdButtonModule, MdInputModule, MdCheckboxModule} from '@angular/material';
import { appRouter } from './app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Md2Module }  from 'md2';
import { NgProgressModule, NgProgressService } from 'ngx-progressbar';

import {ApiService} from './services/api.service';
import{AuthService} from './services/auth.service';
import {CommonService} from './services/common.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const firebaseConfig = {
  apiKey: "AIzaSyD5FXScnki-Zn5giQauvZMXx2vNu8Ni7y0",
  authDomain: "design-822b3.firebaseapp.com",
  databaseURL: "https://design-822b3.firebaseio.com",
  projectId: "design-822b3",
  storageBucket: "design-822b3.appspot.com",
  messagingSenderId: "454181967546"
};

@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,  
    appRouter,
    Md2Module,
    NgProgressModule,
    MaterializeModule.forRoot(), 
    [MdButtonModule, MdCheckboxModule, MdInputModule],
  ],
  providers: [NgProgressService, ApiService, AuthService, CommonService], 
  bootstrap: [AppComponent]
})
export class AppModule { }     
