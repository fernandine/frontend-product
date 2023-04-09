import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
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
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.username = this.getUsername();
    this.loginService.getLoginObservable().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
      this.username = loggedIn ? this.getUsername() : '';
    });

    this.items = [
      {
        label: 'Home',
        routerLink: '/products',
        styleClass: 'p-button-text'
      },
      {
        label: 'About us',
        routerLink: '/about',
        styleClass: 'p-button-text'
      },
      {
        label: 'Contact',
        routerLink: '/contact',
        styleClass: 'p-button-text'
      }
    ];
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
