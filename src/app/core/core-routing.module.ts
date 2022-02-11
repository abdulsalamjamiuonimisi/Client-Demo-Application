import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaslGuard } from '../masl.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    // canActivate: [MaslGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
