import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  constructor(private readonly http: HttpClient) {}

  getCategories(url: string): Observable<string[]> {
    return this.http.get<string[]>(`${environment.api_url}/categories`, { params: { url }});
  }
}
