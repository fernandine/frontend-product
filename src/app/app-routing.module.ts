import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autentication/login/login.component';
import { OrderHistoryComponent } from './account/order-history/order-history.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './area-admin/admin/admin.component';
import { AccountComponent } from './account/account/account.component';
import { RegisterComponent } from './autentication/register/register.component';
import { AdressListComponent } from './account/adress-list/adress-list.component';
import { ProfileComponent } from './account/profile/profile.component';
import { FavoriteComponent } from './account/favorite/favorite.component';
import { CheckoutComponent } from './checkout/checkout/checkout.component';
import { CartDetailsComponent } from './checkout/cart-details/cart-details.component';
import { ProfileFormComponent } from './checkout/profile-form/profile-form.component';
import { DeliveryComponent } from './checkout/delivery/delivery.component';
import { PaymentComponent } from './checkout/payment/payment.component';

const routes: Routes = [
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },

  { path: 'account', component: AccountComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'addresses', component: AdressListComponent },
    { path: 'orders', component: OrderHistoryComponent },
    { path: 'favorites', component: FavoriteComponent },
  ]},

  { path: 'checkout', component: CheckoutComponent, children: [
    { path: 'cart-details', component: CartDetailsComponent },
    { path: 'profile-form', component: ProfileFormComponent },
    { path: 'delivery', component: DeliveryComponent },
    { path: 'payment', component: PaymentComponent },
  ]},

  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
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
