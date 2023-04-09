import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../common/user';
import { environment } from 'src/environments/environment';
import { Address } from '../common/address';
import { AuthService } from './auth.service';

  @Injectable({
    providedIn: 'root'
  })
  export class UserService {

    private baseUrl = environment.shopApiUrl  + '/users';

    constructor(private http: HttpClient) { }

    getUser(): Observable<User[]> {
      return this.http.get<User[]>(this.baseUrl);
    }

    getUserById(id: number):Observable<User> {
      return this.http.get<User>(`${this.baseUrl}/${id}`);
    }

    createUser(user: User): Observable<any> {
      return this.http.post(`${this.baseUrl}`, user);
    }

    updateUser(id: number, value: any): Observable<any> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }

    deleteUser(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }
  }


