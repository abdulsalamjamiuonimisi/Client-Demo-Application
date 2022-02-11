import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SassDashboardComponent } from './core-app/sass-dashboard/sass-dashboard.component';
import { RetailDashboardComponent } from './core-app/retail-dashboard/retail-dashboard.component';
import { ECommerceDashboardComponent } from './core-app/e-commerce-dashboard/e-commerce-dashboard.component';
import { KpiCardsComponent } from './core-app/e-commerce-dashboard/kpi-cards/kpi-cards.component';
import { TrendsComponent } from './core-app/e-commerce-dashboard/trends/trends.component';
import { CountryShareComponent } from './core-app/e-commerce-dashboard/country-share/country-share.component';
import { CouponSummaryComponent } from './core-app/sass-dashboard/coupon-summary/coupon-summary.component';
import { CouponDetailsComponent } from './core-app/sass-dashboard/coupon-details/coupon-details.component';
import { ChannelSummaryComponent } from './core-app/retail-dashboard/channel-summary/channel-summary.component';
import { ChannelDetailsComponent } from './core-app/retail-dashboard/channel-details/channel-details.component';
import { SettingsComponent } from './core-app/settings/settings.component';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { PublicClientApplication, IPublicClientApplication } from '@azure/msal-browser';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SubKpiTestComponent } from './core-app/e-commerce-dashboard/kpi-cards/sub-kpi-test/sub-kpi-test.component';
import { SubKpiTest2Component } from './core-app/e-commerce-dashboard/kpi-cards/sub-kpi-test2/sub-kpi-test2.component';
import { SubKpiTest3Component } from './core-app/e-commerce-dashboard/kpi-cards/sub-kpi-test3/sub-kpi-test3.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'a85858b9-1973-453a-aa2a-6d7991e8eeb4',
      redirectUri: 'http://localhost:4200'
    }
  })
}


@NgModule({
  declarations: [
    AppComponent,
    CoreComponent, 
    SassDashboardComponent,
    RetailDashboardComponent,
    ECommerceDashboardComponent,
    KpiCardsComponent,
    TrendsComponent,
    CountryShareComponent,
    CouponSummaryComponent,
    CouponDetailsComponent,
    ChannelSummaryComponent,
    ChannelDetailsComponent,
    SettingsComponent,
    SubKpiTestComponent,
    SubKpiTest2Component,
    SubKpiTest3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    PowerBIEmbedModule,
    MsalModule,
    IvyCarouselModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
