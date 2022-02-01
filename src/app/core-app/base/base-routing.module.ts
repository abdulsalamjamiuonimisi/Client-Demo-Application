import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryShareComponent } from '../e-commerce-dashboard/country-share/country-share.component';
import { ECommerceDashboardComponent } from '../e-commerce-dashboard/e-commerce-dashboard.component';
import { KpiCardsComponent } from '../e-commerce-dashboard/kpi-cards/kpi-cards.component';
import { TrendsComponent } from '../e-commerce-dashboard/trends/trends.component';
import { ChannelDetailsComponent } from '../retail-dashboard/channel-details/channel-details.component';
import { ChannelSummaryComponent } from '../retail-dashboard/channel-summary/channel-summary.component';
import { RetailDashboardComponent } from '../retail-dashboard/retail-dashboard.component';
import { CouponDetailsComponent } from '../sass-dashboard/coupon-details/coupon-details.component';
import { CouponSummaryComponent } from '../sass-dashboard/coupon-summary/coupon-summary.component';
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
        children: [
          {
            path: '',
            redirectTo: 'kpi-cards',
            pathMatch: 'prefix'
          },
          {
            path: 'country-share',
            component: CountryShareComponent
          },
          {
            path: 'trends',
            component: TrendsComponent
          },
          {
            path: 'kpi-cards',
            component: KpiCardsComponent
          }
        ]
      },
      
      {
        path: 'sass-dashboard',
        component: SassDashboardComponent,
        children: [
          {
            path: '',
            redirectTo: 'coupon-summary',
            pathMatch: 'prefix'
          },
          {
            path: 'coupon-details',
            component: CouponDetailsComponent
          },
          {
            path: 'coupon-summary',
            component: CouponSummaryComponent
          }
        ]
      },
      {
        path: 'retail-dashboard', 
        component: RetailDashboardComponent,
        children: [
          {
            path: '',
            redirectTo: 'channel-summary',
            pathMatch: 'prefix'
          },
          {
            path: 'channel-details',
            component: ChannelDetailsComponent
          },
          {
            path: 'channel-summary',
            component: ChannelSummaryComponent
          }
        ]
      },
      
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
