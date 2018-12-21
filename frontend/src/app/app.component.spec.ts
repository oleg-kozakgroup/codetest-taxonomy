import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SiteCategoryComponent } from './modules/site-category/components/main/component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatChipsModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { SharedModule } from './modules/shared/module';
import { CategoryService } from './modules/site-category/services/category.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatChipsModule,
        MatSnackBarModule,
        SharedModule
      ],
      declarations: [
        AppComponent, SiteCategoryComponent
      ],
      providers: [CategoryService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
