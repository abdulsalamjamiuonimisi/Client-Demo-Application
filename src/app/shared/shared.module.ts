import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { materials } from './angular-material/material-modules';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
// import { LoaderModule } from '../loader/loader.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({ 
  declarations: [
    
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ...materials
  ],

  entryComponents:[

  ],

  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,

    
    ...materials
    
  ],
  
  providers: [
    { provide: MatDialogRef, useValue: {} },
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule
    };
  }
}