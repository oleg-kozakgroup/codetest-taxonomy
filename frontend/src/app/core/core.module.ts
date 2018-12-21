import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { SiteCategoryModule } from '../modules/site-category/module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SiteCategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
