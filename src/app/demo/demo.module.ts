import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FirstViewComponent } from './first-view/first-view.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FirstViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule
  ],
  exports: [
    FirstViewComponent
  ]
})
export class DemoModule { }
