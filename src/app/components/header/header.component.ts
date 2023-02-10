import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showMenu = false;

  items = [
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'Products', icon: 'pi pi-fw pi-shopping-cart'},
    {label: 'Categories', icon: 'pi pi-fw pi-list'},
    {label: 'About Us', icon: 'pi pi-fw pi-info'}
  ];

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
