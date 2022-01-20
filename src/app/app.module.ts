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

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent, 
    SassDashboardComponent,
    RetailDashboardComponent,
    ECommerceDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
