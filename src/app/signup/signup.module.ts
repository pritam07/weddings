import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignupComponent} from './signup.component';
import {signupRouter} from './signup.router';
@NgModule({
  imports: [
    CommonModule,
    signupRouter
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
