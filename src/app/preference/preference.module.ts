import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreferenceComponent} from './preference.component';
import {preferenceRouter} from './preference.router'
@NgModule({
  imports: [
    CommonModule,
    preferenceRouter
  ],
  declarations: [PreferenceComponent]
})
export class PreferenceModule { }
