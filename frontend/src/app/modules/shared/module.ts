import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SpinnerComponent } from './components/spinner/component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }