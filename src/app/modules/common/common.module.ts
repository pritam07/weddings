import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import {CommonComponent} from './common.component';

@NgModule({
  imports: [
    CommonModule,
    CommonRoutingModule
  ],
  declarations: []
})
export class ComModule { }
