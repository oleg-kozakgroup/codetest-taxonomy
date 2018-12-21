import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material';
import { MatSnackBarModule } from '@angular/material'; 

import { SiteCategoryComponent } from './components/main/component';
import { CategoryService } from './services/category.service';
import { SharedModule } from '../shared/module';

@NgModule({
  declarations: [
    SiteCategoryComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [
    CategoryService,
    MatSnackBar
  ],
  exports: [
    SiteCategoryComponent
  ]
})
export class SiteCategoryModule { }