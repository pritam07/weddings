import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {loginRouter} from './login.router';
@NgModule({
  imports: [
    CommonModule,
    loginRouter 
  ],
  declarations: [LoginComponent] 
})
export class LoginModule { }
 