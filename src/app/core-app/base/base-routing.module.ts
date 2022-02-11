import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from 'src/app/roles.guard';
import { MaslGuard} from '../../masl.guard';
import { CountryShareComponent } from '../e-commerce-dashboard/country-share/country-share.component';
import { ECommerceDashboardComponent } from '../e-commerce-dashboard/e-commerce-dashboard.component';
import { KpiCardsComponent } from '../e-commerce-dashboard/kpi-cards/kpi-cards.component';
import { SubKpiTestComponent } from '../e-commerce-dashboard/kpi-cards/sub-kpi-test/sub-kpi-test.component';
import { SubKpiTest2Component } from '../e-commerce-dashboard/kpi-cards/sub-kpi-test2/sub-kpi-test2.component';
import { SubKpiTest3Component } from '../e-commerce-dashboard/kpi-cards/sub-kpi-test3/sub-kpi-test3.component';
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
        // data: {roles: ['ecommerce']},
        canActivate: [MaslGuard],
        children: [
          {
            path: '',
            redirectTo: 'kpi-cards',
            pathMatch: 'prefix'
          },
          {
            path: 'country-share',
            component: CountryShareComponent, 
            data: {roles: ['ecommerce']},
            canActivate: [RolesGuard]
          },
          {
            path: 'trends',
            component: TrendsComponent,
            data: {roles: ['ecommerce']},
            canActivate: [RolesGuard]
          },
          {
            path: 'kpi-cards',
            component: KpiCardsComponent,
            data: {roles: ['ecommerce']},
            canActivate: [RolesGuard],

            children: [
              {
                path: '',
                redirectTo: 'kpi-card1',
                pathMatch: 'prefix'
              },
              {
                path: 'kpi-card1',
                component: SubKpiTestComponent
              },
              {
                path: 'kpi-card2',
                component: SubKpiTest2Component
              },
              {
                path: 'kpi-card3',
                component: SubKpiTest3Component
              }

            ]
          }
        ]
      },
      
      {
        path: 'sass-dashboard',
        component: SassDashboardComponent,
        // data: {roles: ['sass']},
        canActivate: [MaslGuard],
        children: [
          {
            path: '',
            redirectTo: 'coupon-summary',
            pathMatch: 'prefix'
          },
          {
            path: 'coupon-details',
            component: CouponDetailsComponent,
        data: {roles: ['sass']},
        canActivate: [RolesGuard],
          },
          {
            path: 'coupon-summary',
            component: CouponSummaryComponent,
        data: {roles: ['sass']},
        canActivate: [RolesGuard],
          }
        ]
      },
      {
        path: 'retail-dashboard', 
        component: RetailDashboardComponent,
        // data: {roles: ['retail']},
        canActivate: [MaslGuard],
        children: [
          {
            path: '',
            redirectTo: 'channel-summary',
            pathMatch: 'prefix'
          },
          {
            path: 'channel-details',
            component: ChannelDetailsComponent,
        data: {roles: ['retail']},
        canActivate: [RolesGuard],
          },
          {
            path: 'channel-summary',
            component: ChannelSummaryComponent,
        data: {roles: ['retail']},
        canActivate: [RolesGuard],
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
