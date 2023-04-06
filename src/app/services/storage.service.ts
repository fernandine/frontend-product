import { Injectable } from '@angular/core';
import { User } from '../common/user';

const AUTH_USER_KEY = 'auth_user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  getUser(): User | undefined {
    const user = localStorage.getItem(AUTH_USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return undefined;
  }

}
