import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../common/product';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.shopApiUrl + '/products';
  private searchUrl = environment.shopApiUrl + '/products/search'

  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/categories?id=${theCategoryId}`;
    return this.getProductSearch(searchUrl)
  }

  listProductAdmin(): Observable<Product[]> {
    return this.httpClient.get<ResponseProduct>(this.baseUrl)
      .pipe(map(response => response.content));
  }

  getProductSearch(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<ApiResponseProduct>(searchUrl)
      .pipe(map(response => response.content));
  }

  getProduct(theProductId: number): Observable<Product> {
    const productUrl = `${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl);
  }

  getProductListPaginate(
    thePage: number,
    thePageSize: number,
    theCategoryId: number): Observable<ApiResponseProduct> {

    const searchUrl = `${this.baseUrl}/search/categories?id=${theCategoryId}`
      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<ApiResponseProduct>(searchUrl)
      .pipe(map(response => response))
  }

  searchProducts(theKeyword: string | null): Observable<Product[]> {
    const searchUrl = `${this.searchUrl}?name=${theKeyword}`;
    console.log(searchUrl)
    return this.getProductSearch(searchUrl)
  }

  searchProductsPaginate(
    thePage: number,
    thePageSize: number,
    theKeyword: string): Observable<ApiResponseProduct> {

    const searchUrl = `${this.searchUrl}?name=${theKeyword}`
      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<ApiResponseProduct>(searchUrl)
      .pipe(map(response => response))
  }

  getOneProductById(id: number): Observable<Product> {
    const url = `${this.searchUrl}/${id}`;
    return this.httpClient.get<Product>(url)
      .pipe(map(product => product))
  }

  createProduct(product: Product): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, value: any): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}

interface ApiResponseProduct {
  content: Product[]
  totalPages: number
  size: number
  totalElements: number,
  number: number,
  first: boolean,
  last: boolean,
  empty: boolean

}
interface ResponseProduct {
  content: Product[]
}
