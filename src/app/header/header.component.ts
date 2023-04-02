import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { Category } from '../common/category';
import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  isLoggedIn!: boolean;
  categories: Category[] = [];
  username: string = '';

  constructor(
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.username = this.getUsername();
    this.loginService.getLoginObservable().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      this.username = loggedIn ? this.getUsername() : '';
    });
  }

  getUsername(): string {
    const currentUser = this.authService.getCurrentUser();
    return currentUser ? currentUser.username : '';
  }

  logout(): void {
    this.authService.logout();
    location.reload();
    this.router.navigate(['/products']);
  }
}
