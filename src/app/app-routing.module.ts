import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './autentication/login/login.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './compoonents/admin/admin.component';
import { RegisterComponent } from './autentication/register/register.component';
import { AccountComponent } from './compoonents/account/account.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },

  { path: 'about', component: AboutComponent },
  { path: 'users', component: UserComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'account', component: AccountComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'search/:keyword', component: ProductListComponent },
  { path: 'categories/:id', component: ProductListComponent },
  { path: 'categories', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [],
  exports: [RouterModule],
  providers: [provideRouter(routes)]
})
export class AppRoutingModule { }
