import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommerceDashboardComponent } from '../e-commerce-dashboard/e-commerce-dashboard.component';
import { RetailDashboardComponent } from '../retail-dashboard/retail-dashboard.component';
import { SassDashboardComponent } from '../sass-dashboard/sass-dashboard.component';

import { BaseComponent } from './base.component';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'prefix',
      },
      
      {
        path: 'e-commerce-dashboard',
        component: ECommerceDashboardComponent,
      },
      {
        path: 'sass-dashboard',
        component: SassDashboardComponent,
      },
      {
        path: 'retail-dashboard',
        component: RetailDashboardComponent,
      },
      
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
