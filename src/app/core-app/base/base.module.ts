import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    BaseComponent,
    BreadcrumbComponent,
  ], 
  imports: [
    BaseRoutingModule,
    SharedModule
  ]
})
export class BaseModule { }
