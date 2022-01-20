import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {
    path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
  },
  {
    path: 'app', loadChildren: () => import('./core-app/base/base.module').then(m => m.BaseModule),

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 