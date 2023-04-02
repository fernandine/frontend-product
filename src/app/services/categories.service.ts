import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = environment.shopApiUrl  + '/categories';

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<ResponseProductCategory>(this.baseUrl)
      .pipe(map(response => response.content));

  }

  createCategory(user: Category): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateCategory(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

interface ResponseProductCategory {
  content: Category[]
}
