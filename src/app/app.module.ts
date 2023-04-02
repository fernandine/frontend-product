import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './autentication/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';

import { UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from "./components/footer/footer.component";
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { PrimeNgModule } from './primeng.module';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './header/header.component';
import { NotificationService } from './services/notification.service';
import { HttpRequestInterceptor } from './interceptor/http.interceptor';
import { MessageService } from 'primeng/api';
import { StatusRolePipe } from './status-role.pipe';
import { RegisterComponent } from './autentication/register/register.component';
import { LoginService } from './services/login.service';
import { AccountComponent } from './compoonents/account/account.component';
import { EditProductsComponent } from './area-admin/edit-products/edit-products.component';
import { AdminComponent } from './compoonents/admin/admin.component';
import { CategoriesComponent } from './area-admin/categories/categories.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        SearchComponent,
        ProductDetailsComponent,
        CartStatusComponent,
        StatusRolePipe,
        CartDetailsComponent,
        RegisterComponent,
        CheckoutComponent,
        LoginComponent,
        UserComponent,
        OrderHistoryComponent,
        HeaderComponent,
        AboutComponent,
        EditProductsComponent,
        FooterComponent,
        CategoriesComponent,
        UserComponent,
        ContactComponent,
        AccountComponent,
        AdminComponent

          ],
    providers: [
        ProductService,
        [AuthGuard],
        CartService,
        MessageService,
        NotificationService,
        LoginService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNgModule,

    ]
})
export class AppModule { }
