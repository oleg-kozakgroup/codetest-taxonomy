import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MatSnackBar } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'site-category',
  templateUrl: './component.html',
  styleUrls: ['./component.css']
})
export class SiteCategoryComponent implements OnInit {
  loading: Boolean = false;
  categoriesForm: FormGroup;
  categories: string[] = [];

  constructor (
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) { }
  
  ngOnInit() {
      this.categoriesForm = new FormGroup({
        url: new FormControl('', [Validators.required])
      });
  }

  getCategories() {
    this.loading = true;
    this.categories = [];
    this.categoryService.getCategories(this.categoriesForm.value.url).subscribe(
      data => { 
        this.loading = false;
        this.categories = data;
      },
      ({error}) => {
        this.categoriesForm.reset();
        this.loading = false;
        this.snackBar.open(error || 'Something went wrong!', 'Error', {
            duration: 1000
        });
      }
    )
  }
}
