import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../common/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = environment.shopApiUrl + '/oauth/token';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('ecommerce:ecommerce123')
    });

    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');

    return this.http.post<any>(this.apiUrl, body.toString(), { headers: headers }).pipe(
      map(response => {
        const token = response.access_token;
        if (token) {
          this.storageService.setItem('currentUser', { username, token });

          return true;
        } else {
          return false;
        }
      })
    );
  }

  logout(): void {
    this.storageService.removeItem('currentUser');
  }

  getToken(): string {
    const currentUser = this.storageService.getItem('currentUser') || {};
    return currentUser.token;
  }

  getCurrentUser(): { username: string, token: string, userId: number } | null {
    const currentUser = this.storageService.getItem('currentUser');
    if (currentUser) {
      return currentUser;
    } else {
      return null;
    }
  }

  isAuthenticated(): boolean {
    const currentUser = this.storageService.getItem('currentUser');
    return !!currentUser && !!currentUser.token;
  }

  getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}
